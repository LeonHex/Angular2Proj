import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  name:string;
  title:string;
  hero:string;
  heroes:Array<string>;
  
  constructor(){
    this.name = 'Leon';
    this.title = 'Tour of Heroes';
    this.hero = 'Windstorm';
    this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  }
}
