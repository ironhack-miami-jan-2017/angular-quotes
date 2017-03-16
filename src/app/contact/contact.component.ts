import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactId: string;

  constructor(private myRoute: ActivatedRoute) { }

  ngOnInit() {
    this.myRoute.params.subscribe((paramsResult) => {
      this.contactId = paramsResult['id'];
    });
  }

}
