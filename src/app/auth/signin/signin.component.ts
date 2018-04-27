import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }
  onSignin(f: NgForm) {
    const enteredemail = f.value.email;
    const enteredpassword = f.value.password;
    this.authService.signinUser(enteredemail, enteredpassword);
  }
  onSignup() {
    this.router.navigate(['signup']);
  }
}
