import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class RedditProvider {
  url = 'https://www.reddit.com/r/Simulated/.json'

  constructor(public http: HttpClient) {
    console.log('Hello RedditProvider Provider');
  }

  getTopics () {
    return this.http.get<RedditRequest>(this.url)
    .pipe(
      map(res => res.data.children)
    )
  }

}

export interface TopicInfo {
  title:string,
  url: string,
  created:number
}

export interface RedditTopic {
  data: TopicInfo
}

interface RedditRequest {
  data: RedditData
}

interface RedditData {
  children: RedditTopic[]
}
