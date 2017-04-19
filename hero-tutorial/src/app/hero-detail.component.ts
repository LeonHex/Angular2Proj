import { Component, Input } from '@angular/core';

import { Hero } from './hero.js';

@Component({
    selector: 'hero-detail',
    templateUrl: './dist/app/hero-detail.component.html'
})
export class HeroDetailComponent {
    @Input() hero: Hero;
}