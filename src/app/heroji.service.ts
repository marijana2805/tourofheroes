import {Injectable} from '@angular/core';
import {Heroji} from './heroji';
import {Herojke} from './topheroji';
import {Observable, of } from 'rxjs';
import {PorukaService} from './poruka.service';

@Injectable({
  providedIn: 'root',
})
export class HerojiService {
  constructor(private porukaService: PorukaService) {
  }

  getHerojke(): Observable<Heroji[]> {
    this.porukaService.add('HeroService: fetched heroes');
    return of(Herojke);
  }

  getHero(id: number): Observable<Heroji> {
    this.porukaService.add('HerojiService: fetched hero id=${id}');
    return of(Herojke.find(hero => hero.id === id));
  }
}
