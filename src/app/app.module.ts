import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockPageComponent } from './clock-page/clock-page.component';
import { CompositeGlyphComponent } from './composite-glyph/composite-glyph.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockPageComponent,
    CompositeGlyphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }