import {Component, OnInit} from '@angular/core';
import {Heroji} from '../heroji';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {HerojiService} from '../heroji.service';

@Component({
  selector: 'app-heroji-detail',
  templateUrl: './heroji-detail.component.html',
  styleUrls: ['./heroji-detail.component.css']
})

export class HerojiDetailComponent implements OnInit {
  heroji: Heroji;

  constructor(
    private route: ActivatedRoute,
    private herojiService: HerojiService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.herojiService.getHero(id)
      .subscribe(heroji => this.heroji = heroji);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.herojiService.updateHero(this.heroji)
      .subscribe(() => this.goBack());
  }
}
