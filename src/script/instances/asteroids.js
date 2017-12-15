import { canvas, ctx } from '../getCanvas';
import { sprite } from '../sprite';
import { asteroid } from '../imageLoader';
import { guardConfig } from './guard.js';

let asteroidWidth = 750;
let asteroidHeight = 750;

export let asterConfig = {
  context: ctx,
  width: asteroidWidth,
  height: asteroidHeight,
  image: asteroid,
  dx: Math.random() * (canvas.width - asteroidWidth) + (asteroidWidth / 2),
  dy: Math.random() * canvas.height * 0.1,
  dWidth: 2,
  dHeight: 2,
  speed: 0.3,
  acceleration: 1.003,
  growSpeed: 0.07,
};



asterConfig.moving = function() {
  
  if(this.dy <= canvas.height ) {
    this.render();
    this.update();
  } else {
    this.initial();
  }
};

asterConfig.initial = function() {
  this.dWidth = 10;
  this.dHeight = 10;
  this.speed = 0.1;
  this.dy = Math.random() * canvas.height * 0.2;
  this.dx = Math.random() * (canvas.width - (2 * guardConfig.width)) + guardConfig.width;
/*  this.accessible = true;*/
};


