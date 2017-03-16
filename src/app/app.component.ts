import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  quoteA = {
    text: 'I love fries.',
    author: 'Neil Armstrong'
  };

  quoteB = {
    text: 'Stay thirsty, my friends. Dos Equis.',
    author: 'Most Interesting Man In The World'
  };
}
