import { Component, Input } from '@angular/core';
import { OnInit } from "@angular/core";
import { Hero } from './hero';
import { HeroService } from "./hero.service";

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  name: string;
  title: string;
  selectedHero: Hero;
  heroes: Hero[];


  constructor(private heroService: HeroService) {
    this.name = 'Leon';
    this.title = 'Tour of Heroes';
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
}
