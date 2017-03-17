import { Injectable } from '@angular/core';

@Injectable()
export class JokesService {

  constructor() { }

  getRandom() {
    return 'Chuck Norris was bitten by a cobra and after five days of excruciating pain... the cobra died.'
  }

}
