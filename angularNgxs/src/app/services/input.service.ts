import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class InputService {

  inputVal = new BehaviorSubject<Data>({ name: "", age: 0 });
  inputValObs = this.inputVal.asObservable();

  constructor() { }

  setVal(value:Data) {
    this.inputVal.next(value);
    console.log(this.inputVal.getValue())
  }

  getValue() {
    return this.inputVal.getValue();
  }

}

interface Data {
  name: string;
  age: number;
}