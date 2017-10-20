import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

//import { HEROES } from './mock-heroes';

@Injectable()

export class HeroService {

  //private heroesUrl='http://localhost:3000/heroes';
  private heroesUrl='api/heroes';
  private headers = new Headers({"Content-Type":"application/json"})
  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
                   .toPromise().then(response => {
                       return response.json().data as Hero[]
                     })
                   .catch(this.handleError);
  }

  private handleError(error: any): Promise<any>
  {
    console.error('an error occured',error);
    return Promise.reject(error.message || error);
  }
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Hero[])
    .catch(this.handleError);
    //return this.getHeroes()
      //.then(heroes => heroes.find(hero => hero.id === id));
  }
  update(hero:Hero):Promise<Hero>{
    const url=`${this.heroesUrl}/${hero.id}`;
    return this.http.put(url,JSON.stringify(hero),{headers:this.headers}).toPromise()
    .then(() =>
    {
      debugger;
      return hero;
    })
    .catch(this.handleError);
  }
  create(name: string): Promise<Hero>
  {
    return this.http.post(this.heroesUrl, JSON.stringify({name:name}),{headers:this.headers})
    .toPromise()
    .then(res => res.json().data as Hero)
    .catch(this.handleError);
  }
  delete(id:number): Promise<void>{
    const url=`${this.heroesUrl}/${id}`;
     return this.http.delete(url,{headers:this.headers})
     .toPromise()
     .then(() => null)
     .catch(this.handleError);
  }

}
