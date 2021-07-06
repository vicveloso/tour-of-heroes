import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//importando matriz que está no arquivo "mock-heroes"
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  selectedHero ? : Hero;

  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
