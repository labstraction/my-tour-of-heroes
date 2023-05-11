import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from 'src/app/model/hero';
import { HEROES } from 'src/app/model/mock-heroes';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  constructor(private messageS: MessageService) { }

  getHeroes():Observable<Hero[]>{
    const heroesObservables = of(HEROES);
    this.messageS.add('HeroService: fetched heroes');
    return heroesObservables;
  }

}


