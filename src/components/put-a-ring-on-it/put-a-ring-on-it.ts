import { Component } from '@angular/core';
import { BeyonceProvider } from '../../providers/beyonce/beyonce';

/**
 * Generated class for the PutARingOnItComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'put-a-ring-on-it',
  templateUrl: 'put-a-ring-on-it.html'
})
export class PutARingOnItComponent {

  text: string;

  constructor(private beyonceProvider: BeyonceProvider) {
    console.log('Hello PutARingOnItComponent Component');
    this.text = 'Hello World';
  }

  clickSing () {
    this.text = this.beyonceProvider.sing();
  }

}
