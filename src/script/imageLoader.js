import { canvas, ctx } from './getCanvas';
import { init } from './main'; 

import spacePath from '../img/back2.jpg';
import earthPath from '../img/earth.png';

import guardPath from '../img/guard.png';
import bulletPath from '../img/stars.png';
import asteroidPath from '../img/redAsteroid.png';


import explosionPath2 from '../img/earthExplosion.png';
import piecesPath from '../img/asteroidbelt5.gif';

import clockPath from '../img/clock.png';
import gunPath from '../img/shots.png';
import speedPath from '../img/speed.png';
import playButtonPath from '../img/playbutton.png';
import downArrowPath from '../img/downArrow.png';
import leftArrowPath from '../img/leftArrow.png';




export let loadedNumber = 0;

export let space = new Image();
space.src = spacePath;
space.onload = function() {
  loadedNumber++;
  console.log('loadedspace');
};


export let pieces = new Image();
pieces.src = piecesPath;
pieces.onload = function() {
  loadedNumber++;
  console.log('loadedpiece');
};

export let earth = new Image();
earth.src = earthPath;
earth.onload = function() {
  loadedNumber++;
  console.log('loadedearth');
};


export let gun = new Image();
gun.src = gunPath;
gun.onload = function() {
  loadedNumber++;
  console.log('loadedGun');
};


export let playButton = new Image();
playButton.src = playButtonPath;
playButton.onload = function() {
  loadedNumber++;
  console.log('loadedButton');
};


export let downArrow = new Image();
downArrow.src = downArrowPath;
downArrow.onload = function() {
  loadedNumber++;
  console.log('loadeddownArrow');
};


export let leftArrow = new Image();
leftArrow.src = leftArrowPath;
leftArrow.onload = function() {
  loadedNumber++;
  console.log('loadedLeeftArrow');
};


export let speed = new Image();
speed.src = speedPath;
speed.onload = function() {
  loadedNumber++;
  console.log('loadedSpeed');
};


export let clock = new Image();
clock.src = clockPath;
clock.onload = function() {
  loadedNumber++;
  console.log('loadedClock');
};

export let guard = new Image();
guard.src = guardPath;
guard.onload = function createShip() {
  loadedNumber++;
  console.log('loadedShip');
};

export let bullet = new Image();
bullet.src = bulletPath;
bullet.onload = function createBullet() {
  loadedNumber++;
  console.log('loadedBullet');
};


export let explosion2 = new Image();
explosion2.src = explosionPath2;
explosion2.onload = function createExplosion2() {
  loadedNumber++;
  console.log('loadedExplosion');
};


export let asteroid = new Image();
asteroid.src = asteroidPath;
asteroid.onload = function createAster() {
  loadedNumber++;
  console.log('loadedAsteroid');
  init();
};



