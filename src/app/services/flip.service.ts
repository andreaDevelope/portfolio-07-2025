import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlipService {
  private _flipped = new BehaviorSubject<boolean>(false);
  flipped$ = this._flipped.asObservable();

  toggle() {
    this._flipped.next(!this._flipped.value);
  }
}
