import { getSpaceState, setSpaceState } from './eventHandler';
import { attributes } from './gameAttributes';
import { guardConfig, bulletConfig } from './instances/guard';


let activeBulletsNumber = [];
let spaceDown;

export function shooting(ammunition){

  for (let i = 0; i < activeBulletsNumber.length; i++) {
    if (ammunition[activeBulletsNumber[i]].accessible) {
      activeBulletsNumber.splice(i, 1);
    }
  } 
  

  let found = false;
  let i = 0;
  spaceDown = getSpaceState();

  if(spaceDown) {
    while (!found && i < ammunition.length) {
      if (ammunition[i] && ammunition[i].accessible) {
        activeBulletsNumber.push(i);
        attributes.shots++;
        found = true;
        setSpaceState(false);
      }
      i++;
    }
  }

  for (let i = 0; i < activeBulletsNumber.length; i++) {
      ammunition[activeBulletsNumber[i]].moving();
       if(activeBulletsNumber[i].dy <= 20 && guardConfig.step > 2 ) {
        guardConfig.step -= 0.05;
        console.log('here' + guardConfig.step);
      }
      console.log(activeBulletsNumber[i]);
    }
    return activeBulletsNumber;
    }

  