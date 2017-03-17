import { Component, OnInit } from '@angular/core';
import { JokesService } from './jokes.service';

@Component({
  selector: 'app-chuck-norris-page',
  templateUrl: './chuck-norris-page.component.html',
  styleUrls: ['./chuck-norris-page.component.css'],
  providers: [JokesService]
})
export class ChuckNorrisPageComponent implements OnInit {

  currentJoke: string = '';

  constructor(private theService: JokesService) { }

  ngOnInit() {
    this.currentJoke = this.theService.getRandom();
  }

}
