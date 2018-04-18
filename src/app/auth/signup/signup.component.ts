import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  onSubmit(f: NgForm) {
    const enteredemail = f.value.email;
    const enteredpassword = f.value.password;
    this.authService.signupUser(enteredemail, enteredpassword);
  }
  ngOnInit() {
  }
}
