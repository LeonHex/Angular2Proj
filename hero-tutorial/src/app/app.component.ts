import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  name: string;
  title: string;
  hero: Hero;
  heroes: Array<string>;

  constructor() {
    this.name = 'Leon';
    this.title = 'Tour of Heroes';
    this.hero = new Hero(1,'Windstorm');
    this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  }
}


export class Hero {
  public id: number;
  public name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}