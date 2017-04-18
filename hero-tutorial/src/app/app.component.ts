import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2>{{hero}} details!`,
})
export class AppComponent {
  name:string;
  title:string;
  hero:string;
  
  constructor(){
    this.name = 'Leon';
    this.title = 'Tour of Heroes';
    this.hero = 'Windstorm';
  }
}
