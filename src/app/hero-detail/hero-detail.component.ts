//como Hero é um input o angular/core foi alterado para incluir input
import { Component, OnInit, Input } from '@angular/core';
// importar a propriedade Hero que está ligada ao HeroDetailComponent
import { Hero } from '../hero';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
//  adicionar a propriedade hero com o decorador input
  @Input() hero?: Hero;
  constructor() { }

  ngOnInit(): void {
  }

}
