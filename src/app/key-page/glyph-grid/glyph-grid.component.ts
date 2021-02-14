import { Component, OnInit } from '@angular/core';
import sum from 'lodash-es/sum';

enum PLACE {
  ones = 1,
  tens = 10,
  hundreds = 100,
  thousands = 1000,
}

@Component({
  selector: 'app-glyph-grid',
  templateUrl: './glyph-grid.component.html',
  styleUrls: ['./glyph-grid.component.scss'],
})
export class GlyphGridComponent implements OnInit {
  constructor() {}
  public places = PLACE;

  public selection: Map<PLACE, number> = new Map<number, number>();
  public total: number;

  ngOnInit(): void {}

  public onGlyphClick(index: number, place: PLACE): void {
    const prevValue = this.selection.get(place);
    if (prevValue === index) {
      this.selection.set(place, null);
    } else {
      this.selection.set(place, index);
    }
    this.sumTotal();
  }

  private sumTotal(): void {
    const entries = Array.from(this.selection.entries())
      .filter(([, num]) => num != null)
      .map(([place, num]) => (num + 1) * place);
    this.total = sum(entries);
  }
}
