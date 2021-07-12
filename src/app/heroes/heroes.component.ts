import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Hero } from '../hero';
//importando matriz que está no arquivo "mock-heroes": import { HEROES } from '../mock-heroes';
//importando matriz que está no arquivo "hero.service"
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit, OnDestroy {
  selectedHero ? : Hero;

  heroes: Hero[] = [];
  subscription!: Subscription;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.subscription = this.heroService.getHeroes().subscribe(response => this.heroes = response);

    // Usando Promise:
    // this.heroService.getHeroes().toPromise().then(response => {
    //   this.heroes = response;
    // });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
