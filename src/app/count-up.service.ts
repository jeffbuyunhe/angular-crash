import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/* Provides parameters for the CountUp library */
export class CountUpService {

  options: object = {
    startVal: 1,
    decimalPlaces: 2,
    useGrouping: false,
    easingFn: this.easingFunction,
  }

  constructor() { }

  getOptions(): object {
    return this.options;
  }

  easingFunction(t: number, b: number, c: number, d: number): number {
    return c * (t /= d) * t + b
  }
}
