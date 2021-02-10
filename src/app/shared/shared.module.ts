import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColonComponent } from './glyphs/colon/colon.component';
import { CompositeGlyphComponent } from './glyphs/composite-glyph/composite-glyph.component';
import { SlashComponent } from './glyphs/slash/slash.component';

@NgModule({
  declarations: [CompositeGlyphComponent, SlashComponent, ColonComponent],
  exports: [CompositeGlyphComponent, SlashComponent, ColonComponent],
  imports: [CommonModule],
})
export class SharedModule {}
