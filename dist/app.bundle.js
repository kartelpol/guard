/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const height = window.innerHeight;
const width = window.innerWidth;

const canvas1 = document.getElementById('canvas');
/* unused harmony export canvas1 */

canvas1.setAttribute('width', width);
canvas1.setAttribute('height', height);

const canvas = {
  width: width,
  height: height,
};
/* harmony export (immutable) */ __webpack_exports__["a"] = canvas;


const ctx = canvas1.getContext('2d');
/* harmony export (immutable) */ __webpack_exports__["b"] = ctx;




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export loadedNumber */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return space; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return pieces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return earth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return gun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return playButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return downArrow; });
/* unused harmony export leftArrow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return speed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return guard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bullet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return explosion2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return asteroid; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getCanvas__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_back2_jpg__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_back2_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__img_back2_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_earth_png__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_earth_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__img_earth_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_guard_png__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_guard_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__img_guard_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__img_stars_png__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__img_stars_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__img_stars_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__img_redAsteroid_png__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__img_redAsteroid_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__img_redAsteroid_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__img_earthExplosion_png__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__img_earthExplosion_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__img_earthExplosion_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__img_asteroidbelt5_gif__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__img_asteroidbelt5_gif___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__img_asteroidbelt5_gif__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__img_clock_png__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__img_clock_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__img_clock_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__img_shots_png__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__img_shots_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__img_shots_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__img_speed_png__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__img_speed_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__img_speed_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__img_playbutton_png__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__img_playbutton_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__img_playbutton_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__img_downArrow_png__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__img_downArrow_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__img_downArrow_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__img_leftArrow_png__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__img_leftArrow_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__img_leftArrow_png__);

 






















let loadedNumber = 0;

let space = new Image();
space.src = __WEBPACK_IMPORTED_MODULE_2__img_back2_jpg___default.a;
space.onload = function() {
  loadedNumber++;
  console.log('loadedspace');
};


let pieces = new Image();
pieces.src = __WEBPACK_IMPORTED_MODULE_8__img_asteroidbelt5_gif___default.a;
pieces.onload = function() {
  loadedNumber++;
  console.log('loadedpiece');
};

let earth = new Image();
earth.src = __WEBPACK_IMPORTED_MODULE_3__img_earth_png___default.a;
earth.onload = function() {
  loadedNumber++;
  console.log('loadedearth');
};


let gun = new Image();
gun.src = __WEBPACK_IMPORTED_MODULE_10__img_shots_png___default.a;
gun.onload = function() {
  loadedNumber++;
  console.log('loadedGun');
};


let playButton = new Image();
playButton.src = __WEBPACK_IMPORTED_MODULE_12__img_playbutton_png___default.a;
playButton.onload = function() {
  loadedNumber++;
  console.log('loadedButton');
};


let downArrow = new Image();
downArrow.src = __WEBPACK_IMPORTED_MODULE_13__img_downArrow_png___default.a;
downArrow.onload = function() {
  loadedNumber++;
  console.log('loadeddownArrow');
};


let leftArrow = new Image();
leftArrow.src = __WEBPACK_IMPORTED_MODULE_14__img_leftArrow_png___default.a;
leftArrow.onload = function() {
  loadedNumber++;
  console.log('loadedLeeftArrow');
};


let speed = new Image();
speed.src = __WEBPACK_IMPORTED_MODULE_11__img_speed_png___default.a;
speed.onload = function() {
  loadedNumber++;
  console.log('loadedSpeed');
};


let clock = new Image();
clock.src = __WEBPACK_IMPORTED_MODULE_9__img_clock_png___default.a;
clock.onload = function() {
  loadedNumber++;
  console.log('loadedClock');
};

let guard = new Image();
guard.src = __WEBPACK_IMPORTED_MODULE_4__img_guard_png___default.a;
guard.onload = function createShip() {
  loadedNumber++;
  console.log('loadedShip');
};

let bullet = new Image();
bullet.src = __WEBPACK_IMPORTED_MODULE_5__img_stars_png___default.a;
bullet.onload = function createBullet() {
  loadedNumber++;
  console.log('loadedBullet');
};


let explosion2 = new Image();
explosion2.src = __WEBPACK_IMPORTED_MODULE_7__img_earthExplosion_png___default.a;
explosion2.onload = function createExplosion2() {
  loadedNumber++;
  console.log('loadedExplosion');
};


let asteroid = new Image();
asteroid.src = __WEBPACK_IMPORTED_MODULE_6__img_redAsteroid_png___default.a;
asteroid.onload = function createAster() {
  loadedNumber++;
  console.log('loadedAsteroid');
  Object(__WEBPACK_IMPORTED_MODULE_1__main__["init"])();
};





/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sprite;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getCanvas__ = __webpack_require__(0);


function sprite(options) {

  let that = {};

  that.context = options.context;
  that.width = options.width;
  that.height = options.height;
  that.image = options.image;
  that.sx = options.sx || 0;
  that.sy = options.sy || 0;
  that.dx = options.dx;
  that.dy = options.dy;
  that.dWidth = options.dWidth || options.width;
  that.dHeight = options.dHeight || options.height;
  that.speed = options.speed || 0;
  that.growSpeed = options.growSpeed || 0;
  that.acceleration = options.acceleration || 1;
  that.accessible = options.accessible;
  that.flag = options.flag;
  that.opacity = options.opacity || 1;
  

  that.initial = options.initial || 0;
  that.moving = options.moving || 0;
  that.animate = options.animate || undefined;
  that.setCoordinates = options.setCoordinates || undefined;
  

  let frameIndex = 0;
  let tickCount = 0;
  let ticksPerFrame = options.ticksPerFrame || 0;
  let numberOfFrames = options.numberOfFrames || 1;


  that.render = function () {
    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].globalAlpha = that.opacity;
    that.context.drawImage(
      that.image,
      that.sx,
      that.sy,
      that.width,
      that.height,
      that.dx,
      that.dy,
      that.dWidth,
      that.dHeight);
    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].globalAlpha = 1;
    };


    that.update = function () {
      if (that.growSpeed) {
        that.dWidth += that.growSpeed;
        that.dHeight += that.growSpeed;
      } 
      that.dy += that.speed;
      that.speed *= that.acceleration;
 };
    return that;
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = drawMenu;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getCanvas__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imageLoader__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instances_guard_js__ = __webpack_require__(4);




let arr = [];

const speedAttributes = {
  opacity: 1,
  dx: 0,
  dy: 0,
  speedFlag: false,
  setCoordinates(obj) {
    this.dx = obj.dx;
    this.dy = obj.dy;
  }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = speedAttributes;



const attributes = {
  score: 0,
  shots: 0,
  time: "",
  speed: __WEBPACK_IMPORTED_MODULE_2__instances_guard_js__["b" /* guardConfig */].step,

  speedMessage() {
    if( speedAttributes.opacity > 0.1 ) {
    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].font = '16px Arial';
    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillStyle = '#ffffff';
    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].globalAlpha = speedAttributes.opacity;
    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillText('+ Speed', speedAttributes.dx, speedAttributes.dy);
    speedAttributes.opacity -= 0.1;
    speedAttributes.dx -= 2;
    speedAttributes.dy -= 2;
    } else {
      speedAttributes.speedFlag = false;
      __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].globalAlpha = 1;
      speedAttributes.opacity = 1;
    } 
  },

  messageText: "It\'s your information window. Here you\'ll get some instructions",
  firstLine: "",
  secondLine: "",

  drawInstructionMessage() {
    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].font = '16px Arial';
    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillStyle = '#ffffff';

    if(this.messageText.length > 40) {
      arr = this.messageText.split(" ");
      for( let i = 0; i < (Math.floor(arr.length / 2)); i ++) {
        this.firstLine += arr[i] + " ";
      }

      for( let i = (Math.floor(arr.length / 2)); i < arr.length; i ++) {
        this.secondLine += arr[i] + " ";
      }
     
     __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillText(this.firstLine , __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].width - 335, 30);
     __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillText(this.secondLine, __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].width - 335, 50);
     
     this.firstLine = "";
     this.secondLine = "";
    } else {
     __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillText(this.messageText , __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].width - 335, 30);
    }
  }

};
/* harmony export (immutable) */ __webpack_exports__["a"] = attributes;



