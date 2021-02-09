// Generic extension of SimpleChange from @angular/core
// This can be used in components to provide type-safe properties in ngOnChanges
// Hopefully in the future this will get implemented in Angular's standard SimpleChange.
// See https://github.com/angular/angular/issues/17560
import { SimpleChange } from '@angular/core';

export declare class SimpleChangeGeneric<T = any> extends SimpleChange {
  previousValue: T;
  currentValue: T;
  firstChange: boolean;
  constructor(previousValue: T, currentValue: T, firstChange: boolean);
  /**
   * Check whether the new value is the first value assigned.
   */
  isFirstChange(): boolean;
}
