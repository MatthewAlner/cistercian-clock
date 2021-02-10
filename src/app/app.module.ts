import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockPageComponent } from './clock-page/clock-page.component';
import { DateComponent } from './clock-page/date/date.component';
import { TimeComponent } from './clock-page/time/time.component';
import { KeyPageComponent } from './key-page/key-page.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ClockPageComponent,
    TimeComponent,
    DateComponent,
    KeyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