function drawMenu(dt){
    
    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].beginPath();
    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].rect( 10, 10, 230, 25);
    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillStyle = '#02061a';
    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fill();
    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].closePath();


    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].beginPath();
    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].rect( 10, 45, 230, 25);
    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillStyle = '#02061a';
    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fill();
    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].closePath();

    
    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].beginPath();
    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].rect( 10, 80, 230, 25);
    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillStyle = '#02061a';
    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fill();
    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].closePath();


    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].beginPath();
    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].rect( 10, 120, 230, 25);
    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillStyle = '#02061a';
    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fill();
    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].closePath();
   

   __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].drawImage(__WEBPACK_IMPORTED_MODULE_1__imageLoader__["h" /* gun */], 0, 0, 1200, 750, 100, 10, 50, 31 );
   __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].drawImage(__WEBPACK_IMPORTED_MODULE_1__imageLoader__["l" /* speed */], 0, 0, 512, 512, 15, 40, 35, 35 ); 
   __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].drawImage(__WEBPACK_IMPORTED_MODULE_1__imageLoader__["c" /* clock */], 0, 0, 300, 300, 15, 80, 35, 35); 
   __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].drawImage(__WEBPACK_IMPORTED_MODULE_1__imageLoader__["j" /* playButton */], 0, 0, 368, 368, 100, 117, 40, 40 );
   

   __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].font = '16px Arial';
   __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillStyle = '#ffffff';
   __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillText('Shots:  ' + attributes.shots , 15, 30);

   __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].font = '16px Arial';
   __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillStyle = '#ffffff';
   __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillText('Score:  ' + attributes.score , 170, 30);

   __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].font = '16px Arial';
   __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillStyle = '#ffffff';
   __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillText('Speed:  ' + attributes.speed.toFixed(2) + 'km/sec', 80, 65);


   attributes.time = timeParser(dt);
   __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillText('Time:  ' + attributes.time, 80, 100);

  /* ctx.fillText('Play ', 80, 145);*/
    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].beginPath();
    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].rect( __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].width - 350, 10, 330, 60);
    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillStyle = '#02061a';
    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fill();
    __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].closePath();  

 }


