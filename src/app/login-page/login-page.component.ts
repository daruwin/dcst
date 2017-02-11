import { Component, OnInit } from '@angular/core';
import { AngularFireService } from '../providers/angular-fire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public angularfire_service: AngularFireService,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    return this.angularfire_service.loginWithGoogle().then((data) => {
      this.router.navigate(['']);
    });
  }
}
