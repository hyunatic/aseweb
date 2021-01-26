import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';
import { GameRecord } from '../model/GameRecord';

@Component({
  selector: 'app-colorgame',
  templateUrl: './colorgame.component.html',
  styleUrls: ['./colorgame.component.css'],
  providers: [DataService]
})
export class ColorgameComponent implements OnInit {

  colourGame: GameRecord[];
  constructor(private dataService: DataService) { }

  ngOnInit(){
    this.DisplayData();
  }
  DisplayData(){
    this.dataService.getColourGame().subscribe(data => {
      this.colourGame = data;
    });
  }

}