function timeParser(dt) {
  
  let hours = Math.floor(dt / 1000 / 3600);
  let minutes = Math.floor((dt / 1000 / 3600 -  hours) * 60);
  let seconds = Math.round(((dt / 1000 / 3600 -  hours) * 60 - minutes) * 60);

  
  hours = timeFormatting(hours);
  minutes = timeFormatting(minutes);
  seconds = timeFormatting(seconds);

  let timeLine = hours + ' : ' + minutes + ' : ' + seconds;
  return timeLine;
}

function timeFormatting(val) {
  if((""+val).length === 1) {
    return "0"+val;
  }
  else return val;
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return guardConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bulletConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eventHandler__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getCanvas__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gameAttributes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__imageLoader__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sprite__ = __webpack_require__(2);








let widthOfGuard = 200;

let guardConfig = {
  height: 112,
  width: widthOfGuard,
  guardX: (__WEBPACK_IMPORTED_MODULE_1__getCanvas__["a" /* canvas */].width - widthOfGuard) / 2,
  step: 2,

  moving() {

    if (__WEBPACK_IMPORTED_MODULE_0__eventHandler__["e" /* rightPressed */] && this.guardX <= __WEBPACK_IMPORTED_MODULE_1__getCanvas__["a" /* canvas */].width - this.width - this.step) {
      this.guardX += this.step;
      __WEBPACK_IMPORTED_MODULE_1__getCanvas__["b" /* ctx */].drawImage(__WEBPACK_IMPORTED_MODULE_3__imageLoader__["g" /* guard */], this.guardX, __WEBPACK_IMPORTED_MODULE_1__getCanvas__["a" /* canvas */].height - this.height, this.width, this.height);
    } else if (__WEBPACK_IMPORTED_MODULE_0__eventHandler__["c" /* leftPressed */] && this.guardX > 0 + this.step) {
      this.guardX -= this.step;
      __WEBPACK_IMPORTED_MODULE_1__getCanvas__["b" /* ctx */].drawImage(__WEBPACK_IMPORTED_MODULE_3__imageLoader__["g" /* guard */], this.guardX, __WEBPACK_IMPORTED_MODULE_1__getCanvas__["a" /* canvas */].height - this.height, this.width, this.height);
    } /*else if (relativeX > 0 && relativeX < canvas.width) {
      this.guardX = relativeX - this.width / 2;
      ctx.drawImage(guard, this.guardX, canvas.height - this.height, this.width, this.height);
    }*/
    __WEBPACK_IMPORTED_MODULE_1__getCanvas__["b" /* ctx */].drawImage(__WEBPACK_IMPORTED_MODULE_3__imageLoader__["g" /* guard */], this.guardX, __WEBPACK_IMPORTED_MODULE_1__getCanvas__["a" /* canvas */].height - this.height, this.width, this.height);
  },

  speedUpdate() {
    if(this.step <= 5){
          this.step += 0.15;
          __WEBPACK_IMPORTED_MODULE_2__gameAttributes__["c" /* speedAttributes */].speedFlag = true;
        } else if (this.step < 9) {
          this.step += 0.1;
          __WEBPACK_IMPORTED_MODULE_2__gameAttributes__["c" /* speedAttributes */].speedFlag = true;
          __WEBPACK_IMPORTED_MODULE_2__gameAttributes__["a" /* attributes */].messageText = "Be careful, your accuracy is reduced due to high speed";
        } else {
          __WEBPACK_IMPORTED_MODULE_2__gameAttributes__["a" /* attributes */].messageText = "Your speed is maximal."
        }
    }
};



const bulletWidth = 50;
const bulletHeight = 50;

let bulletConfig = {
  context: __WEBPACK_IMPORTED_MODULE_1__getCanvas__["b" /* ctx */],
  width: bulletWidth,
  height: bulletHeight,
  image: __WEBPACK_IMPORTED_MODULE_3__imageLoader__["b" /* bullet */],
  dx: guardConfig.guardX + (guardConfig.width / 2) - (bulletWidth / 2),
  dy: __WEBPACK_IMPORTED_MODULE_1__getCanvas__["a" /* canvas */].height - guardConfig.height - bulletHeight,
  speed: -25,
  acceleration: 0.97,
  growSpeed: -0.2,
/*  ticksPerFrame: 1,
  numberOfFrames: 8,*/
};


bulletConfig.initial = function() {
  this.dx = guardConfig.guardX + (guardConfig.width / 2) - (bulletWidth / 2);
  this.dy = __WEBPACK_IMPORTED_MODULE_1__getCanvas__["a" /* canvas */].height - guardConfig.height - bulletHeight;
  this.accessible = true;
  this.dWidth = bulletWidth;
  this.dHeight = bulletHeight;
  this.speed = -30;
}



bulletConfig.accessible = true;

bulletConfig.moving = function() {
  this.accessible = false;
  
  if (this.dy === __WEBPACK_IMPORTED_MODULE_1__getCanvas__["a" /* canvas */].height - guardConfig.height - bulletHeight) {
    this.dx = guardConfig.guardX + (guardConfig.width / 2) - (bulletWidth / 2);
  }
    /*console.log(this.dx + '  ' + this.dy);*/

  if (this.dy >= 0) {
    this.render();
    this.update(); 
  } else if (this.dy < 0) {
    this.initial();
  }
};



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return rightPressed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return leftPressed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clickCoordinates; });
/* harmony export (immutable) */ __webpack_exports__["b"] = getSpaceState;
/* harmony export (immutable) */ __webpack_exports__["f"] = setSpaceState;
/* harmony export (immutable) */ __webpack_exports__["d"] = resetClickCoordinates;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getCanvas__ = __webpack_require__(0);


