import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  providers: [HeroService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
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
      this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes );
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
