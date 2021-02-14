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

  ngOnInit(): void {
    const [thousands, hundreds, tens, ones]: number[] = new Date()
      .getFullYear()
      .toString()
      .split('')
      .map(stringNum => {
        const index = parseInt(stringNum, 10) - 1;
        return index >= 0 ? index : null;
      });

    console.log({ thousands, hundreds, tens, ones });

    this.selection.set(PLACE.thousands, thousands ?? null);
    this.selection.set(PLACE.hundreds, hundreds ?? null);
    this.selection.set(PLACE.tens, tens ?? null);
    this.selection.set(PLACE.ones, ones ?? null);
    this.sumTotal();
  }

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
