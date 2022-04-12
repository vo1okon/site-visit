import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MemmosComponent } from './memmos/memmos.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ExpeditionComponent } from './expedition/expedition.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    MemmosComponent,
    NewsComponent,
    AboutComponent,
    ContactsComponent,
    ExpeditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
