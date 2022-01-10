import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MemmosComponent } from './memmos/memmos.component';

const routes: Routes = [
  {path: ' ', component: HomeComponent},
  {path: 'home', component:HomeComponent },
  {path: 'calendar', component:CalendarComponent },
  {path: 'memmos', component:MemmosComponent },
  {path: '%%', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
