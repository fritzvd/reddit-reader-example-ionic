import { Injectable } from '@angular/core';

/*
  Generated class for the BeyonceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BeyonceProvider {

  constructor() {
    console.log('Hello BeyonceProvider Provider');
  }

  sing () {
    return 'Oh-oh-oh-oh-oh-oh-oh';
  }

}
