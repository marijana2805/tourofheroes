import {Injectable} from '@angular/core';
import {Heroji} from './heroji';
import {Herojke} from './topheroji';
import {Observable, of } from 'rxjs';
import {PorukaService} from './poruka.service';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HerojiService {
  private  heroesUrl = 'api/heroes';
  private handleError<T>(operation= 'operation', result?: T) {
    return(error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.poruka}`);
      return of(result as T);
    };
  }
  constructor(private porukaService: PorukaService,
              private http: HttpClient) {
  }

  getHerojke(): Observable<Heroji[]> {
   return this.http.get<Heroji[]>(this.heroesUrl)
     .pipe(
       tap(_ => this.log('fetched hero')),
       catchError(this.handleError<Heroji[]>('getHero', []))
     );
  }

  getHero(id: number): Observable<Heroji> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Heroji>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Heroji>(`getHero id=${id}`))
    );
  }

  private log(poruka: string) {
    this.porukaService.add(`HerojiService: ${poruka}`);
  }
}
