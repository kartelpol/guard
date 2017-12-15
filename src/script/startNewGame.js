import { canvas, ctx } from './getCanvas';
import { clickCoordinates } from './eventHandler';
import { guard, bullet } from './imageLoader';

import { downArrow, leftArrow } from './imageLoader';


export function playPressDetection() {
  if(clickCoordinates.x && clickCoordinates.y) {
    if ( clickCoordinates.x >= 100 && clickCoordinates.x <= 468 &&
      clickCoordinates.y >= 115 && clickCoordinates.y <= 165) {
      return true;
    } 	
  } else {
    return false;
  }
}

const guardWidth = 300;
const guardHeight = 168;
let h1 = canvas.width * 0.03;
let h2 = canvas.width * 0.015;
let text = canvas.width * 0.01;

export function contentBeforeGame() {
  ctx.fillStyle = '#ffffff';
  ctx.font = h1 + 'px Arial';
  ctx.fillText('Welcome, guard!', canvas.width * 0.4, 150 );
  ctx.fillStyle = '#f00a0a';
  ctx.fillText('Your mission is to protect Earth from asteroids', canvas.width * 0.2, 170 + h1 );


  ctx.beginPath();
  ctx.rect( canvas.width * 0.1, canvas.height / 2 - 50, canvas.width * 0.8, canvas.height * 0.4);
  ctx.globalAlpha = 0.7;
  ctx.fillStyle = '#21110b';
  ctx.fill();
  ctx.closePath();

  ctx.globalAlpha = 1;
  ctx.fillStyle = '#f00a0a';
  ctx.font = h2 + 'px Arial';

  ctx.drawImage(guard, canvas.width / 2 - 0.85 * guardWidth, canvas.height / 2, guardWidth, guardHeight);
  
  ctx.fillStyle = '#ffffff';
  ctx.fillText('For accurate shots', canvas.width * 0.12, canvas.height / 2);
  ctx.fillText('You increase your speed', canvas.width * 0.12, canvas.height / 2 + 1.5 * h2);
  ctx.fillText('But it\'s harder to hit the target', canvas.width * 0.12, canvas.height / 2 + 4.5 * h2);
  
  ctx.fillText('Use LEFT and RIGHT arrows to move your ship', canvas.width / 2 + 50, canvas.height / 2);
  ctx.fillText('Up and down arrows are blocked', canvas.width / 2 + 50, canvas.height / 2 + 1.5*h2 );
  ctx.fillText('You\'re not allowed fly far away from Earth', canvas.width / 2 + 50, canvas.height / 2 + 3*h2 );
  ctx.fillText('Use SPACE for shotting', canvas.width / 2 + 50, canvas.height / 2 + 4.5*h2 );

  ctx.drawImage(downArrow, 0, 0, 488, 720, 145, 120, 50, 73.5 );
  ctx.font = text + 'px Arial';
  ctx.fillText('Press to begin', 70, 215);

}


