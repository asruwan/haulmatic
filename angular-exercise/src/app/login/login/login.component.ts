import { Component, OnInit } from '@angular/core';
import { User } from "../../core/model/user";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  user = new User();
  isLoginFailed: boolean = false;
  error: string;

  ngOnInit(): void {
  }
  submit(form) {
    this.isLoginFailed = false;
    if (form.form.valid) {
      if (this.user.username == "example@gmail.com" && this.user.password == "1234") {
        this.router.navigate(
          ['dashboard'],
        );
      } else {
        this.isLoginFailed = true;
        this.error = "Please check your Username and Password"
      }
    } else {
      this.error = "Please fill the required field"
    }
  }

}
