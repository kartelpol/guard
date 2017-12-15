
import { canvas, ctx } from './getCanvas';
import { sprite } from './sprite';

import { space, earth, pieces } from './imageLoader';

let dx = 0;
let dy1 = 0;
let dy2 = -canvas.height;

const imageWidth = 4000;
const imageHeight = 2250;

let eatrhDx = canvas.width * 1.3;
export let earthDy = 576;


export function drawSpace() {
  ctx.drawImage(space, 0, 0, 4000, 2180, dx, dy1, canvas.width, canvas.height);
  ctx.drawImage(space, 0, 0, 4000, 2180, dx, dy2, canvas.width, canvas.height);

  if( dy2 >= -0.1 && dy2 <= 0 /*dy1 >= canvas.height*/) {
  	dy1 = -canvas.height;
  	console.log(dy1);
  } else {
    dy1 += 0.1;
  }


  if( dy1 >=  - 0.1 && dy1 <=0) {
  	dy2 = -canvas.height;
  } else {
    dy2 += 0.1;
  }

  ctx.drawImage(earth, 0, 0, 1024, 576, -canvas.width * 0.15, canvas.height * 0.5, eatrhDx, earthDy);
} 