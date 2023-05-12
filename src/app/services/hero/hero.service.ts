import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Hero } from 'src/app/model/hero';
import { HEROES } from 'src/app/model/mock-heroes';
import { MessageService } from '../message/message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  baseURL = 'https://645e144112e0a87ac0e707b7.mockapi.io/heroes';
  constructor(private messageS: MessageService, private http: HttpClient) { }

  getHeroes():Observable<Hero[]>{
    // const heroesObservables = of(HEROES);
    // this.messageS.add('HeroService: fetched heroes');
    // return heroesObservables;

    return this.http.get<Hero[]>(this.baseURL).pipe(
      tap(_ => this.messageS.add('fetched heroes')),
      catchError((error)=> of([]))
      )
  }


  getHero(id: number): Observable <Hero> {
    // const hero = HEROES.find(h => h.id === id)!;
    // this.messageS.add(`HeroService: fetched hero id=${id}`);
    // return of(hero);

    const heroURL = this.baseURL + "/" + id;
    return this.http.get<Hero>(heroURL);
  }

}


