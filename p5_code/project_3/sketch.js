

let wu;
let lu;
let stu;
let brk;
let din;
let gt;
let gn;

function setup() {
  createCanvas(1000,1500);
  background(20);
  fill(255,0,0);
  textSize(20);

  wu = loadImage("assets/wakeup.jpg");
  lu = loadImage("assets/lunch.jpg");
  stu = loadImage("assets/study.jpg");
  din = loadImage("assets/dinner.jpg");
  brk = loadImage("assets/break.jpg");
  gt = loadImage("assets/break2.jpg");
  gn = loadImage("assets/goodnight.jpg");

}


function draw() {

  let h = hour();
  let m = minute();  
  let s = second();
  

  if (h > 6 && h < 17) { // daytime
    background(0, 150, 255);
    textSize(40);
    text("Daylight", 555,200);
    ellipse(625,370,200,200);
    fill(255,255,0);
      if ( h >= 7 && h <= 8 ) {
        push();
        textSize(50);
        fill(0);
        text("Wake Up!!", 500,830);
        image(wu, 460,860,300,400);
        pop();
      }
      if ( h >= 12 && h <= 13 ) {
        push();
        textSize(50);
        fill(0);
        text("Lunch Time!!", 500,830);
        image(lu, 460,860,300,400);
        pop();
      }
      if ( h >= 14 && h <= 16 ) {
        push();
        textSize(50);
        fill(0);
        text("Study/HW Time!!", 440,830);
        image(stu, 410,860,450,400);
        pop();
      }
  }
  
  else { // nighttime
    background(10,0,45);
    noStroke();
    textSize(50);
    text("Night Time", 505,200);
    ellipse(640,370,200,200);
    fill(10,0,45);
    ellipse(690,350,200,200);
    fill(255,255,0);
      if ( h >= 17 && h <= 18 ) {
        push();
        textSize(50);
        fill(255);
        text("Break Time!!", 490,830);
        image(brk, 410,860,450,400);
        pop();
    }
      if ( h >= 19 && h <= 20 ) {
        push();
        textSize(50);
        fill(255);
        text("Dinner Time!!", 490,830);
        image(din, 410,860,450,400);
        pop();
    }
      if ( h >= 21 && h <= 22 ) {
        push();
        textSize(50);
        fill(255);
        text("Gaming Time!!", 490,830);
        image(gt, 410,860,450,400);
        pop();
    }
      if ( h >= 23 && h <= 24 ) {
        push();
        textSize(50);
        fill(255);
        text("Sleep Time!!", 490,830);
        image(gn, 410,860,450,400);
        pop();
    }

  }

  push(); //display of hours bar
  let mh = map(h,0,23.1,0,width);
  translate(width/2-295,height/2+500);
  rotate(-89.53);
  scale(1);
  fill(100);
  rect(0,30,mh,40);
  pop();

  push(); // display of minutes bar
  let mm = map(m,0,60,0,width);
  translate(width/2-380,height/2+500);
  rotate(-89.53);
  fill(150);
  rect(0,30,mm,40);
  pop();

  push(); // display of seconds bar
  let ms = map(s,0,60,0,width);
  translate(width/2-470,height/2+500);
  rotate(-89.53);
  fill(255);
  rect(0,30,ms,40);
  pop();

  // phone screen

  push();
  fill(255);
  noStroke();
  rect(width/2+-500, height/2-650, 1000, 10);
  pop();

  push();
  fill(255);
  noStroke();
  rect(width/2-500, height/2+600, 1000, 10);
  pop();

  // Day/Night Time UI Box

  push();
  fill(255);
  noStroke();
  rotate(29.85);
  rect(width/2-1000, height/2-250, 250, 10);
  pop();

  push();
  fill(255);
  noStroke();
  rotate(29.85);
  rect(width/2-1000, height/2-250, 10, 250);
  pop();

  push();
  fill(255);
  noStroke();
  rotate(29.85);
  rect(width/2-1000, height/2-10, 250, 10);
  pop();

  push();
  fill(255);
  noStroke();
  rotate(29.85);
  rect(width/2-750, height/2-250, 10, 250);
  pop();

  // apps

  push();
  fill(255);
  stroke(50);
  rect(350,600,100,100);
  textSize(30);
  fill(0);
  stroke(50);
  text("Food", 365, 645);
  text("List", 365, 675);
  pop();
  
  push();
  textSize(30);
  fill(255);
  rect(500,600,100,100);
  textSize(30);
  fill(0);
  stroke(50);
  text("Games", 501, 655);
  pop();

  push();
  fill(255);
  rect(650,600,100,100);
  textSize(30);
  fill(0);
  stroke(50);
  text("Music", 660, 655);
  pop();

  push();
  fill(255);
  rect(800,600,100,100);
  textSize(25);
  fill(0);
  stroke(50);
  text("Workout", 803, 655);
  pop();

  // Extra little UI Designs

  push();
  fill(255);
  noStroke();
  ellipse(500,1450,400,10);
  pop();

  push();
  fill(255);
  noStroke();
  rect(300,0,400,50);
  pop();

  push();
  fill(255);
  noStroke();
  rotate(radians(60));
  ellipse(167,-245,60,40);
  pop();

  push();
  fill(255);
  noStroke();
  rotate(radians(100));
  ellipse(-102,-697,60,40);
  pop();

  push();
  fill(0);
  noStroke();
  ellipse(500,20,200,10);
  pop();

  push();
  fill(255);
  noStroke();
  rotate(29.85);
  rect(width/2-1800, height/2-400, 550, 10);
  pop();

  push();
  fill(255);
  noStroke();
  rotate(29.85);
  rect(width/2-1800, height/2+160, 550, 10);
  pop();

  push();
  fill(255);
  noStroke();
  rotate(29.85);
  rect(width/2-1800, height/2-400, 10, 570);
  pop();

  push();
  fill(255);
  noStroke();
  rotate(29.85);
  rect(width/2-1255, height/2-400, 10, 570);
  pop();

  // Serive Bars

  push();
  noStroke();
  fill(255);
  rect(930, 40, 10,10);
  rect(945, 50, 10,-20);
  rect(960, 50, 10,-30);
  rect(975, 50, 10,-40);
  pop();

  // Bars for the time

  push();
  fill(255);
  noStroke();
  rect(width/2-470, height/2+520, 270, 10);
  rect(width/2-470, height/2-540, 270, 10);
  rect(width/2-470, height/2+520, 10, -1050);
  rect(width/2-210, height/2+520, 10, -1050);
  rect(width/2-290, height/2+520, 10, -1050);
  rect(width/2-380, height/2+520, 10, -1050);
  pop();


}