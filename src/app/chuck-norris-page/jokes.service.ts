import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class JokesService {

  constructor(private myHttp: Http) { }

  getRandom() {
    return this.myHttp.get('http://api.icndb.com/jokes/random')
      .toPromise()
      .then(result => result.json())
  }

}
