import { Component } from '@angular/core';
import { AngularFireService } from './providers/angular-fire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLoggedIn: boolean;

  constructor(public angularfire_service: AngularFireService,
    private router: Router) {
    this.angularfire_service.angularfire.auth.subscribe(
      (auth) => {
        if (auth == null) {
          console.log('Not logged in.');
          this.isLoggedIn = false;
          this.router.navigate(['login']);
        } else {
          console.log('Logged in.');
          this.isLoggedIn = true;
          this.router.navigate(['']);
          this.angularfire_service.displayName = auth.google.displayName;
          this.angularfire_service.email = auth.google.email;
        }
      }
    );
  }

  logout() {
    this.angularfire_service.logout();
  }
}
