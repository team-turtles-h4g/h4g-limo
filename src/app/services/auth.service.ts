import { SignUpForm } from './../constants/interfaces';
import { FullLoaderService } from './full-loader.service';
import { HelperService } from './helper.service';
import { HttpService } from './http.service';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from '../constants/interfaces';
import { users } from '../constants/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private userDetails: any;

  constructor(
    private router: Router,
    private httpService: HttpService,
    private helperService: HelperService,
    private fullLoaderService: FullLoaderService,
    ) { }

  loginUser(loginFormValue: LoginForm) {
    console.log("Logging in User", loginFormValue);

    this.fullLoaderService.showLoader();

    setTimeout(() => {
      const userIndex = users.findIndex(x => x.email == loginFormValue.email);

      if (userIndex >= 0 && users[userIndex].password == loginFormValue.password) {
        this.loginState.next(true);
        this.helperService.showToast("Login approved.", "success");
        this.router.navigateByUrl("/dashboard");
        this.fullLoaderService.hideLoader();
      } else {
        this.helperService.showToast("Please check your credentials or click forgot password.", "error");
        this.fullLoaderService.hideLoader();
      }
    }, 3000)
  }

  signUpUser(signUpFormValue: SignUpForm){
    // Will sign up user
    console.log("Signing up user", signUpFormValue);
  }

  getLoginState() {
    return this.loginState.value;
  }

  setLoginState(value: boolean) {
    this.loginState.next(value);
  }

  getLoginStateObservable() {
    return this.loginState.asObservable();
  }

  getUserDetails() {
    return this.userDetails;
  }

  logout() {
    this.userDetails = undefined;
    this.helperService.showToast("Logged out.", "warn");
    this.loginState.next(false);
    this.router.navigateByUrl("/login");
  }
}