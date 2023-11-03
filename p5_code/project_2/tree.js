// Particle System - https://p5js.org/examples/simulate-particle-system.html

// Recursive Tree - https://p5js.org/examples/simulate-recursive-tree.html


let jcrain;
let recMode = false;
let can;
let r1;
let tree1;
let jcgrowing;

function setup() {

  can = createCanvas(1920, 1080);
  jcrain = new jcRain2(createVector(width / 2, 50));
  r1 = new jcRain(createVector(width / 2, 50));
  jcgrowing = new jcGrowingTree(width/2+100,height-495);
  
}

function draw() {

  background(0,10);
  frameRate(30);
  drawPot();
  r1.jcrun();
  jcrecord();

  let a = (frameCount-500/width)*90;
  jcgrow = radians(a);

    if (frameCount < 500) {
      jcrain.jcaddRain();
      jcrain.jcrun();
    }
  
    else {
      jcgrowing.jctreevisual();
      jcgrowing.jcspread();
    }

}


function drawPot() {
  push();
    stroke(150);
    fill(color(58,29,0));
    rect(800,600,500,400);
    rect(750,600,600,100);
  pop();
}

////////////////////////////////////////////////////////////////////////////////////////////

class jcGrowingTree {

  jcgrow;
  lox;
  loy;

  constructor(lx,ly) {

    this.jcgrow = 0;
    this.lox = lx;
    this.loy = ly;
    
  }

  jctreevisual(jct) {

      this.jcgrow = jct;

    push();
    translate(this.lox,this.loy);
    strokeWeight(15);
    stroke(color(58,29,0));
    line(0,0,0,-120);
    translate(0,-160);
    this.jcspread(frameCount-500);
    console.log("growing");
    pop();

  }

  jcspread(j) {
 
    j *= .66;
  
    
    if (j > 2) {
  
      push();    
      rotate(jcgrow);
      strokeWeight(5);
      stroke(0,255,0);
      fill(58,29,0);   
      ellipse(0, 0, 20, -j);
      translate(0, -j);
      this.jcspread(j)
      pop();     
  
      push();
      rotate(-jcgrow);
      strokeWeight(5);
      stroke(0,255,0);
      fill(58,29,0);
      ellipse(0, 0, 20, -j);
      translate(0, -j);
      this.jcspread(j);
      pop();
    }
    
  }



}

////////////////////////////////////////////////////////////////////////////////////////////

class jcRain  {
  
  constructor(lpos) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-1, 0.01), random(-1, 0));
  this.pos = lpos.copy();
  this.lifespan = 350;
  this.xspeed = random(-5,5);
  this.yspeed = random(-5,5);
  console.log(this.pos.x);
  }


jcrun() {
  this.jcupdate();
  this.jcWaterDisplay();
  this.jcPotDisplay();
  
};

jcupdate(){
  this.velocity.add(this.acceleration);
  this.pos.add(this.velocity);
  this.lifespan -= 2.1;
};

jcWaterDisplay() {

  if (frameCount < 500) {
    push();
    stroke(255,this.lifespan);
    strokeWeight(1);
    fill(0,0,255, this.lifespan);
    ellipse(this.pos.x+100, this.pos.y, 4, 12);
    console.log("regular water");
    pop();
  }

  if (frameCount > 280) {
    push();
    stroke(255,this.lifespan);
    strokeWeight(1);
    fill(255,0,0, this.lifespan);
    ellipse(this.pos.x+150, this.pos.y, 4, 12);
    console.log("huge growing water")
    pop();
  }
  if (frameCount > 380) {
    push();
    stroke(255,this.lifespan);
    strokeWeight(1);
    fill(0,255,0, this.lifespan);
    ellipse(this.pos.x+200, this.pos.y, 4, 12);
    console.log("accidental speed water")
    pop();
  }

  
};

jcPotDisplay() {

  if (frameCount < 500) {

  push();
    translate(50,370);
    rotate(radians(-20));
    fill(150);
    rect(1100,40,300,50);
  pop();

  push();
    stroke(255);
    fill(150);
    translate(250,-600);
    rotate(radians(35));
    ellipse(1100,40,300,50);
  pop();

  }

  console.log("sprinkle the water");

}

jcrepeat() {
  return this.lifespan < 0;
}
}

////////////////////////////////////////////////////////////////////////////////////////////

class jcRain2 {
  constructor(pos) {
    this.origin = pos.copy();
    this.leaves = [];
  }


jcaddRain() {
  this.leaves.push(new jcRain(this.origin));
};

jcrun() {
    for (let i = this.leaves.length-1; i >= 0; i--) {
      let p = this.leaves[i];
     p.jcrun();
      if (p.jcrepeat()) {
        this.leaves.splice(i, 1);
      }
    }
  }
}

////////////////////////////////////////////////////////////////////////////////////////////

function keyPressed() {

  if (keyIsPressed === true) {
      let k = key;
      console.log("k is " + k);

      if (k == 's' || k == 'S') {
          console.log("Stopped Recording");
          recMode = false;
          noLoop();
      }

      if (k == 'a' || k == "A") {
          console.log("Start Recording");
          recMode = true;
          loop();
      }
  }
}

function jcrecord() {  // new version
  if (recMode == true) {
      let ext = nf(frameCount, 4);
      //"frame-0001"
      saveCanvas(can, 'frame-' + ext, 'jpg');
      console.log("rec " + ext);
  }
}