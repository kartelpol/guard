import { ctx, canvas } from '../tools/getCanvas';
import { clock, gun, speed, playButton } from '../tools/imageLoader';
import { guardConfig } from '../instances/guard.js';

let arr = [];

export const speedAttributes = {
  opacity: 1,
  dx: 0,
  dy: 0,
  speedFlag: false,
  setCoordinates(obj) {
    this.dx = obj.dx;
    this.dy = obj.dy;
  }
}


export const attributes = {
  score: 0,
  shots: 0,
  time: "",
  speed: guardConfig.step,

  speedMessage() {
    if( speedAttributes.opacity > 0.1 ) {
    ctx.font = '16px Arial';
    ctx.fillStyle = '#ffffff';
    ctx.globalAlpha = speedAttributes.opacity;
    ctx.fillText('+ Speed', speedAttributes.dx, speedAttributes.dy);
    speedAttributes.opacity -= 0.1;
    speedAttributes.dx -= 2;
    speedAttributes.dy -= 2;
    } else {
      speedAttributes.speedFlag = false;
      ctx.globalAlpha = 1;
      speedAttributes.opacity = 1;
    } 
  },

  messageText: "It\'s your information window. Here you\'ll get some instructions",
  firstLine: "",
  secondLine: "",

  drawInstructionMessage() {
    ctx.font = '16px Arial';
    ctx.fillStyle = '#ffffff';

    if(this.messageText.length > 40) {
      arr = this.messageText.split(" ");
      for( let i = 0; i < (Math.floor(arr.length / 2)); i ++) {
        this.firstLine += arr[i] + " ";
      }

      for( let i = (Math.floor(arr.length / 2)); i < arr.length; i ++) {
        this.secondLine += arr[i] + " ";
      }
     
     ctx.fillText(this.firstLine , canvas.width - 335, 30);
     ctx.fillText(this.secondLine, canvas.width - 335, 50);
     
     this.firstLine = "";
     this.secondLine = "";
    } else {
     ctx.fillText(this.messageText , canvas.width - 335, 30);
    }
  }

};


export function drawMenu(dt){
    
    ctx.beginPath();
    ctx.rect( 10, 10, 230, 25);
    ctx.fillStyle = '#02061a';
    ctx.fill();
    ctx.closePath();


    ctx.beginPath();
    ctx.rect( 10, 45, 230, 25);
    ctx.fillStyle = '#02061a';
    ctx.fill();
    ctx.closePath();

    
    ctx.beginPath();
    ctx.rect( 10, 80, 230, 25);
    ctx.fillStyle = '#02061a';
    ctx.fill();
    ctx.closePath();


    ctx.beginPath();
    ctx.rect( 10, 120, 230, 25);
    ctx.fillStyle = '#02061a';
    ctx.fill();
    ctx.closePath();
   

   ctx.drawImage(gun, 0, 0, 1200, 750, 100, 10, 50, 31 );
   ctx.drawImage(speed, 0, 0, 512, 512, 15, 40, 35, 35 ); 
   ctx.drawImage(clock, 0, 0, 300, 300, 15, 80, 35, 35); 
   ctx.drawImage(playButton, 0, 0, 368, 368, 100, 117, 40, 40 );
   

   ctx.font = '16px Arial';
   ctx.fillStyle = '#ffffff';
   ctx.fillText('Shots:  ' + attributes.shots , 15, 30);

   ctx.font = '16px Arial';
   ctx.fillStyle = '#ffffff';
   ctx.fillText('Score:  ' + attributes.score , 170, 30);

   ctx.font = '16px Arial';
   ctx.fillStyle = '#ffffff';
   ctx.fillText('Speed:  ' + attributes.speed.toFixed(2) + 'km/sec', 80, 65);


   attributes.time = timeParser(dt);
   ctx.fillText('Time:  ' + attributes.time, 80, 100);

  /* ctx.fillText('Play ', 80, 145);*/
    ctx.beginPath();
    ctx.rect( canvas.width - 350, 10, 330, 60);
    ctx.fillStyle = '#02061a';
    ctx.fill();
    ctx.closePath();  

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