let rightPressed = false;
let leftPressed = false;
let clickCoordinates = {};


let shot = false;
let spaceDown = false;

function getSpaceState() {
  return spaceDown;
}

function setSpaceState(val) {
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

function resetClickCoordinates() {
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



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["init"] = init;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_style_css__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getCanvas__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sprite__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__startNewGame__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gameOver__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__eventHandler__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__background__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gameAttributes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__instances_guard__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shooting__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__instances_asteroids__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__asteroidsMoving__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__collisionHandler__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__explosionHandler__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__earthExplosionHandler__ = __webpack_require__(9);
























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


function init() {

  for (let i = 0; i < 10; i++) {
    ammunition.push(Object(__WEBPACK_IMPORTED_MODULE_2__sprite__["a" /* sprite */])(__WEBPACK_IMPORTED_MODULE_8__instances_guard__["a" /* bulletConfig */]));
  }
  
  for (let i = 0; i < 3; i++) {
    asteroids.push(Object(__WEBPACK_IMPORTED_MODULE_2__sprite__["a" /* sprite */])(__WEBPACK_IMPORTED_MODULE_10__instances_asteroids__["a" /* asterConfig */]));
    destructedAsteroids.push(Object(__WEBPACK_IMPORTED_MODULE_2__sprite__["a" /* sprite */])(__WEBPACK_IMPORTED_MODULE_13__explosionHandler__["a" /* explosionConfig */]));
  }

  lastTime = Date.now();

  start();
}

function start() {

  if (!Object(__WEBPACK_IMPORTED_MODULE_3__startNewGame__["b" /* playPressDetection */])()) {
    __WEBPACK_IMPORTED_MODULE_1__getCanvas__["b" /* ctx */].clearRect(0, 0, __WEBPACK_IMPORTED_MODULE_1__getCanvas__["a" /* canvas */].width, __WEBPACK_IMPORTED_MODULE_1__getCanvas__["a" /* canvas */].height);
   
    Object(__WEBPACK_IMPORTED_MODULE_6__background__["a" /* drawSpace */])();
    Object(__WEBPACK_IMPORTED_MODULE_7__gameAttributes__["b" /* drawMenu */])(0);
    __WEBPACK_IMPORTED_MODULE_7__gameAttributes__["a" /* attributes */].drawInstructionMessage();
    Object(__WEBPACK_IMPORTED_MODULE_3__startNewGame__["a" /* contentBeforeGame */])();

    requestAnimationFrame(start);
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_5__eventHandler__["d" /* resetClickCoordinates */])();
    lastTime = Date.now();
    draw();
  }
}


function draw() {
  __WEBPACK_IMPORTED_MODULE_1__getCanvas__["b" /* ctx */].clearRect(0, 0, __WEBPACK_IMPORTED_MODULE_1__getCanvas__["a" /* canvas */].width, __WEBPACK_IMPORTED_MODULE_1__getCanvas__["a" /* canvas */].height);

  Object(__WEBPACK_IMPORTED_MODULE_6__background__["a" /* drawSpace */])();

  if (Object(__WEBPACK_IMPORTED_MODULE_3__startNewGame__["b" /* playPressDetection */])() ) {
    document.location.reload();
  }

  if (!__WEBPACK_IMPORTED_MODULE_14__earthExplosionHandler__["a" /* earthExplosionConfig */].flag) {
  now = Date.now();
  dt = now - lastTime;

  Object(__WEBPACK_IMPORTED_MODULE_7__gameAttributes__["b" /* drawMenu */])(dt);
  __WEBPACK_IMPORTED_MODULE_7__gameAttributes__["a" /* attributes */].drawInstructionMessage();

  if(__WEBPACK_IMPORTED_MODULE_7__gameAttributes__["c" /* speedAttributes */].speedFlag) {
    __WEBPACK_IMPORTED_MODULE_7__gameAttributes__["a" /* attributes */].speedMessage();
  }

   if (__WEBPACK_IMPORTED_MODULE_7__gameAttributes__["a" /* attributes */].shots - __WEBPACK_IMPORTED_MODULE_7__gameAttributes__["a" /* attributes */].score >= 10 && __WEBPACK_IMPORTED_MODULE_8__instances_guard__["b" /* guardConfig */].step < 7) {
        __WEBPACK_IMPORTED_MODULE_7__gameAttributes__["a" /* attributes */].messageText = "A lot of energy is spent on shots. Be more accurate"
   }
  
    Object(__WEBPACK_IMPORTED_MODULE_11__asteroidsMoving__["a" /* asteroidsMoving */])(asteroids);
    __WEBPACK_IMPORTED_MODULE_8__instances_guard__["b" /* guardConfig */].moving();

    activeBulletsNumber = Object(__WEBPACK_IMPORTED_MODULE_9__shooting__["a" /* shooting */])(ammunition);
    collisionCoordinates = Object(__WEBPACK_IMPORTED_MODULE_12__collisionHandler__["a" /* hittingCollisionDetection */])(activeBulletsNumber, ammunition, asteroids);
    
    if (collisionCoordinates) {
      if(collisionCoordinates.dy > __WEBPACK_IMPORTED_MODULE_1__getCanvas__["a" /* canvas */].height - 3 * __WEBPACK_IMPORTED_MODULE_8__instances_guard__["b" /* guardConfig */].height) {
        __WEBPACK_IMPORTED_MODULE_7__gameAttributes__["a" /* attributes */].messageText = "Be careful. Asteroid is too near."
      } 
      __WEBPACK_IMPORTED_MODULE_8__instances_guard__["b" /* guardConfig */].speedUpdate();

      __WEBPACK_IMPORTED_MODULE_7__gameAttributes__["c" /* speedAttributes */].setCoordinates(collisionCoordinates);
      __WEBPACK_IMPORTED_MODULE_7__gameAttributes__["a" /* attributes */].score++;
      __WEBPACK_IMPORTED_MODULE_7__gameAttributes__["a" /* attributes */].speed = __WEBPACK_IMPORTED_MODULE_8__instances_guard__["b" /* guardConfig */].step;
      
      currentAsteroid = Object(__WEBPACK_IMPORTED_MODULE_13__explosionHandler__["b" /* getReadyDestructor */])(destructedAsteroids);
      if(currentAsteroid) {
        currentAsteroid.flag = true;    
        currentAsteroid.setCoordinates(collisionCoordinates);
      }
    } 

    if(currentAsteroid && currentAsteroid.flag){
      currentAsteroid.animate();
    }
  
 } else {
  if(__WEBPACK_IMPORTED_MODULE_14__earthExplosionHandler__["a" /* earthExplosionConfig */].flag){
    __WEBPACK_IMPORTED_MODULE_14__earthExplosionHandler__["a" /* earthExplosionConfig */].animate();
    Object(__WEBPACK_IMPORTED_MODULE_4__gameOver__["a" /* gameOver */])();
    Object(__WEBPACK_IMPORTED_MODULE_7__gameAttributes__["b" /* drawMenu */])(dt);
  }
}
    requestAnimationFrame(draw);
 
} 



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return earthDy; });
/* harmony export (immutable) */ __webpack_exports__["a"] = drawSpace;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getCanvas__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imageLoader__ = __webpack_require__(1);






