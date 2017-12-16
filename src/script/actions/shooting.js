import { getSpaceState, setSpaceState } from '../handlers/eventHandler';
import { attributes } from '../appearanceAttributes/gameAttributes';
import { guardConfig, bulletConfig } from '../instances/guard';


let activeBulletsNumber = [];
let spaceDown;
let failingBullets = [];

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
       if(ammunition[activeBulletsNumber[i]].dy <= 20 && guardConfig.step > 2 ) {
        guardConfig.step -= 0.05;
        attributes.speed = guardConfig.step;
        attributes.messageText = "Your speed is reduced due to failure. Be more accurate";
      }
    }
    return activeBulletsNumber;
    }

  