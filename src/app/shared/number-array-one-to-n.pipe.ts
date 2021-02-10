import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberArrayOneToN',
})
export class NumberArrayOneToNPipe implements PipeTransform {
  transform(value: number): number[] {
    return value || false ? Array.from(Array(value).keys()) : [];
  }
}
