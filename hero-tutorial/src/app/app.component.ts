import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2>{{hero}} details!`,
})
export class AppComponent {
  name = 'Guang';
  title = 'Heroes list';
  hero = 'Windstorm';
}
