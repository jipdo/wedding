import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

import { ProgressFrameService } from '../../progress-frame.service';

@Component({
  selector: 'app-first-scene',
  templateUrl: './first-scene.component.html',
  styleUrls: ['./first-scene.component.scss']
})
export class FirstSceneComponent implements OnInit {

  @ViewChild('canvas')
  canvas!: ElementRef<HTMLCanvasElement>;

  context!: CanvasRenderingContext2D;
  numFrame = 100;

  constructor(private progressFrameService: ProgressFrameService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.context = this.canvas.nativeElement.getContext('2d')!;

    this.progressFrameService.watchProgress(this.numFrame)
      .subscribe(f => this.draw(f));
  }

  draw(f: number) {
    this.context.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    this.context.beginPath();
    this.context.fillRect(this.canvas.nativeElement.width * f / this.numFrame, 50, 50, 50);
    this.context.closePath();
  }

}
