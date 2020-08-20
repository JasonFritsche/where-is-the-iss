import { Component, OnInit } from '@angular/core';
import { CrewService } from 'src/app/services/crew.service';
import { ICrewResult } from 'src/app/models/ICrewResult';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
})
export class CrewComponent implements OnInit {
  constructor(private crewService: CrewService) {}

  public crewData: Array<any> = [];
  public crewSize: number = null;

  ngOnInit(): void {
    this.crewService.getCrew().subscribe((res: ICrewResult) => {
      this.crewData = res.people;
      this.crewSize = res.number;
      console.log(this.crewData);
    });
  }
}
