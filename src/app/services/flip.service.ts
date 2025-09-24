import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlipService {
  private _flipped = new BehaviorSubject<boolean>(false);
  private _isMatrix = new BehaviorSubject<boolean>(false);
  private _isTimelineVisible = new BehaviorSubject<boolean>(false);

  isTimelineVisible$ = this._isTimelineVisible.asObservable();
  flipped$ = this._flipped.asObservable();
  isMatrix$ = this._isMatrix.asObservable();
  toggle() {
    this._flipped.next(!this._flipped.value);
  }

  matrixToggle() {
    this._isMatrix.next(!this._isMatrix.value);
  }

  toggleTimeline() {
    this._isTimelineVisible.next(!this._isTimelineVisible.value);
  }

  setTimelineVisible(value: boolean) {
    this._isTimelineVisible.next(value);
  }
}
