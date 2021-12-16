import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CookieService } from 'ngx-cookie-service';
import { ToastType } from '../constants/types';
import * as CryptoJS from 'crypto-js'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
    private _snackBar: MatSnackBar,
    private ngZone: NgZone,
    private cookieService: CookieService,
  ) { }

  showToast(message: string,
    type: ToastType = "warn",
    _duration: number = 3000,
    action: string = "OK") {
    let _panelClass: string;

    switch (type) {
      case "error": {
        _panelClass = "custom-snack-error";
        break;
      }
      case "normal": {
        _panelClass = "custom-snack-normal";
        break;
      }
      case "success": {
        _panelClass = "custom-snack-success";
        break;
      }
      case "warn": {
        _panelClass = "custom-snack-warn";
        break;
      }
    }

    this.ngZone.run(() => {
      this._snackBar.open(message, action, {
        duration: _duration,
        panelClass: _panelClass,
        horizontalPosition: "right",
        verticalPosition: "top"
      });
    });

    return this._snackBar._openedSnackBarRef;
  }

  playSound(url: string) {
    const audio = new Audio(url);
    audio.play();
  }

  setCookie(
    name: string,
    value: string,
    expires: number | Date = 1,
    path: string = '/',
    domain: string | undefined = undefined,
    secure: boolean = true,
    sameSite: 'Lax' | 'None' | 'Strict' = "Lax") {
    // Delete all duplicate cookies
    if (this.cookieService.check(name)) {
      this.cookieService.delete(name);
    }
    this.cookieService.set(name, value, expires, path);
  }

  checkCookie(name: string): boolean {
    return this.cookieService.check(name);
  }

  getCookie(name: string) {
    return this.cookieService.get(name);
  }

  deleteCookie(name: string,
    path: string = '/',
    domain: string | undefined = undefined,
    secure: boolean = true,
    sameSite: 'Lax' | 'None' | 'Strict' = "Lax") {
    this.cookieService.delete(name, path);
  }

  documentGetElementById(id: string, waitTime: number | null = null) {
    return new Promise<HTMLElement>((resolve, reject) => {
      const intervalTime: number = 100;
      let timeTaken: number = 0;

      const getElementInterval = setInterval(() => {
        if (document.getElementById(id)) {
          clearInterval(getElementInterval);
          // console.log(<HTMLElement>document.getElementById(id));
          resolve(<HTMLElement>document.getElementById(id));
        } else if (waitTime) {
          if (timeTaken < waitTime) {
            timeTaken = timeTaken + intervalTime;
          } else {
            reject("Wait time exceeded.")
          }
        } else {
          // Never reject
          timeTaken = timeTaken + intervalTime;
        }
      }, intervalTime);
    });
  }

  saveInLocalStorage(key: string, value: string){
    window.localStorage.setItem(key, value);
  }

  getItemLocalStorage(key: string){
    return window.localStorage.getItem(key);
  }

  removeItemLocalStorage(key: string){
    window.localStorage.removeItem(key);
  }

  encryptAES(value: string){
    return CryptoJS.AES.encrypt(value, environment.encryptionPass.trim()).toString();
  }

  decryptAES(encryptedVal: string | null){
    if(encryptedVal){
      return CryptoJS.AES.decrypt(encryptedVal, environment.encryptionPass.trim()).toString(CryptoJS.enc.Utf8);
    } else {
      return null;
    }
  }

  selectRandomFromArray(array: any[]) {
    return array[Math.floor(Math.random() * array.length)];
  }
}
