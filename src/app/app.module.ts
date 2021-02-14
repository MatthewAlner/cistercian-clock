import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockPageModule } from './clock-page/clock-page.module';
import { KeyPageModule } from './key-page/key-page.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, ClockPageModule, KeyPageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