let dx = 0;
let dy1 = 0;
let dy2 = -__WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].height;

const imageWidth = 4000;
const imageHeight = 2250;

let eatrhDx = __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].width * 1.3;
let earthDy = 576;


function drawSpace() {
  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].drawImage(__WEBPACK_IMPORTED_MODULE_2__imageLoader__["k" /* space */], 0, 0, 4000, 2180, dx, dy1, __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].width, __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].height);
  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].drawImage(__WEBPACK_IMPORTED_MODULE_2__imageLoader__["k" /* space */], 0, 0, 4000, 2180, dx, dy2, __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].width, __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].height);

  if( dy2 >= -0.1 && dy2 <= 0 /*dy1 >= canvas.height*/) {
  	dy1 = -__WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].height;
  	console.log(dy1);
  } else {
    dy1 += 0.1;
  }


  if( dy1 >=  - 0.1 && dy1 <=0) {
  	dy2 = -__WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].height;
  } else {
    dy2 += 0.1;
  }

  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].drawImage(__WEBPACK_IMPORTED_MODULE_2__imageLoader__["e" /* earth */], 0, 0, 1024, 576, -__WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].width * 0.15, __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].height * 0.5, eatrhDx, earthDy);
} 

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return asterConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getCanvas__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imageLoader__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guard_js__ = __webpack_require__(4);





