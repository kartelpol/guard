import { attributes} from '../appearanceAttributes/gameAttributes';

const tickPerFrame = 1000;
let counter = 0;

export function asteroidsMoving(asteroids) {
   
   	counter++;
  
  let asteroidsPerFrame; 

  if(counter < 1000 ) {
    asteroidsPerFrame = 1;
  } else if (counter < 3000) {
    asteroidsPerFrame = 2;
  } else if (counter < 7000){
    asteroidsPerFrame = 3;
  } else {
    asteroidsPerFrame = 4;
  }


  if (counter > 1000 && counter < 1500) {
    attributes.messageText = 'Do you see the second asteroid?';
  } else if (counter > 3000 && counter < 3700)  {
    attributes.messageText = 'There are already three threats on the horizon..';
  } else if (counter > 7000 && counter < 8000) {
    attributes.messageText = 'It seems we\'re getting into the asteroids belt!!!';
  }

  
  for (let i = 0; i < asteroidsPerFrame; i++) {  
    asteroids[i].moving();
      if (asteroids[i].dy > canvas.height * 0.4) {
        attributes.messageText = "Caution! Be careful! Asteroid is too near!";
      } 
  }
}


