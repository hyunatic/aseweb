import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'app/services/data.service';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-simonsays',
  templateUrl: './simonsays.component.html',
  styleUrls: ['./simonsays.component.css']
})
export class SimonsaysComponent implements OnInit {
  //Declare variables
  simonSays: any;
  time: string;

  //Statistic Variable
  agemin: number;
  agmax: number;
  recordcount: number;
  ageavg: number;
  agestd: number;

  scoremin: number;
  scoremax: number;
  scoreavg: number;
  scorestd: number;

  mintime: number;
  maxtimer: number;
  timeavg: number;
  timestd: number;

  username: string = localStorage.getItem("username");

  constructor(private dataService: DataService, private router: Router) { }

  VerifyLogin() {
    if (this.username == null) {
      this.router.navigateByUrl('/login')
    }
  }

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
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(0,0,255,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  ngOnInit() {
    this.VerifyLogin();
    this.DisplayData();
    this.TimeDisplay();
  }
  DisplayData() {
    this.dataService.getSimonSays().subscribe(data => {
      this.simonSays
        = data;
      this.populateLineGraph();
      this.populateScatterPlot();
      this.CalculateStatistic();
    });
  }
  CalculateStatistic() {
    var age = this.simonSays.map(x => parseInt(x.age))
    this.agemin = Math.min(...age)
    this.agmax = Math.max(...age)
    this.recordcount = age.length
    this.ageavg = age.reduce((total, current) => total += current) / this.recordcount
    this.agestd = Math.sqrt(age.map(x => Math.pow(x - this.ageavg, 2)).reduce((a, b) => a + b) / this.recordcount)

    var score = this.simonSays
      .map(x => parseInt(x.score))
    this.scoremin = Math.min(...score)
    this.scoremax = Math.max(...score)
    this.scoreavg = score.reduce((total, current) => total += current) / this.recordcount
    this.scorestd = Math.sqrt(score.map(x => Math.pow(x - this.scoreavg, 2)).reduce((a, b) => a + b) / this.recordcount)


    var time = this.simonSays
      .map(x => parseInt(x.time))
    this.mintime = Math.min(...time)
    this.maxtimer = Math.max(...time)
    this.timeavg = time.reduce((total, current) => total += current) / this.recordcount
    this.timestd = Math.sqrt(time.map(x => Math.pow(x - this.timeavg, 2)).reduce((a, b) => a + b) / this.recordcount)
  }

  TimeDisplay() {
    var current = new Date();
    this.time = current.toLocaleTimeString();
  }
  populateLineGraph() {
    this.lineChartData.forEach((x, i) => {
      const data: number[] = x.data as number[];
      var score = this.simonSays
        .map(x => parseInt(x.score))
      score.forEach(x => data.push(x));
    });
    this.simonSays
      .forEach(x => this.lineChartLabels.push(x.time))
  }

  //Avg Score for age group (Scatter Plot)
  public scatterChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Age'
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
    }
  };
  public scatterChartLabels: Label[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public scatterChartData: ChartDataSets[] = [
    {
      data: [],
      label: 'User A',
      pointRadius: 10,
    },
  ];
  public scatterPlottColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(0,255,0,0.3)',
    },
  ];
  public scatterChartType: ChartType = 'scatter';
  populateScatterPlot() {
    this.scatterChartData.forEach(x => {
      const data: any[] = x.data as any[];
      this.simonSays
        .map(z => ({ x: parseInt(z.age), y: parseInt(z.score) })).forEach(a => data.push(a))
    })
  }
}


