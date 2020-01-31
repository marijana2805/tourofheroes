import {Injectable} from '@angular/core';
import {Heroji} from './heroji';
import {Observable, of} from 'rxjs';
import {PorukaService} from './poruka.service';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HerojiService {
  private heroesUrl = 'api/heroes';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
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

  updateHero(hero: Heroji): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updatedHero'))
    );
  }

  addHero(hero: Heroji): Observable<Heroji> {
    return this.http.post<Heroji>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Heroji) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Heroji>('addHero'))
    );

  }

  deleteHero(hero: Heroji | number): Observable<Heroji> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Heroji>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Heroji>('deletedHero'))
    );
  }

  searchHeroes(term: string): Observable<Heroji[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Heroji[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes "${term}"`)),
      catchError(this.handleError<Heroji[]>('search hero, []'))
    );
  }
}
