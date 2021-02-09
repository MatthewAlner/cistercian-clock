import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockPageComponent } from './clock-page/clock-page.component';
import { CompositeGlyphComponent } from './glyphs/composite-glyph/composite-glyph.component';
import { TimeComponent } from './time/time.component';
import { DateComponent } from './date/date.component';
import { SlashComponent } from './glyphs/slash/slash.component';
import { ColonComponent } from './glyphs/colon/colon.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockPageComponent,
    CompositeGlyphComponent,
    TimeComponent,
    DateComponent,
    SlashComponent,
    ColonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
