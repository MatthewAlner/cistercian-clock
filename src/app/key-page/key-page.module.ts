import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { GlyphGridComponent } from './glyph-grid/glyph-grid.component';
import { KeyPageComponent } from './key-page.component';

@NgModule({
  declarations: [GlyphGridComponent, KeyPageComponent],
  imports: [BrowserModule, CommonModule, SharedModule],
})
export class KeyPageModule {}
