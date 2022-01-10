import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';
import { MemmosComponent } from './memmos/memmos.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {path: ' ', component: NewsComponent},
  {path: 'news', component:NewsComponent },
  {path: 'calendar', component:CalendarComponent },
  {path: 'memmos', component:MemmosComponent },
  {path: '%%', component:NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
