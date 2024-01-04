import { Injectable } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Injectable({
  providedIn: 'root'
})
/* Temporary service for game logic until backend portion is started */
export class GameLogicService {

  gameTick: number;

  gameMultiplier: number;

  labels: Array<any> = [];

  datasets: Array<any> = [
    {
      data: [],
    }
  ]

  options: ChartOptions<'line'> = {
    elements: {
      line: {
        tension: 0.2
      },
      point: {
        radius: 0
      }
    },
    responsive: false,
    plugins: {
      legend: {
        display: false
      },
    },
  };

  constructor() {
    this.gameTick = 0;
    this.gameMultiplier = this.setGameMultiplier();
    this.updateChartData();
  }

  /* Returns bet multiplier for the game round */
  getGameMultiplier(): number {
    return this.gameMultiplier;
  }

  /* Sets the bet multiplier for the game round */
  setGameMultiplier(): number {
    let instantCrash: number = Math.floor(Math.random() * 50) + 1
    if (instantCrash == 1) {
      return 1;
    }
    return <number><unknown>Math.min(1 / Math.random(), 5000).toFixed(2);
  }

  /* Returns chart options */
  getOptions(): object {
    return this.options;
  }

  /* Returns chart data */
  getChartData(): ChartConfiguration<'line'>['data'] {
    return { labels: this.labels, datasets: this.datasets };
  }

  /* Increments game tick by one, updates chart */
  incrementGameTick() {
    this.gameTick++;
    this.updateChartData();
  }

  /* Adds data to chart based off of game tick */
  updateChartData() {
    this.labels.push(this.gameTick);
    this.datasets[0].data.push(1.0024 * Math.pow(1.0718, this.gameTick));
  }
}
