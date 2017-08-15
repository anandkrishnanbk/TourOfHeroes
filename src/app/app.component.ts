import { Component } from '@angular/core';
export class Hero {
  id: number;
  name: string;
}
const HEROES: Hero[] = [
  {id: 11, name: 'Mr. Nice'},
  {id: 12, name: 'Mr. Nice'},
  {id: 13, name: 'Narco'},
  {id: 14, name: 'Bat man'},
  {id: 15, name: 'Super man'},
  {id: 16, name: 'Spider man'},
  {id: 17, name: 'Captain America'},
  {id: 18, name: 'Hulk'},
  {id: 19, name: 'He man'},
  {id: 20, name: 'Fire man'}];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
  heroes=HEROES;
  //hero = 'windstorm';
  /*hero: Hero = {
    id : 1,
    name:'Windstorm'
  };*/
}
