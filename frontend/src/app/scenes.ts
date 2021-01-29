import { Scene, SceneCollection } from './scene';


class SNSScrollScene implements Scene {

  numFrame: number;

  constructor(numFrame: number) {
    this.numFrame = numFrame;
  }

  draw(
    ctx: CanvasRenderingContext2D,
    size: {height: number; width: number},
    f: number
  ) {
    const offsetTop = 96;
    const offsetBottom = 275;
    const objHeight = 40;
    const imageOffsetLeft = 200;
    const pos = {
      x: 174 + imageOffsetLeft,
      y: offsetTop + (size.height - offsetTop - offsetBottom - objHeight) * f / this.numFrame,
      width: 305,
      height: objHeight,
    };
    ctx.fillStyle = 'grey';
    ctx.fillRect(pos.x, pos.y, pos.width, pos.height);

    ctx.fillStyle = 'black';
    ctx.font = '30px Arial';
    ctx.fillText('Wedding!', pos.x + pos.width / 3, pos.y + pos.height * 2 / 3);

    const img: HTMLImageElement = document.getElementById('handImage') as HTMLImageElement;
    ctx.drawImage(img, imageOffsetLeft, 0);
  }
}

class SNSEnlargeScene implements Scene {

  numFrame: number;

  constructor(numFrame: number) {
    this.numFrame = numFrame;
  }

  draw(
    ctx: CanvasRenderingContext2D,
    size: {height: number; width: number},
    f: number
  ) {
    const progress = f / this.numFrame
    const finalHeight = 200;
    const offsetBottom = 275;
    const objHeight = 40;
    const imageOffsetLeft = 200;
    const pos = {
      x: 174 + imageOffsetLeft,
      y: size.height - offsetBottom - objHeight - progress * finalHeight,
      width: 305,
      height: objHeight + progress * finalHeight,
    };
    ctx.fillStyle = 'grey';
    ctx.fillRect(pos.x, pos.y, pos.width, pos.height);

    ctx.fillStyle = 'black';
    ctx.font = '30px Arial';
    ctx.fillText('Wedding!', pos.x + pos.width / 3, pos.y + pos.height * 2 / 3);

    const img: HTMLImageElement = document.getElementById('handImage') as HTMLImageElement;
    ctx.drawImage(img, imageOffsetLeft, 0);
  }
}



class WalkScene implements Scene {

  numFrame: number;

  constructor(numFrame: number) {
    this.numFrame = numFrame;
  }

  draw(
    ctx: CanvasRenderingContext2D,
    size: {height: number; width: number},
    f: number
  ) {

  }
}


const SNSScene = new SceneCollection(
  new SNSScrollScene(100),
  new SNSEnlargeScene(10),
);


export const totalScene = new SceneCollection(SNSScene);
