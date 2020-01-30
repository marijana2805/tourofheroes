import { Injectable } from '@angular/core';
import {Heroji} from './heroji';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 31, name: 'Milica Prepelica'},
      {id: 32, name: 'Nina Balerina'},
      {id: 33, name: 'Nikolica Prikolica'},
      {id: 34, name: 'Dusica Zvoncica'},
      {id: 35, name: 'Vera Kalimera'},
      {id: 36, name: 'Paola Dodjavola'},
      {id: 37, name: 'Mona Makarona' },
      {id: 38, name: 'Dunja Uzbuna'},
      {id: 39, name: 'Drita Manita'},
      {id: 40, name: 'Ptica Trkacica'}
    ];
    return {heroes};
  }
  genId(heroes: Heroji[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 31;
  }
}
