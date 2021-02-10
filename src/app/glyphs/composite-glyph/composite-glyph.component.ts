import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SimpleChangeGeneric } from '../../simple-change-generic';
import clamp from 'lodash-es/clamp';

interface ICompositeGlyphComponentChanges extends SimpleChanges {
  value: SimpleChangeGeneric<number>;
}

@Component({
  selector: 'app-composite-glyph',
  templateUrl: './composite-glyph.component.html',
  styleUrls: ['./composite-glyph.component.scss']
})
export class CompositeGlyphComponent implements OnInit, OnChanges {

  @Input() value: number;
  public thousands: number;
  public hundreds: number;
  public tens: number;
  public ones: number;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: ICompositeGlyphComponentChanges): void {
    if (changes.value && changes.value.currentValue != null) {
      const valueAsString: string = this.clampWithinBounds(changes.value.currentValue).toString().padStart(4, '0');
      const [thousands, hundreds, tens, ones ] = valueAsString.split('');
      this.thousands = parseInt(thousands, 10);
      this.hundreds = parseInt(hundreds, 10);
      this.tens = parseInt(tens, 10);
      this.ones = parseInt(ones, 10);
    }
  }

  private clampWithinBounds(value: number): number {
    return clamp(value, 1, 9999);
  }
}