let asteroidWidth = 750;
let asteroidHeight = 750;

let asterConfig = {
  context: __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */],
  width: asteroidWidth,
  height: asteroidHeight,
  image: __WEBPACK_IMPORTED_MODULE_2__imageLoader__["a" /* asteroid */],
  dx: Math.random() * (__WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].width - asteroidWidth) + (asteroidWidth / 2),
  dy: Math.random() * __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].height * 0.1,
  dWidth: 2,
  dHeight: 2,
  speed: 0.3,
  acceleration: 1.003,
  growSpeed: 0.07,
};



asterConfig.moving = function() {
  
  if(this.dy <= __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].height ) {
    this.render();
    this.update();
  } else {
    this.initial();
  }
};

asterConfig.initial = function() {
  this.dWidth = 10;
  this.dHeight = 10;
  this.speed = 0.1;
  this.dy = Math.random() * __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].height * 0.2;
  this.dx = Math.random() * (__WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].width - (2 * __WEBPACK_IMPORTED_MODULE_3__guard_js__["b" /* guardConfig */].width)) + __WEBPACK_IMPORTED_MODULE_3__guard_js__["b" /* guardConfig */].width;
/*  this.accessible = true;*/
};




/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return earthExplosionConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__imageLoader__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getCanvas__ = __webpack_require__(0);





let earthExplosionConfig = {
  context: __WEBPACK_IMPORTED_MODULE_2__getCanvas__["b" /* ctx */],
  width: 1024,
  height: 768,
  sx: 0,
  sy: 0,
  image: __WEBPACK_IMPORTED_MODULE_0__imageLoader__["f" /* explosion2 */],
  dx: 0,
  dy: __WEBPACK_IMPORTED_MODULE_2__getCanvas__["a" /* canvas */].height - 740,
  dWidth: __WEBPACK_IMPORTED_MODULE_2__getCanvas__["a" /* canvas */].width,
  dHeight: /*300*/ 768,
  extentionSpeed: 5,
  growSpeed: 10,
  flag: false,
  opacity: 1,
  
  setCoordinates(obj) {
    /*this.dx = obj.dx;
    this.dy = canvas.height - this.dHeight;*/
  	this.flag = true;
  },



  animate() {
  	
 __WEBPACK_IMPORTED_MODULE_2__getCanvas__["b" /* ctx */].globalAlpha = this.opacity;
    __WEBPACK_IMPORTED_MODULE_2__getCanvas__["b" /* ctx */].drawImage(
      this.image,
      0,
      0,
      this.width,
      this.height,
      this.dx,
      this.dy,
      this.dWidth,
      this.dHeight);

    __WEBPACK_IMPORTED_MODULE_2__getCanvas__["b" /* ctx */].globalAlpha = 1;

   /* if (this.dHeight < this.height) {
      this.dHeight += this.growSpeed;
    }
  
  	if ( this.dy + this.dHeight >= canvas.height + 50){
  	  this.dy -= 5;	
  	}*/
  }
  
}




/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(undefined);
// imports


// module
exports.push([module.i, "canvas {\n\tposition: absolute;\n\t/* background-image: url('../img/space.jpg');\n\tbackground-attachment: fixed;\n\t    background-size: 100% 100%; */\n\tleft: 0;\n\tbottom: 0;\n\tright: 0;\n\ttop: 0;\n}\n\n", ""]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(14);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 14 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = playPressDetection;
/* harmony export (immutable) */ __webpack_exports__["a"] = contentBeforeGame;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getCanvas__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eventHandler__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imageLoader__ = __webpack_require__(1);







function playPressDetection() {
  if(__WEBPACK_IMPORTED_MODULE_1__eventHandler__["a" /* clickCoordinates */].x && __WEBPACK_IMPORTED_MODULE_1__eventHandler__["a" /* clickCoordinates */].y) {
    if ( __WEBPACK_IMPORTED_MODULE_1__eventHandler__["a" /* clickCoordinates */].x >= 100 && __WEBPACK_IMPORTED_MODULE_1__eventHandler__["a" /* clickCoordinates */].x <= 468 &&
      __WEBPACK_IMPORTED_MODULE_1__eventHandler__["a" /* clickCoordinates */].y >= 115 && __WEBPACK_IMPORTED_MODULE_1__eventHandler__["a" /* clickCoordinates */].y <= 165) {
      return true;
    } 	
  } else {
    return false;
  }
}

const guardWidth = 300;
const guardHeight = 168;
let h1 = __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].width * 0.03;
let h2 = __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].width * 0.015;
let text = __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].width * 0.01;

