import '../css/style.css';

import { canvas, ctx } from './tools/getCanvas';
import { sprite } from './tools/sprite';


import { drawSpace } from './appearanceAttributes/background';
import { attributes, speedAttributes, drawMenu } from './appearanceAttributes/gameAttributes';


import { guardConfig, bulletConfig } from './instances/guard';
import { shooting } from './actions/shooting';

import { asterConfig } from './instances/asteroids';
import { asteroidsMoving } from './actions/asteroidsMoving';

import { playPressDetection, contentBeforeGame } from './gameStates/startNewGame';
import { gameOver } from './gameStates/gameOver';
import { resetClickCoordinates } from './handlers/eventHandler';
import { hittingCollisionDetection } from './handlers/collisionHandler';
import { explosionConfig as explosion, getReadyDestructor } from './actions/explosionHandler';
import { earthExplosionConfig as earthExplosion } from './actions/earthExplosionHandler';


let ammunition = [];
let activeBulletsNumber = [];

let asteroids = [];
let destructedAsteroids = [];
let currentAsteroid;

let collisionCoordinates;
let explosionCoordinates;

let lastTime;
let now;
let dt;


export function init() {

  for (let i = 0; i < 10; i++) {
    ammunition.push(sprite(bulletConfig));
  }
  
  for (let i = 0; i < 4; i++) {
    asteroids.push(sprite(asterConfig));
    destructedAsteroids.push(sprite(explosion));
  }

  lastTime = Date.now();

  start();
}

function start() {

  if (!playPressDetection()) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
   
    drawSpace();
    drawMenu(0);
    attributes.drawInstructionMessage();
    contentBeforeGame();

    requestAnimationFrame(start);
  } else {
    resetClickCoordinates();
    lastTime = Date.now();
    draw();
  }
}


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawSpace();

  if (playPressDetection() ) {
    document.location.reload();
  }

  if (!earthExplosion.flag) {
  now = Date.now();
  dt = now - lastTime;

  drawMenu(dt);

  if(speedAttributes.speedFlag) {
    attributes.speedMessage();
  }

  
    asteroidsMoving(asteroids);
    guardConfig.moving();

    activeBulletsNumber = shooting(ammunition);
    collisionCoordinates = hittingCollisionDetection(activeBulletsNumber, ammunition, asteroids);
    
    if (collisionCoordinates) {
     
      guardConfig.speedUpdate();

      speedAttributes.setCoordinates(collisionCoordinates);
      attributes.score++;
      attributes.speed = guardConfig.step;
      
      currentAsteroid = getReadyDestructor(destructedAsteroids);
      if(currentAsteroid) {
        currentAsteroid.flag = true;    
        currentAsteroid.setCoordinates(collisionCoordinates);
      }
    }
    
    if (attributes.score === attributes.shots && attributes.shots !== 0) {
      attributes.messageText = 'Exellent precision!';
    }
    attributes.drawInstructionMessage();

    if(currentAsteroid && currentAsteroid.flag){
      currentAsteroid.animate();
    }
  
 } else {
  if(earthExplosion.flag){
    earthExplosion.animate();
    gameOver();
    drawMenu(dt);
    attributes.messageText = "You are destroyed. Keep on training!";
    attributes.drawInstructionMessage();
  }
}
    requestAnimationFrame(draw);
 
} 

