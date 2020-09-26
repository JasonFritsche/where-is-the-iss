import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
})
export class CrewComponent implements OnInit {
  constructor() {}

  public crewData: Array<any> = [
    {
      name: 'Chris Cassidy',
    },
    {
      name: 'Anatoly Ivanishin',
    },
    {
      name: 'Ivan Vagner',
    },
  ];
  public crewSize: number = 3;

  ngOnInit(): void {}
}
