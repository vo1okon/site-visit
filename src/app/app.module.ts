import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ NewsComponent} from './news.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MemmosComponent } from './memmos/memmos.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    CalendarComponent,
    MemmosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
