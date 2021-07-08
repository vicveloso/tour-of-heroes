import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  //retornar os HEROES que estão na arquivo mock-heroes
  getHeroes(): Hero[] {
    return HEROES;
  }
  constructor() { }
}
