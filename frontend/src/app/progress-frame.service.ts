import { Injectable } from '@angular/core';

import { ScrollEventService } from './scroll-event.service';

import { Observable } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProgressFrameService {

  constructor(private scrollEvent: ScrollEventService) { }

  /*
   * Return observable over frame number
   *
   * @param numFrame {number} - total number of frames
   *
   */
  watchProgress(numFrame: number): Observable<number> {
    const maxScrollY = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return this.scrollEvent.$scrollEvent
      .pipe(
        map((y: number) => y / maxScrollY),
        map((p: number) => Math.ceil(p * numFrame)),
        distinctUntilChanged()
      );
  }
}
