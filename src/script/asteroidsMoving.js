import { attributes as attr } from './gameAttributes';

const tickPerFrame = 1000;
let counter = 0;

export function asteroidsMoving(asteroids) {
   
   	counter++;
  
  let asteroidsPerFrame; 

  if(counter < 1000 ) {
    asteroidsPerFrame = 1;
  } else if (counter < 3000) {
    asteroidsPerFrame = 2;
  } else {
    asteroidsPerFrame = 3;
  }

  
  for (let i = 0; i < asteroidsPerFrame; i++) {  
    asteroids[i].moving();
  } 



}