function contentBeforeGame() {
  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillStyle = '#ffffff';
  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].font = h1 + 'px Arial';
  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillText('Welcome, guard!', __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].width * 0.4, 150 );
  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillStyle = '#f00a0a';
  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillText('Your mission is to protect Earth from asteroids', __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].width * 0.2, 170 + h1 );


  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].beginPath();
  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].rect( __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].width * 0.1, __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].height / 2 - 50, __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].width * 0.8, __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].height * 0.4);
  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].globalAlpha = 0.7;
  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillStyle = '#21110b';
  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fill();
  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].closePath();

  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].globalAlpha = 1;
  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillStyle = '#f00a0a';
  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].font = h2 + 'px Arial';

  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].drawImage(__WEBPACK_IMPORTED_MODULE_2__imageLoader__["g" /* guard */], __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].width / 2 - 0.85 * guardWidth, __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].height / 2, guardWidth, guardHeight);
  
  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillStyle = '#ffffff';
  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillText('For accurate shots', __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].width * 0.12, __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].height / 2);
  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillText('You increase your speed', __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].width * 0.12, __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].height / 2 + 1.5 * h2);
  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillText('But it\'s harder to hit the target', __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].width * 0.12, __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].height / 2 + 4.5 * h2);
  
  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillText('Use LEFT and RIGHT arrows to move your ship', __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].width / 2 + 50, __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].height / 2);
  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillText('Up and down arrows are blocked', __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].width / 2 + 50, __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].height / 2 + 1.5*h2 );
  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillText('You\'re not allowed fly far away from Earth', __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].width / 2 + 50, __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].height / 2 + 3*h2 );
  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillText('Use SPACE for shotting', __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].width / 2 + 50, __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].height / 2 + 4.5*h2 );

  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].drawImage(__WEBPACK_IMPORTED_MODULE_2__imageLoader__["d" /* downArrow */], 0, 0, 488, 720, 145, 120, 50, 73.5 );
  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].font = text + 'px Arial';
  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillText('Press to begin', 70, 215);

}




/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/back2.jpg";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/earth.png";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/guard.png";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/stars.png";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/redAsteroid.png";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/earthExplosion.png";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/asteroidbelt5.gif";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/clock.png";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/shots.png";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/speed.png";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/playbutton.png";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/downArrow.png";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/leftArrow.png";

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = gameOver;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getCanvas__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gameAttributes_js__ = __webpack_require__(3);




const pictureNativeWidth = 241;
const pictureNativeHeight = 178;
let width = 300;
let height = 210;

function gameOver() {


  let h1 = __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].width * 0.05;
  let h2 = __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].width * 0.03;
  let text = __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].width * 0.02;
  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].font = h1 + 'px Arial';
  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillStyle = 'black';
  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillText('GAME OVER', __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].width / 2 - (3 * h1), __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].height / 2 - h1);
  
  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].font = h2 + 'px Arial';
  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillText('Your results: ', __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].width / 2 - (4 * h2), __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].height / 2 );
 
  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].font = text + 'px Arial';
  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillText( 'Presision:  ' + __WEBPACK_IMPORTED_MODULE_1__gameAttributes_js__["a" /* attributes */].score + ' / ' + __WEBPACK_IMPORTED_MODULE_1__gameAttributes_js__["a" /* attributes */].shots, __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].width / 2 - (4 * h2), __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].height / 2 + (2 * text));

  __WEBPACK_IMPORTED_MODULE_0__getCanvas__["b" /* ctx */].fillText( 'Time:  ' + __WEBPACK_IMPORTED_MODULE_1__gameAttributes_js__["a" /* attributes */].time, __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].width / 2 - (4 * h2), __WEBPACK_IMPORTED_MODULE_0__getCanvas__["a" /* canvas */].height / 2 + (3 * text));

}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shooting;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eventHandler__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gameAttributes__ = __webpack_require__(3);




let activeBulletsNumber = [];
let spaceDown;

