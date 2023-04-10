import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js';
Chart.register(...registerables)

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
public chart: any;
public chart2: any;

  ngOnInit(): void {
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
	       datasets: [
          {
            label: "Compte",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'orange'
          },
          {
            label: "Operation",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'gray'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });

    this.chart2== new Chart("MyChart2", {
      type: 'doughnut',
      data: {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'orange',
            'gray',
            '#00008b'
          ],
          hoverOffset: 4
        }]
      },
    });

    





  }
  

}
