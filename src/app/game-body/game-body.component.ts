import { Component, inject, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, NgIf } from "@angular/common";
import { GameLogicService } from '../game-logic.service';
import { CountUpModule } from 'ngx-countup';
import { CountUpService } from '../count-up.service';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-game-body',
  standalone: true,
  imports: [CountUpModule, NgChartsModule, NgIf],
  templateUrl: './game-body.component.html',
  styleUrl: './game-body.component.css'
})

/* Provides logic for game body, including the graph and multiplier number */
export class GameBodyComponent {
  isBrowser: boolean = false;
  gameLogicService: GameLogicService = inject(GameLogicService);
  countUpService: CountUpService = inject(CountUpService);

  gameMultiplier: number;
  countUpOptions: object;
  lineChartData: ChartConfiguration<'line'>['data'];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.gameMultiplier = this.gameLogicService.getGameMultiplier();
    this.countUpOptions = this.countUpService.getOptions();
    this.lineChartData = this.gameLogicService.getChartData();
  }

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
}
