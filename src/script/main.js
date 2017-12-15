import '../css/style.css';

import { canvas, ctx } from './getCanvas';
import { sprite } from './sprite';

import { playPressDetection, contentBeforeGame } from './startNewGame';
import { gameOver } from './gameOver';
import { resetClickCoordinates } from './eventHandler';

import { drawSpace } from './background';
import { attributes, speedAttributes, drawMenu } from './gameAttributes';


import { guardConfig, bulletConfig } from './instances/guard';
import { shooting } from './shooting';

import { asterConfig } from './instances/asteroids';
import { asteroidsMoving } from './asteroidsMoving';

import { hittingCollisionDetection } from './collisionHandler';
import { explosionConfig as explosion, getReadyDestructor } from './explosionHandler';
import { earthExplosionConfig as earthExplosion } from './earthExplosionHandler';


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
  
  for (let i = 0; i < 3; i++) {
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

   if (attributes.shots - attributes.score >= 10 && guardConfig.step < 7) {
        attributes.messageText = "A lot of energy is spent on shots. Be more accurate"
   }
  
    asteroidsMoving(asteroids);
    guardConfig.moving();

    activeBulletsNumber = shooting(ammunition);
    collisionCoordinates = hittingCollisionDetection(activeBulletsNumber, ammunition, asteroids);
    
    if (collisionCoordinates) {
      if(collisionCoordinates.dy > canvas.height - 3 * guardConfig.height) {
        attributes.messageText = "Be careful. Asteroid is too near."
      } 
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

    attributes.drawInstructionMessage();

    if(currentAsteroid && currentAsteroid.flag){
      currentAsteroid.animate();
    }
  
 } else {
  if(earthExplosion.flag){
    earthExplosion.animate();
    gameOver();
    drawMenu(dt);
  }
}
    requestAnimationFrame(draw);
 
} 

