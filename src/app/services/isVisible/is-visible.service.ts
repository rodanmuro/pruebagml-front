import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsVisibleService {

  private isVisibleSource = new BehaviorSubject<boolean>(false);
  visible$ = this.isVisibleSource.asObservable();

  constructor() { }

  setVisibility(value:boolean){
    this.isVisibleSource.next(value);
  }

}
