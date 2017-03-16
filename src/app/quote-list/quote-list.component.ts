import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  quotes: Array<any> = [
    {
      id: 1,
      text: 'I love fries.',
      author: 'Neil Armstrong'
    }, {
      id: 12,
      text: 'Stay thirsty, my friends. Dos Equis.',
      author: 'Most Interesting Man In The World'
    }, {
      id: 99,
      text: 'Stay hungry. Stay foolish.',
      author: 'Ghost of Steve Jobs'
    }, {
      id: 101,
      text: 'Do things that don\'t scale.',
      author: 'Steve Jobs'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  removeQuote (id) {
    this.quotes = this.quotes.filter(
      (oneQuote) => oneQuote.id !== id
    );
  }

}
