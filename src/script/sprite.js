import { ctx } from './getCanvas';

export function sprite(options) {

  let that = {};

  that.context = options.context;
  that.width = options.width;
  that.height = options.height;
  that.image = options.image;
  that.sx = options.sx || 0;
  that.sy = options.sy || 0;
  that.dx = options.dx;
  that.dy = options.dy;
  that.dWidth = options.dWidth || options.width;
  that.dHeight = options.dHeight || options.height;
  that.speed = options.speed || 0;
  that.growSpeed = options.growSpeed || 0;
  that.acceleration = options.acceleration || 1;
  that.accessible = options.accessible;
  that.flag = options.flag;
  that.opacity = options.opacity || 1;
  

  that.initial = options.initial || 0;
  that.moving = options.moving || 0;
  that.animate = options.animate || undefined;
  that.setCoordinates = options.setCoordinates || undefined;
  

  let frameIndex = 0;
  let tickCount = 0;
  let ticksPerFrame = options.ticksPerFrame || 0;
  let numberOfFrames = options.numberOfFrames || 1;


  that.render = function () {
    ctx.globalAlpha = that.opacity;
    that.context.drawImage(
      that.image,
      that.sx,
      that.sy,
      that.width,
      that.height,
      that.dx,
      that.dy,
      that.dWidth,
      that.dHeight);
    ctx.globalAlpha = 1;
    };


    that.update = function () {
      if (that.growSpeed) {
        that.dWidth += that.growSpeed;
        that.dHeight += that.growSpeed;
      } 
      that.dy += that.speed;
      that.speed *= that.acceleration;
 };
    return that;
}