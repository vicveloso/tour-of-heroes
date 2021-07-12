import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//importando matriz que está no arquivo "mock-heroes": import { HEROES } from '../mock-heroes';
//importando matriz que está no arquivo "hero.service"
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  selectedHero ? : Hero;

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(response => this.heroes = response);

    // Usando Promise:
    // this.heroService.getHeroes().toPromise().then(response => {
    //   this.heroes = response;
    // });
  }
}
