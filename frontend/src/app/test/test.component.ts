import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ScrollEventService } from '../scroll-event.service';

import { map, distinct, distinctUntilChanged, debounceTime, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit, AfterViewInit{

  @ViewChild('canvas')
  canvas!: ElementRef<HTMLCanvasElement>;

  public context!: CanvasRenderingContext2D;

  constructor(private _scrollEvent: ScrollEventService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.context = this.canvas.nativeElement.getContext('2d')!;

    this._scrollEvent.$scrollEvent
      .pipe(
        map(() => window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight)),
        map((p) => Math.ceil(p * 100)),
        // debounceTime(20),
        // distinct(),
        distinctUntilChanged(),
        startWith(0),
      ).subscribe(e => this.draw(e));
  }

  draw(e: number) {
    this.context.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    this.context.beginPath();
    this.context.fillRect(this.canvas.nativeElement.width * e / 100, 50, 50, 50);
    this.context.closePath();
  }
}
