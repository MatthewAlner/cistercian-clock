import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColonComponent } from './glyphs/colon/colon.component';
import { CompositeGlyphComponent } from './glyphs/composite-glyph/composite-glyph.component';
import { SlashComponent } from './glyphs/slash/slash.component';
import { NumberArrayOneToNPipe } from './number-array-one-to-n.pipe';

@NgModule({
  declarations: [CompositeGlyphComponent, SlashComponent, ColonComponent, NumberArrayOneToNPipe],
  exports: [CompositeGlyphComponent, SlashComponent, ColonComponent, NumberArrayOneToNPipe],
  imports: [CommonModule],
})
export class SharedModule {}
