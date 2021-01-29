
interface Scene {

  numFrame: number;

  draw(
    ctx: CanvasRenderingContext2D,
    size: {height: number; width: number},
    frameNum: number
  ): void;
}


class SceneCollection implements Scene {
  numFrame: number;

  private cumSumFrames: number[];
  private scenes: Scene[];

  constructor(...scenes: Scene[]) {
    const frames = scenes.map(s => s.numFrame);
    const cumulativeSum = (sum => ((value: number) => sum += value))(0);
    this.cumSumFrames = frames.map(cumulativeSum);
    this.scenes = scenes;
    this.numFrame = this.cumSumFrames[this.cumSumFrames.length - 1];
  }

  draw(
    ctx: CanvasRenderingContext2D,
    size: {height: number; width: number},
    frameNum: number
  ): void {
    const sceneIdx = this.cumSumFrames.findIndex(
      f => f >= frameNum
    );

    const scene = this.scenes[sceneIdx];
    const cumSum = this.cumSumFrames[sceneIdx];
    scene.draw(ctx, size, frameNum - cumSum + scene.numFrame);
  }

}

export { Scene, SceneCollection };
