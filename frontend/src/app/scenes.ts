import { Scene } from './scene';


class SNSScene extends Scene {

  draw(f: number) {
    this.ctx.clearRect(0, 0, this.size.width, this.size.height);

    this.ctx.beginPath();
    const offsetTop = 96;
    const offsetBottom = 75;
    const objHeight = 40;
    const imageOffsetLeft = 200;
    const pos = {
      x: 174 + imageOffsetLeft,
      y: offsetTop + (this.size.height - offsetTop - offsetBottom - objHeight) * f / this.numFrame,
      width: 305,
      height: objHeight,
    };
    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect(pos.x, pos.y, pos.width, pos.height);
    this.ctx.closePath();

    this.ctx.fillStyle = 'black';
    this.ctx.font = '30px Arial';
    this.ctx.fillText('Wedding!', pos.x + pos.width / 3, pos.y + pos.height * 2 / 3);

    const img: HTMLImageElement = document.getElementById('handImage') as HTMLImageElement;
    this.ctx.drawImage(img, imageOffsetLeft, 0);
  }

}




export { SNSScene };
