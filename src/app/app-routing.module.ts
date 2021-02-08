import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClockPageComponent } from './clock-page/clock-page.component';

const routes: Routes = [
  { path: '', component: ClockPageComponent },
  { path: 'clock', component: ClockPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
