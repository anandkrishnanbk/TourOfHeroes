import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  //hero = 'wind storm';
  /*hero: Hero = {
    id : 1,
    name:'Windstorm'
  };*/
  selectedHero: Hero;
  constructor(private heroService: HeroService ) {

  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes );
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
