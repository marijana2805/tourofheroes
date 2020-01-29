import {Component, OnInit} from '@angular/core';
import {Heroji} from '../heroji';
// import {Herojke} from '../topheroji';
import {HerojiService} from '../heroji.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Heroji [];

  constructor(private herojiService: HerojiService) {
  }

  ngOnInit() {
    this.getHerojke();
  }

  getHerojke(): void {
    this.herojiService.getHerojke()
      .subscribe(heroes => this.heroes = heroes);
  }
}
