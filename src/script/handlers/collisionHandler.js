import { canvas } from '../tools/getCanvas';
import { guardConfig as guard} from '../instances/guard';
import { asterConfig as aster} from '../instances/asteroids';
import { attributes } from '../appearanceAttributes/gameAttributes';
import { earthDy } from '../appearanceAttributes/background';

import { earthExplosionConfig } from '../actions/earthExplosionHandler';

let coordinates;

export function hittingCollisionDetection(bullsNumber, bull, asteroids) {
  coordinates = explosionDetection(asteroids);
  if (!coordinates){
    for ( let i=0; i<bullsNumber.length; i++) {
      for (let j = 0; j < asteroids.length; j++){

        if ( bull[bullsNumber[i]].dy <= asteroids[j].dy + asteroids[j].dHeight
        && bull[bullsNumber[i]].dy >= asteroids[j].dy &&
          bull[bullsNumber[i]].dx + (bull[bullsNumber[i]].width/2) >= asteroids[j].dx * 0.95 && 
          bull[bullsNumber[i]].dx + (bull[bullsNumber[i]].width/2) <= asteroids[j].dx + asteroids[j].dWidth * 1.05 ) {

            coordinates = {};
            coordinates.dx = asteroids[j].dx;
            coordinates.dy = asteroids[j].dy;
          	asteroids[j].initial();
  	  	    bull[bullsNumber[i]].initial();
            
          return coordinates;
  	    }
      } 
    } 
  }  else {
    console.log(earthExplosionConfig);
    earthExplosionConfig.setCoordinates(coordinates);
  } 
}

export function explosionDetection(asteroids) {
  for( let i = 0; i < asteroids.length; i++) {
  	if ( asteroids[i].dy + asteroids[i].dHeight > earthDy * 1.05) {
      coordinates = {};
		  coordinates.dx = asteroids[i].dx;
      coordinates.dy = asteroids[i].dy;
      asteroids[i].initial();
      return coordinates;
	}
  }
	
}