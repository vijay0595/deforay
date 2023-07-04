import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
interface IUser {
  email: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  reactiveForm!: FormGroup;
  user!: IUser;
  getUserDetails: any = null;
  exitAccount: boolean = false;
  invalidAccount: boolean = false;;

  constructor(private router: Router) {
    let user: any = localStorage.getItem('userDetail');
    this.getUserDetails = JSON.parse(user)
    this.user = {} as IUser;
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20),
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(15),
      ]),
    });
  }

  get email() {
    return this.reactiveForm.get('email')!;
  }

  get password() {
    return this.reactiveForm.get('password')!;
  }

  public validate(): void {
    if (this.reactiveForm.invalid) {
      for (const control of Object.keys(this.reactiveForm.controls)) {
        this.reactiveForm.controls[control].markAsTouched();
      }
      return;
    }
    if (this.getUserDetails == null || this.getUserDetails == '') {
      this.exitAccount = true;
      setTimeout(() => {
        this.exitAccount = false;
      }, 1000);
    }
    this.user = this.reactiveForm.value;
    if (this.getUserDetails != null && this.getUserDetails != '') {
      if (this.user.email != this.getUserDetails.email || this.user.password != this.getUserDetails.password) {
        this.invalidAccount = true;
        setTimeout(() => {
          this.invalidAccount = false;
        }, 1000);
      }
      else {
        this.router.navigate(['/landing']);
      }
    }
  }

  SignUp() {
    this.router.navigate(['/signup']);
  }
}
