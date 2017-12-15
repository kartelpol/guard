import { leftPressed, rightPressed } from '../eventHandler';
import { canvas, ctx } from '../getCanvas';
import { attributes, speedAttributes } from '../gameAttributes';

import { guard, bullet } from '../imageLoader';
import { sprite } from '../sprite';


let widthOfGuard = 200;

export let guardConfig = {
  height: 112,
  width: widthOfGuard,
  guardX: (canvas.width - widthOfGuard) / 2,
  step: 2,

  moving() {

    if (rightPressed && this.guardX <= canvas.width - this.width - this.step) {
      this.guardX += this.step;
      ctx.drawImage(guard, this.guardX, canvas.height - this.height, this.width, this.height);
    } else if (leftPressed && this.guardX > 0 + this.step) {
      this.guardX -= this.step;
      ctx.drawImage(guard, this.guardX, canvas.height - this.height, this.width, this.height);
    } /*else if (relativeX > 0 && relativeX < canvas.width) {
      this.guardX = relativeX - this.width / 2;
      ctx.drawImage(guard, this.guardX, canvas.height - this.height, this.width, this.height);
    }*/
    ctx.drawImage(guard, this.guardX, canvas.height - this.height, this.width, this.height);
  },

  speedUpdate() {
    if(this.step <= 5){
          this.step += 0.15;
          speedAttributes.speedFlag = true;
        } else if (this.step < 9) {
          this.step += 0.1;
          speedAttributes.speedFlag = true;
          attributes.messageText = "Be careful, your accuracy is reduced due to high speed";
        } else {
          attributes.messageText = "Your speed is maximal."
        }
    }
};



const bulletWidth = 50;
const bulletHeight = 50;

export let bulletConfig = {
  context: ctx,
  width: bulletWidth,
  height: bulletHeight,
  image: bullet,
  dx: guardConfig.guardX + (guardConfig.width / 2) - (bulletWidth / 2),
  dy: canvas.height - guardConfig.height - bulletHeight,
  speed: -25,
  acceleration: 0.97,
  growSpeed: -0.2,
/*  ticksPerFrame: 1,
  numberOfFrames: 8,*/
};


bulletConfig.initial = function() {
  this.dx = guardConfig.guardX + (guardConfig.width / 2) - (bulletWidth / 2);
  this.dy = canvas.height - guardConfig.height - bulletHeight;
  this.accessible = true;
  this.dWidth = bulletWidth;
  this.dHeight = bulletHeight;
  this.speed = -30;
}



bulletConfig.accessible = true;

bulletConfig.moving = function() {
  this.accessible = false;
  
  if (this.dy === canvas.height - guardConfig.height - bulletHeight) {
    this.dx = guardConfig.guardX + (guardConfig.width / 2) - (bulletWidth / 2);
  }
    /*console.log(this.dx + '  ' + this.dy);*/

  if (this.dy >= 0) {
    this.render();
    this.update(); 
  } else if (this.dy < 0) {
    this.initial();
  }
};

