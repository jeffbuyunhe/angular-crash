import { Injectable } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Injectable({
  providedIn: 'root'
})
/* Temporary service for game logic until backend portion is started */
export class GameLogicService {

  gameMultiplier: number;

  /* Test Labels */
  labels: Array<any> = [
    'Number'
  ];

  /* Test Datasets */
  datasets: Array<any> = [
    {
      data: [],
      borderColor: 'black',
    }
  ]

  constructor() { this.gameMultiplier = this.setGameMultiplier(); this.datasets[0].data = [this.getGameMultiplier()] }

  /* Sets the bet multiplier for the game round */
  setGameMultiplier(): number {
    let instantCrash: number = Math.floor(Math.random() * 50) + 1
    if (instantCrash == 1) {
      return 1;
    }
    return <number><unknown>Math.min(1 / Math.random(), 5000).toFixed(2);
  }

  /* Returns bet multiplier for the game round */
  getGameMultiplier(): number {
    return this.gameMultiplier;
  }

  /* Returns chart data */
  getChartData(): ChartConfiguration<'line'>['data'] {
    return { labels: this.labels, datasets: this.datasets };
  }
}
