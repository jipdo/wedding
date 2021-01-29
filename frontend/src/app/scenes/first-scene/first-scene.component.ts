import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

import { ProgressFrameService } from '../../progress-frame.service';

@Component({
  selector: 'app-first-scene',
  templateUrl: './first-scene.component.html',
  styleUrls: ['./first-scene.component.scss']
})
export class FirstSceneComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas')
  canvas!: ElementRef<HTMLCanvasElement>;

  @ViewChild('hand')
  handImage!: ElementRef<HTMLImageElement>;

  ctx!: CanvasRenderingContext2D;
  numFrame = 1000;

  constructor(private progressFrameService: ProgressFrameService) { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.ctx.canvas.width  = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;

    this.progressFrameService.watchProgress(this.numFrame)
      .subscribe(f => this.draw(f));
  }

  draw(f: number) {
    const width = this.canvas.nativeElement.width;
    const height = this.canvas.nativeElement.height;
    this.ctx.clearRect(0, 0, width, height);

    this.ctx.beginPath();
    const offsetTop = 96;
    const offsetBottom = 75;
    const objHeight = 40;
    const pos = {
      x: 174,
      y: offsetTop + (height - offsetTop - offsetBottom - objHeight) * f / this.numFrame,
      width: 305,
      height: objHeight,
    };
    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect(pos.x, pos.y, pos.width, pos.height);
    this.ctx.closePath();

    this.ctx.fillStyle = 'black';
    this.ctx.font = '30px Arial';
    this.ctx.fillText('Wedding!', pos.x + pos.width / 3, pos.y + pos.height * 2 / 3);


    this.ctx.drawImage(this.handImage.nativeElement, 0, 0);
    // draw hand
  }

}
