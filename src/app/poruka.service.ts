import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PorukaService {
  poruka: string[] = [];

  add(poruka: string) {
    this.poruka.push(poruka);
  }

  clear() {
    this.poruka = [];
  }
  constructor() { }
}
