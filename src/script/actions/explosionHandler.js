import { explosion, explosion2, pieces } from '../tools/imageLoader';
import { sprite } from '../tools/sprite';
import { canvas, ctx } from '../tools/getCanvas';

import { guardConfig as guard} from '../instances/guard';


export let explosionConfig = {
  context: ctx,
  width: 1000,
  height: 250,
  sx: 0,
  sy: 0,
  image: pieces,
  dx: 0,
  dy: 0,
  dWidth: 30,
  dHeight: 30,
  extentionSpeed: 0,
  growSpeed: 3,
  opasity: 1,
  accessible: true,
}

explosionConfig.initial = function() {
  this.dWidth = 30;
  this.dHeight = 30;
  this.flag = false;
  this.dx = 0;
  this.dy = 0;
  this.width = 200;
  this.height = 200;
  this.opacity = 1;
  this.accessible = true;
}

explosionConfig.setCoordinates = function(coordinates) {

	this.dx = coordinates.dx;
	this.dy = coordinates.dy;
  this.growLimit = 50; 

}

explosionConfig.flag = false;
explosionConfig.setFlag = function(val) {
	this.flag = val;
}

explosionConfig.getFlag = function() {
	return this.flag;
}


explosionConfig.animate = function() {
  this.accessible = false;
  if (this.dWidth <= this.growLimit) {
   
  	this.render();
    if( this.opacity > 0.1 ){
      this.opacity -= 0.1;
    }
    
    this.dWidth += this.growSpeed;
    this.dHeiht += this.growSpeed;
  } else {
    this.initial();
  } 
}



export function getReadyDestructor(destructedAsteroids) {
   let  i = 0;
  while (i < destructedAsteroids.length ) {
    if ( destructedAsteroids[i].accessible) {
      return destructedAsteroids[i];
    }
    i++;
  }
}