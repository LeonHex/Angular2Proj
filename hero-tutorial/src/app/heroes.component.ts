import { Component, Input } from '@angular/core';
import { OnInit } from "@angular/core";
import { Hero } from './hero';
import { HeroService } from "./hero.service";

@Component({
  selector: 'my-heroes',
  styleUrls: ['./heroes.component.css'],
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  name: string;
  selectedHero: Hero;
  heroes: Hero[];


  constructor(private heroService: HeroService) {
    this.name = 'Leon';
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
