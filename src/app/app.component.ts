import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'site-visit';

  news = 'white';
  calendar = 'black';
  memmos = 'black';
  about = 'black';
  contacts = "black";
  expedition = "black"

  n_on(){
    this.news = 'white';
    this.calendar = 'black';
    this.memmos = 'black';
    this.about = 'black';
    this.contacts = 'black';
    this.expedition = 'black';
  }
  c_on(){
    this.news = 'black';
    this.calendar = 'white';
    this.memmos = 'black';
    this.about = 'black';
    this.contacts = 'black';
    this.expedition = 'black';
  }
  m_on(){
    this.news = 'black';
    this.calendar = 'black';
    this.memmos = 'white';
    this.about = 'black';
    this.contacts = 'black';
    this.expedition = 'black';
  }
  a_on(){
    this.news = 'black';
    this.calendar = 'black';
    this.memmos = 'black';
    this.about = 'white';
    this.contacts = 'black';
    this.expedition = 'black';
  }
  con_on(){
    this.news = 'black';
    this.calendar = 'black';
    this.memmos = 'black';
    this.about = 'black';
    this.contacts = 'white';
    this.expedition = 'black';
  }
  exp_on(){
    this.news = 'black';
    this.calendar = 'black';
    this.memmos = 'black';
    this.about = 'black';
    this.contacts = 'black';
    this.expedition = 'white';
  }
}
