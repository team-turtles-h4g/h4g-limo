import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FullLoaderService {
  loaderState: BehaviorSubject<{
    state: boolean;
    message?: string;
  }> = new BehaviorSubject<{
    state: boolean;
    message?: string;
  }>({
    state: false
  });

  constructor() { }

  getLoaderStateObservable(){
    return this.loaderState.asObservable();
  }

  showLoader(_message?: string){
    this.loaderState.next({
      state: true,
      message: _message
    });
  }

  hideLoader(){
    this.loaderState.next({
      state: false
    });
  }

  getLoaderState(){
    return this.loaderState.value;
  }
}