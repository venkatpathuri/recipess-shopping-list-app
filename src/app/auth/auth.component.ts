import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserService } from './authser.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoadspin = false;
  error: any
  constructor(private auth: AuthserService,private route:Router) { }
  ngOnInit(): void {
  }

  sendToLogin() {
    this.isLoginMode = !this.isLoginMode;
  }

  loginUser(form: NgForm) {
    const email = form.value.email
    const password = form.value.password
    this.isLoadspin = true
    if (this.isLoginMode) {
      this.auth.sendLoginDataToAPI(email, password).subscribe((res) => {
        console.log(res);

        this.isLoadspin = false;
        this.route.navigate(['/recipes']);

      },
      errorMessage => {
          console.error(errorMessage);
          this.error = errorMessage
          this.isLoadspin = false
        }
      );
    }
    else {

      this.auth.sendDataToAPI(email, password).subscribe((res) => {
        console.log(res);
        this.isLoadspin = false
      },
      errorMessage => {
          console.error(errorMessage);
         this.error=errorMessage
          this.isLoadspin = false
        }
      );
    }
    form.reset();
  }
}
