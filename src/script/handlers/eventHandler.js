import { canvas } from '../tools/getCanvas';

export let rightPressed = false;
export let leftPressed = false;
export let clickCoordinates = {};


let shot = false;
let spaceDown = false;

export function getSpaceState() {
  return spaceDown;
}

export function setSpaceState(val) {
  spaceDown = val;
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('mousedown', mouseDownHandler, false);
/*document.addEventListener('mouseup', mouseUpHandler, false);*/

function mouseDownHandler(e) {
  clickCoordinates.x = e.clientX;
  clickCoordinates.y = e.clientY;
}

export function resetClickCoordinates() {
  clickCoordinates.x = 0;
  clickCoordinates.y = 0;
}


function mouseUpHandler(e) {
  clickCoordinates.x = e.clientX;
  clickCoordinates.y = e.clientY;
}

function keyDownHandler(e) {
  if (e.keyCode === 39) {
    rightPressed = true;
  } else if (e.keyCode === 37) {
    leftPressed = true;
  } else if (e.keyCode === 32) {
    spaceDown = true;
  }
}

function keyUpHandler(e) {
  if (e.keyCode === 39) {
    rightPressed = false;
  } else if (e.keyCode === 37) {
    leftPressed = false;
  } else if (e.keyCode === 32) {   
    /*spaceDown = false; */
  }
}

