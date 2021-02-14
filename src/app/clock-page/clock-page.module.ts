import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { ClockPageComponent } from './clock-page.component';
import { DateComponent } from './date/date.component';
import { TimeComponent } from './time/time.component';

@NgModule({
  declarations: [DateComponent, TimeComponent, ClockPageComponent],
  imports: [BrowserModule, CommonModule, SharedModule],
})
export class ClockPageModule {}
