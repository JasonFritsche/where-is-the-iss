import {
  AfterViewInit,
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import * as L from 'leaflet';
import { IssLocationService } from 'src/app/services/iss-location.service';
import { switchMap } from 'rxjs/operators';
import { Subscription, timer } from 'rxjs';

// https://leafletjs.com/reference-1.6.0.html#control-zoom

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit, OnInit, OnDestroy {
  private map;
  public location;
  private _markers = new L.LayerGroup();
  private _bounds: Array<number>;
  private _locationSubscription: Subscription;
  private _centerMap: boolean;

  constructor(private locationService: IssLocationService) {}

  /**
   * updates the position of the iss icon
   * @param bounds
   */
  private _loadIssImg(bounds) {
    this._markers.clearLayers();
    const imageUrl = 'assets/images/iss.svg';
    var issIcon = L.divIcon({
      className: 'iss-icon',
      iconSize: [45, 45],
      html: `<img src=${imageUrl}></img>`,
    });
    this._markers.addLayer(L.marker(bounds, { icon: issIcon }));
    this.locationService.stopLoading();
  }

  /**
   * loads the map
   */
  private _loadMap() {
    this.map = L.map('map', {
      center: [13, 13],
      zoom: 3,
    });

    let southWest = L.latLng(-89.98155760646617, 180), //vertical boundaries, horizontal boundaries
      northEast = L.latLng(89.99346179538875, -180);
    let bounds = L.latLngBounds(southWest, northEast);

    this.map.setMaxBounds(bounds);
    this.map.on('drag', () => {
      this.map.panInsideBounds(bounds, { animate: false });
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 6,
        minZoom: 2,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
    this._markers.addTo(this.map);
    this._centerMap = true;
  }

  ngOnInit(): void {
    this.locationService.startLoading();
    this._locationSubscription = timer(0, 2500)
      .pipe(switchMap(() => this.locationService.getLocation()))
      .subscribe((res) => {
        this._bounds = [
          parseFloat(res['latitude'].toFixed(2)),
          parseFloat(res['longitude'].toFixed(2)),
        ];

        this._loadIssImg(this._bounds);

        if (this._centerMap) {
          this._centerMap = false;
          this.map.panTo(this._bounds);
        }
      });
  }

  ngAfterViewInit(): void {
    this._loadMap();
  }

  ngOnDestroy(): void {
    this._locationSubscription.unsubscribe();
  }
}
