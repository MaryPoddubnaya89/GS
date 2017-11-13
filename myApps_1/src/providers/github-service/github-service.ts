import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubServiceProvider {
  profiles: any;

  constructor(private http: Http) {
    console.log('Hello GithubServiceProvider Provider');

  }

  getUser(username) {
    let url = 'https://api.github.com/search/users?q=' + username;
    let response = this.http.get(url).map(res => res.json());
    return response;
  }

  getRepos(username) {
    let url = 'https://api.github.com/users/' + username + '/repos';
    let response = this.http.get(url).map(res => res.json());
    return response;
  }
}