function shooting(ammunition){

  for (let i = 0; i < activeBulletsNumber.length; i++) {
    if (ammunition[activeBulletsNumber[i]].accessible) {
      activeBulletsNumber.splice(i, 1);
    }
  } 
  

  let found = false;
  let i = 0;
  spaceDown = Object(__WEBPACK_IMPORTED_MODULE_0__eventHandler__["b" /* getSpaceState */])();

  if(spaceDown) {
    while (!found && i < ammunition.length) {
      if (ammunition[i] && ammunition[i].accessible) {
        activeBulletsNumber.push(i);
        __WEBPACK_IMPORTED_MODULE_1__gameAttributes__["a" /* attributes */].shots++;
        found = true;
        Object(__WEBPACK_IMPORTED_MODULE_0__eventHandler__["f" /* setSpaceState */])(false);
      }
      i++;
    }
  }

  for (let i = 0; i < activeBulletsNumber.length; i++) {
      ammunition[activeBulletsNumber[i]].moving();
    }

  

    return activeBulletsNumber;
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = asteroidsMoving;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gameAttributes__ = __webpack_require__(3);


const tickPerFrame = 1000;
let counter = 0;

function asteroidsMoving(asteroids) {
   
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

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = hittingCollisionDetection;
/* unused harmony export explosionDetection */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getCanvas__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__instances_guard__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instances_asteroids__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gameAttributes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__background__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__earthExplosionHandler__ = __webpack_require__(9);








let coordinates;

function hittingCollisionDetection(bullsNumber, bull, asteroids) {
  coordinates = explosionDetection(asteroids);
  if (!coordinates){
    for ( let i=0; i<bullsNumber.length; i++) {
      for (let j = 0; j < asteroids.length; j++){

        if ( bull[bullsNumber[i]].dy <= asteroids[j].dy + asteroids[j].dHeight
        && bull[bullsNumber[i]].dy >= asteroids[j].dy &&
          bull[bullsNumber[i]].dx + (bull[bullsNumber[i]].width/2) >= asteroids[j].dx && 
          bull[bullsNumber[i]].dx + (bull[bullsNumber[i]].width/2) <= asteroids[j].dx + asteroids[j].dWidth ) {

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
    console.log(__WEBPACK_IMPORTED_MODULE_5__earthExplosionHandler__["a" /* earthExplosionConfig */]);
    __WEBPACK_IMPORTED_MODULE_5__earthExplosionHandler__["a" /* earthExplosionConfig */].setCoordinates(coordinates);
  } 
}

function explosionDetection(asteroids) {
  for( let i = 0; i < asteroids.length; i++) {
  	if ( asteroids[i].dy + asteroids[i].dHeight > __WEBPACK_IMPORTED_MODULE_4__background__["b" /* earthDy */] * 1.05) {
      coordinates = {};
		  coordinates.dx = asteroids[i].dx;
      coordinates.dy = asteroids[i].dy;
      asteroids[i].initial();
      return coordinates;
	}
  }
	
}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return explosionConfig; });
/* harmony export (immutable) */ __webpack_exports__["b"] = getReadyDestructor;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__imageLoader__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getCanvas__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__instances_guard__ = __webpack_require__(4);







let explosionConfig = {
  context: __WEBPACK_IMPORTED_MODULE_2__getCanvas__["b" /* ctx */],
  width: 1000,
  height: 250,
  sx: 0,
  sy: 0,
  image: __WEBPACK_IMPORTED_MODULE_0__imageLoader__["i" /* pieces */],
  dx: 0,
  dy: 0,
  dWidth: 30,
  dHeight: 30,
  extentionSpeed: 0,
  growSpeed: 3,
  opasity: 1,
  accessible: true,
}

explosionConfig.initial = function() {
  this.dWidth = 30;
  this.dHeight = 30;
  this.flag = false;
  this.dx = 0;
  this.dy = 0;
  this.width = 200;
  this.height = 200;
  this.opacity = 1;
  this.accessible = true;
}

explosionConfig.setCoordinates = function(coordinates) {

	this.dx = coordinates.dx;
	this.dy = coordinates.dy;
  this.growLimit = 50; 

}

explosionConfig.flag = false;
explosionConfig.setFlag = function(val) {
	this.flag = val;
}

explosionConfig.getFlag = function() {
	return this.flag;
}


explosionConfig.animate = function() {
  this.accessible = false;
  console.log(this.dWidth);
  console.log(this.growLimit);
  if (this.dWidth <= this.growLimit) {
   
  	this.render();
    if( this.opacity > 0.1 ){
      this.opacity -= 0.1;
    }
    
    this.dWidth += this.growSpeed;
    this.dHeiht += this.growSpeed;
  } else {
    this.initial();
  } 
}



function getReadyDestructor(destructedAsteroids) {
   let  i = 0;
  while (i < destructedAsteroids.length ) {
    if ( destructedAsteroids[i].accessible) {
      return destructedAsteroids[i];
    }
    i++;
  }
}

/***/ })
/******/ ]);