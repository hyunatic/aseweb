import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-colorgame',
  templateUrl: './colorgame.component.html',
  styleUrls: ['./colorgame.component.css'],
  providers: [DataService]
})
export class ColorgameComponent implements OnInit {
  //Avg Score for age group (Scatter Plot)


  colourGame: any;
  time: string;

  constructor(private dataService: DataService) { }

  //Player Improvement Graph (Line Graph) X-axis = time, Y-axis = score 
  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'User A' },
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Timer'
        },
      }],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Score'
          },
          id: 'y-axis-0',
          position: 'left',
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  }; public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(0,0,255,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  ngOnInit() {
    this.DisplayData();
    this.TimeDisplay();
  }
  DisplayData() {
    this.dataService.getColourGame().subscribe(data => {
      this.colourGame = data;
      this.populateData();
    });

  }
  TimeDisplay() {
    var current = new Date();
    this.time = current.toLocaleTimeString();
  }
  populateData() {
    this.lineChartData.forEach((x, i) => {
      const data: number[] = x.data as number[];
      var score = this.colourGame.map(x => parseInt(x.score))
      score.forEach(x => data.push(x));
    });
    this.colourGame.forEach(x => this.lineChartLabels.push(x.time))

  }

}
