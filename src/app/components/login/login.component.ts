import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { appConfig } from 'src/app/constants/config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signUpForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.required,
      this.passwordCustomValidator
    ])
  });

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required)
  });

  isSignUp: boolean = true;
  isForgotPassword: boolean = false;
  carouselSlideTime: number = appConfig.LOGIN_CAROUSEL_SLIDE_TIME;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signUpClicked(){
    console.log("Sign Up Clicked!");

    if(this.signUpForm.valid){
      // Will sign up user
    }
  }

  loginClicked(){
    console.log("Login Clicked!");
    
    if(this.loginForm.valid){
      this.authService.loginUser(this.loginForm.value);
    }
  }

  logoClicked(){
    // Do something
  }

  openInNewTab(url: string){
    window.open(url, '_blank');
  }

  passwordCustomValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value) {
      const passCharacterArray: string[] = control.value.split('');
      // const specialCharArray: string[] = ['!', '@', '#', '$', '%', '^', '*', '+', '-', '_', '=', ';', ':', ',', '?'];

      if (passCharacterArray.includes(' ')) {
        return { whitespaceError: true };
      } else if (passCharacterArray.length < 4 || passCharacterArray.length > 100) {
        // Entered characters are greater than 100 or less than 4
        return { lengthError: true };
      } else if (!passCharacterArray.find((x: any) => !isNaN(x))) {
        // No number was found!
        return { noNumberError: true };
      } else if (!passCharacterArray.find((x: any) => isNaN(x)
      // && !specialCharArray.includes(x)
      && x == x.toUpperCase()
      )) {
        // No uppercase letter was found!
        return { noUpperCase: true };
      } else if (!passCharacterArray.find((x: any) => isNaN(x)
      // && !specialCharArray.includes(x)
      && x == x.toLowerCase()
      )) {
        // No lowercase letter was found!
        return { noLowerCase: true };
      }
      // else if (!passCharacterArray.find(x => specialCharArray.includes(x))) {
      //   // No special character was found!
      //   return { noSpecialChar: true };
      // }
    }
    return null;
  }
}
