import { Component } from '@angular/core';
import { RedditProvider, RedditTopic } from '../../providers/reddit/reddit';

/**
 * Generated class for the ReddittopicComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'reddittopic',
  templateUrl: 'reddittopic.html'
})
export class ReddittopicComponent {

  text: string;
  topics: RedditTopic[];


  constructor(private redditProvider: RedditProvider) {
    console.log('Hello ReddittopicComponent Component');
    
  }

  getTopics() {
    this.redditProvider.getTopics()
      .subscribe(result => {
        console.log(result)
        this.topics = result
      });
  }

  ngOnInit () {
    this.getTopics()
  }

}
