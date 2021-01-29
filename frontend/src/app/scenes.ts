import { Scene } from './scene';


class SNSScene implements Scene {

  numFrame: number;

  constructor(numFrame: number) {
    this.numFrame = numFrame;
  }

  draw(
    ctx: CanvasRenderingContext2D,
    size: {height: number; width: number},
    f: number
  ) {
    ctx.clearRect(0, 0, size.width, size.height);

    ctx.beginPath();
    const offsetTop = 96;
    const offsetBottom = 75;
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
    ctx.closePath();

    ctx.fillStyle = 'black';
    ctx.font = '30px Arial';
    ctx.fillText('Wedding!', pos.x + pos.width / 3, pos.y + pos.height * 2 / 3);

    const img: HTMLImageElement = document.getElementById('handImage') as HTMLImageElement;
    ctx.drawImage(img, imageOffsetLeft, 0);
  }

}




export { SNSScene };
