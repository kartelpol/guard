import { canvas, ctx } from '../tools/getCanvas';
import { attributes } from '../appearanceAttributes/gameAttributes.js'


const pictureNativeWidth = 241;
const pictureNativeHeight = 178;
let width = 300;
let height = 210;

export function gameOver() {


  let h1 = canvas.width * 0.05;
  let h2 = canvas.width * 0.03;
  let text = canvas.width * 0.02;
  ctx.font = h1 + 'px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText('GAME OVER', canvas.width / 2 - (3 * h1), canvas.height / 2 - h1);
  
  ctx.font = h2 + 'px Arial';
  ctx.fillText('Your results: ', canvas.width / 2 - (4 * h2), canvas.height / 2 );
 
  ctx.font = text + 'px Arial';
  ctx.fillText( 'Presision:  ' + attributes.score + ' / ' + attributes.shots, canvas.width / 2 - (4 * h2), canvas.height / 2 + (2 * text));

  ctx.fillText( 'Time:  ' + attributes.time, canvas.width / 2 - (4 * h2), canvas.height / 2 + (3 * text));

}