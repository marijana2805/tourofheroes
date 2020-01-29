import { Component, OnInit } from '@angular/core';
import { PorukaService} from '../poruka.service';

@Component({
  selector: 'app-poruka',
  templateUrl: './poruka.component.html',
  styleUrls: ['./poruka.component.css']
})
export class PorukaComponent implements OnInit {

  constructor(public porukaService: PorukaService) { }

  ngOnInit() {
  }

}
