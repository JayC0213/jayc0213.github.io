
let currentkey = '1';
let bgc ;
let rvalue = 0;

function setup() {
    createCanvas(1000, 800);
    background(255);
    smooth();
    bgc = color(255);
}


function draw() {
    
    if(keyIsPressed) {
      clear_print();
    }
    
    if(mouseIsPressed) {
      drawChoice();
    }
}



function drawChoice() {
  let currentkey = key;

switch(currentkey) {
case '1': // blue-pink line
  console.log("1");
 rvalue++;
 if ( rvalue > 255) {
  rvalue = 0;
 }
 jcComplementLine(color(rvalue,156,234), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '2': // violet squares
  console.log("2");
  jcrandrect(color(127, 0, 255), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '3': // amaranth random line (pink)
  console.log("3");
  jcrandline(color(159, 43, 104), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '4': // random ellipses (pink)
  console.log("4");
  jcrandellipse(color(74,104,255), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '5': // eraser
  console.log("5");
  jceraser(bgc,mouseX, mouseY,25);
   break;
default:
  console.log("None");
  break;
}

}

function jcComplementLine( k,  lx, ly,  px, py) {
  
  strokeWeight(10);
  stroke(k);
  line(lx, ly, px, py);
  console.log(mouseX);
  console.log(pmouseX);
}

function jcrandrect( k,  lx, ly,  px, py) {
  
  strokeWeight(random(7,15));
  stroke(k);
  rect(lx, ly, random(3,15),random(3,15));
  console.log(mouseX);
  console.log(pmouseX);
}

function jcrandline( k,  lx, ly,  px, py) {
  
  strokeWeight(random(7,15));
  stroke(k);
  line(lx, ly, px, py);
  console.log(mouseX);
  console.log(pmouseX);
}

function jcrandellipse( k,  lx, ly,  px, py) {
  
  fill(k);
  ellipse(lx, ly, random(15,30), random(15,30));
  fill(255,192,203); // pink
  ellipse(lx, ly, random(7,15), random(7,15));
  console.log(mouseX);
  console.log(pmouseX);
}

function jceraser( k, lx, ly, sz) {
  fill(k);
  stroke(k);
  ellipse(lx, ly, 30,30);
}

function clear_print() {

  if (key == '-' || key == '_') {
    background(255);
  } else if (key == 'r' || key == 'R') {
    saveFrames('image-0', 'png', 1, 1);
    key = '';
  }

}

