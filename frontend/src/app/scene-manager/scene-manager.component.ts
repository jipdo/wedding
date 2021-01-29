import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { ProgressFrameService } from '../progress-frame.service';
import { Scene } from '../scene';
import { SNSScene } from '../scenes';

@Component({
  selector: 'app-scene-manager',
  templateUrl: './scene-manager.component.html',
  styleUrls: ['./scene-manager.component.scss']
})
export class SceneManagerComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas')
  canvas!: ElementRef<HTMLCanvasElement>;

  ctx!: CanvasRenderingContext2D;
  numFrame = 1000;
  scene!: Scene;

  constructor(private progressFrameService: ProgressFrameService) {
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.ctx.canvas.width  = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;
    const size = {height: this.ctx.canvas.height, width: this.ctx.canvas.width};

    this.scene = new SNSScene(this.ctx, size, this.numFrame);

    this.progressFrameService.watchProgress(this.numFrame)
      .subscribe(f => this.scene.draw(f));
  }

}
