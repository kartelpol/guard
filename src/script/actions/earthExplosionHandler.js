import { canvas, ctx } from '../tools/getCanvas';
import { explosion, explosion2, pieces } from '../tools/imageLoader';
import { sprite } from '../tools/sprite';


export let earthExplosionConfig = {
  context: ctx,
  width: 1024,
  height: 768,
  sx: 0,
  sy: 0,
  image: explosion2,
  dx: 0,
  dy: canvas.height - 740,
  dWidth: canvas.width,
  dHeight: /*300*/ 768,
  extentionSpeed: 5,
  growSpeed: 10,
  flag: false,
  opacity: 1,
  
  setCoordinates(obj) {
    /*this.dx = obj.dx;
    this.dy = canvas.height - this.dHeight;*/
  	this.flag = true;
  },



  animate() {
  	
 ctx.globalAlpha = this.opacity;
    ctx.drawImage(
      this.image,
      0,
      0,
      this.width,
      this.height,
      this.dx,
      this.dy,
      this.dWidth,
      this.dHeight);

    ctx.globalAlpha = 1;

   /* if (this.dHeight < this.height) {
      this.dHeight += this.growSpeed;
    }
  
  	if ( this.dy + this.dHeight >= canvas.height + 50){
  	  this.dy -= 5;	
  	}*/
  }
  
}


