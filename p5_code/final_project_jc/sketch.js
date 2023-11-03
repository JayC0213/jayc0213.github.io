

let snd1,snd2,snd3,cha,offi,cha1,home,outs,fami;
let jcm;
let cnv;
let blob;

function preload() {

  snd1 = loadSound("assets/hoversound.mp3");
  snd2 = loadSound("assets/chill.mp3");
  snd3 = loadSound("assets/pageflip.mp3")
  offi = loadImage("assets/office.png");
  home = loadImage("assets/indoor.jpg");
  outs = loadImage("assets/outdoor.jpg");
  fami = loadImage("assets/fam.jpg");
  cha = loadImage("assets/blob_stand0001.png");
  cha1 = loadImage("assets/blob_point0002.png");

}

function setup() {
cnv  =  createCanvas(962,642);
  angleMode(DEGREES);
  cnv.mousePressed(setupSound);
    jcm = new SceneManager();
    jcm.addScene (intro);
    jcm.addScene (howTo);
    jcm.addScene (howTo2);
    jcm.addScene (scene4);
    jcm.addScene (scene5);
    jcm.addScene (scene6);
    jcm.showNextScene();

    blob = new Sprite(width/2+150,height/2-220);
    blob.addAni('point', 'assets/blob_point0002.png', 3);
    blob.visible = false;

}

function setupSound() {
    
    userStartAudio();
}


function draw()
{
    jcm.draw();
}

function mousePressed()
{
   
  jcm.mousePressed();
}

 function mouseMoved()
 {
   
//    jcm.handleEvent("mouseMoved");
}

function mouseDragged()
{
   
    jcm.handleEvent("mouseDragged");
}

function keyPressed()
{
    switch(key)
    {
        case '1':
            jcm.showScene( intro );
            break;
        case '2':
            jcm.showScene( howTo );
            break;
        case '3':
            jcm.showScene( howTo2 );
            break;
        case '4':
            jcm.showScene( scene4 );
            break;
        case '5':
            jcm.showScene( scene5 );
            break;
        case '6':
            jcm.showScene( scene6 );
            break;
        case 'o':
            jcm.showScene( scene6 );
            break; 
        case 'O':
            jcm.showScene( scene6 );
            break; 
    }
    jcm.keyPressed();
}
