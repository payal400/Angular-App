import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BoxserviceService {
  private _box1source = new Subject<object>();
  box1data$ = this._box1source.asObservable();

  userName = new BehaviorSubject<string>('');
  box2data$ = this.userName.asObservable();

  constructor() {}

  sendData(data: object) {
    this._box1source.next(data);
  }

  logSubjectObservable() {
    console.log(
      '_box1source',
      this._box1source,
      '\n',
      'box1data',
      this.box1data$
    );
  }

  logBehaviourSubjectObservable() {
    console.log('userName', this.userName);
  }
}
