import { Component, OnInit } from '@angular/core';
import { Heroji} from '../heroji';
import {HerojiService} from '../heroji.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Heroji[] = [];
  constructor(private herojiService: HerojiService) { }

  ngOnInit() {
    this.getHerojke();
  }

  getHerojke(): void {
    this.herojiService.getHerojke()
      .subscribe(heroes => this.heroes = heroes.slice(0, 5));
  }

}
