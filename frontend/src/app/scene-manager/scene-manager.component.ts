import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { ProgressFrameService } from '../progress-frame.service';
import { Scene, SceneCollection } from '../scene';
import { totalScene } from '../scenes';

@Component({
  selector: 'app-scene-manager',
  templateUrl: './scene-manager.component.html',
  styleUrls: ['./scene-manager.component.scss']
})
export class SceneManagerComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;

  ctx!: CanvasRenderingContext2D;
  scene: Scene;

  constructor(private progressFrameService: ProgressFrameService) {
    this.scene = totalScene;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.ctx.canvas.width  = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;

    this.progressFrameService.watchProgress(this.scene.numFrame)
      .subscribe(f => this.draw(f));
  }

  draw(frameNum: number): void {
    const size = {height: this.ctx.canvas.height, width: this.ctx.canvas.width};
    this.ctx.clearRect(0, 0, size.width, size.height);
    this.scene.draw(this.ctx, size, frameNum)
  }

}
