import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { HEROES } from './heroes-mock';
import { Hero } from './hero';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message after fethcing the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
