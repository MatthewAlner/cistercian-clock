import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClockPageComponent } from './clock-page/clock-page.component';
import { KeyPageComponent } from './key-page/key-page.component';

const routes: Routes = [
  { path: '', component: ClockPageComponent },
  { path: 'clock', component: ClockPageComponent },
  { path: 'key', component: KeyPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
