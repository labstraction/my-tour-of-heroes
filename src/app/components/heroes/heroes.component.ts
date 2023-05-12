import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Hero } from 'src/app/model/hero';
import { HEROES } from 'src/app/model/mock-heroes';
import { HeroService } from 'src/app/services/hero/hero.service';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit{

  //hero: Hero = {id: 1, name: 'windstorm'}
  heroes?: Hero[];
  selectedHero?: Hero;

  constructor(private heroS:HeroService, private messageS: MessageService){}

  ngOnInit(): void {
    this.getHeroes();
  }




  getHeroes(){
    this.heroS.getHeroes().subscribe({
      next: newHeroes => this.heroes = newHeroes,
      error: err => console.log(err)
    })

  }


  // onSelect(hero:Hero){
  //   console.log(hero);
  //   this.selectedHero=hero;
  //   this.messageS.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }
}


