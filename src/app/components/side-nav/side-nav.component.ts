import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  public opened: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public OnToggled() {
    this.opened = !this.opened;
  }
}
