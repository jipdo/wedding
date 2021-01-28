import { Injectable } from '@angular/core';

import { fromEvent, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ScrollEventService {

  $scrollEvent: Observable<Event>;

  constructor() {
    this.$scrollEvent = fromEvent(window, 'scroll');
  }

}
