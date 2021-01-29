export abstract class Scene {

  numFrame: number;

  constructor(
    protected ctx: CanvasRenderingContext2D,
    protected size: {height: number; width: number},
    numFrame: number,
  ) {
    this.numFrame = numFrame;
  }

  abstract draw(frameNum: number): void;
}
