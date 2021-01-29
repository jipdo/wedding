import { Injectable } from '@angular/core';

import { fromEvent, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ScrollEventService {

  $scrollEvent: Observable<number>;

  constructor() {
    this.$scrollEvent = fromEvent(window, 'scroll')
      .pipe(
        map(() => window.scrollY),
        startWith(0),
      );
  }

}
