import { GithubServiceProvider } from './../../providers/github-service/github-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-profiles',
  templateUrl: 'profiles.html',
})

export class ProfilesPage {
  profiles: any;
  repos: any;
  stargazers_count: any;
  github_user = "";
  is_searching = false;


  constructor(public navCtrl: NavController,
              private githubService: GithubServiceProvider) {
  }

  reset() {
    this.profiles = [];
    this.github_user = "";
    this.is_searching = false;
  }

  searchUsers(event) {
    this.is_searching = true;
    let r;
    if (event.target.value.length > 2) {
      this.githubService.getUser(event.target.value).subscribe(
        data =>
          this.profiles = data.items.slice(0, 5),
        error => console.log('Error'),

        () => {

          for (let i = 0; i < this.profiles.length; i++)
            this.githubService.getRepos(this.profiles[i].login).subscribe(
              data => {
                r = data.sort(

                  (a, b) => b.stargazers_count - a.stargazers_count).slice(0, 3);
                this.repos = r;

                this.profiles[i].repo = this.repos;
              }
          )
        }
      );
    }
  }
}




