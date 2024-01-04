import { Component, inject, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser, NgIf } from "@angular/common";
import { GameLogicService } from '../game-logic.service';
import { CountUpModule } from 'ngx-countup';
import { CountUpService } from '../count-up.service';
import { BaseChartDirective, NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

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

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  countUpOptions: object;
  lineChartOptions: object;
  lineChartData: ChartConfiguration<'line'>['data'];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    this.countUpOptions = this.countUpService.getOptions();
    this.lineChartOptions = this.gameLogicService.getOptions();
    this.lineChartData = this.gameLogicService.getChartData();

    this.gameMultiplier = this.gameLogicService.getGameMultiplier();
  }

  incrementGameTick() {
    this.gameLogicService.incrementGameTick();
    this.chart?.update();
  }
}
