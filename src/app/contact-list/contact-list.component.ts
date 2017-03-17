import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Array<Object> = [];

  constructor(
    private router: Router,
    private myService: CharactersService
  ) { }

  ngOnInit() {
    this.fetchChars();
  }

  viewDetails(id) {
    this.router.navigate(['contact', id]);
  }

  fetchChars () {
    this.myService.fetchCharacters()
      .then((charactersList) => {
        this.contacts = charactersList;
      })
      .catch((err) => {
        console.log('Fetch Characters error.')
        console.log(err);
      });
  }

}
