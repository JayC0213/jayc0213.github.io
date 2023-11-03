////////////////////////////// 1 /////////////////

function intro()  {


    this.setup = function() {
      console.log("Welcome to the Final Project");
      
    }

    this.enter = function()  {
      console.log("Say Hello to Blob");
      background("black");
      blob.visible = false;

      if (snd2.isPlaying()) {
        snd2.pause();

      } else {
        snd2.play();
      }

    }

    this.draw = function()
    {
        push();
        textAlign(CENTER);
        textSize(50);
        image(offi, width/2-481, height/2-321);
        image(cha, 100, 200, 500,400);
        translate(width/2,height/2);
        fill(0);
        rect(0,-280, 400,200);
        fill(255);
        text("Blob The Helper", 200, -200);
        fill(10,30);
        text("Blob The Helper", 204, -204);
        textSize(30);
        fill(255);
        text("Click to Continue", 200, -150);
        pop();

    }

    this.mousePressed = function() {

        if (snd3.isPlaying()) {

            snd3.pause();

        } else {
            snd3.play();

        }

        this.sceneManager.showNextScene();
    }
  }

///////////////////////  2  ////////////////////////

function howTo()  {

  this.setup = function() {
      background(150, 75.3, 79.6);
      console.log("Instructions");
  }

  this.enter = function()
  {
      console.log("Learn how to use this program");
      blob.visible = false;
  }

  this.draw = function() {

    
    textSize(50);
    fill(255);
    text("How to use Blob:", width/2-185, height/2-200);
    fill(10,30);
    text("How to use Blob:", width/2-187, height/2-202);
    
    textSize(30);
    fill(255);
    text("1. Choose a scene of your choosing with different activties", width/2-400, height/2-100);
    fill(10,30);
    text("1. Choose a scene of your choosing with different activties", width/2-402, height/2-102);
    
    textSize(25);
    fill(255);
    text("2. Can choose a prompt of your choice and will generate an answer for you to do", width/2-450, height/2);
    fill(10,30);
    text("2. Can choose a prompt of your choice and will generate an answer for you to do", width/2-452, height/2-2);
    
    textSize(30);
    fill(255);
    text("3. Each scene either consist of Inside, Outside, or Random activities", width/2-450, height/2+100);
    fill(10,30);
    text("3. Each scene either consist of Inside, Outside, or Random activities", width/2-452, height/2+102);

    textSize(25);
    rect(width/2-320, height/2+120, 600,150);
    fill(255);
    text("Click to Continue", width/2-110, height/2+200);


    
  }

  this.mousePressed = function() {

    if (snd3.isPlaying()) {

        snd3.pause();

    } else {
        snd3.play();

    }

    this.sceneManager.showNextScene();
}

}

////////////////////////////// 3 /////////////////

function howTo2() {
  this.setup = function() {
    background(150, 75.3, 79.6);
    console.log("Instructions Part 2");
}

this.enter = function() {
    console.log("About this program");
    blob.visible = false;
}

this.draw = function () {

  textSize(50);
    fill(255);
    text("About this program", width/2-195, height/2-200);
    fill(10,30);
    text("About this program", width/2-197, height/2-202);

    textSize(30);
    fill(255);
    text("This program was designed for those who have no idea what", width/2-400, height/2-100);
    fill(10,30);
    text("This program was designed for those who have no idea what", width/2-402, height/2-102);
    fill(255);
    text("they want to do for the day. Feel free to check around", width/2-400, height/2-50);
    fill(10,30);
    text("they want to do for the day. Feel free to check around", width/2-402, height/2-52);
    fill(255);
    text("and see if what you feel like doing for the day!", width/2-400, height/2);
    fill(10,30);
    text("and see if what you feel like doing for the day!", width/2-402, height/2-2);

    textSize(25);
    rect(width/2-320, height/2+120, 600,150);
    fill(255);
    text("To select which scene to choose, press:", width/2-252, height/2+160);
    text("4. Indoor activties", width/2-252, height/2+190);
    text("5. Outdoor activties", width/2-252, height/2+220);
    text("6/o/O. Family/Friends activties", width/2-252, height/2+250);
}

this.mousePressed = function() {

  if (snd3.isPlaying()) {

      snd3.pause();

  } else {
      snd3.play();

  }

  this.sceneManager.showNextScene();
}

}



////////////////////////////// 4 /////////////////

function scene4() {

  let chore = false;
  let act = false;
  let ran = false;

  this.setup = function()  {
      createCanvas(962,642)
      myButton = new Button({
        x: width/2+300, y: height/2-200,
        width: 200, height: 50,
        align_x: 0, align_y: 0,
        content: 'Chores',
        style_default: {
          background: 'red',
          color: 'white',
        },
        style_hover: {
          background: '#FAC3D74F',
          color: 'white',
        },
        on_press() {
          chore = !chore;
          snd1.play();
        }
      });
      myButton2 = new Button({
        x: width/2+300, y: height/2,
        width: 200, height: 50,
        align_x: 0, align_y: 0,
        content: 'Activities',
        style_default: {
          background: 'blue',
          color: 'white',
        },
        style_hover: {
          background: '#6C85F54F',
          color: 'white',
        },
        on_press() {
          act = !act;
          snd1.play();
        }
      });
      myButton3 = new Button({
        x: width/2+300, y: height/2+200,
        width: 200, height: 50,
        align_x: 0, align_y: 0,
        content: 'Random',
        style_default: {
          background: 'green',
          color: 'white',
        },
        style_hover: {
          background: '#BCF9CB4F',
          color: 'white',
        },
        on_press() {
          ran = !ran;
          snd1.play();
        }
      });

    }

    this.enter = function(){
      blob.visible = true;
    }
    
    this.draw = function() {
      
      clear();
      image(home,0,-100,1000,800);

      if (chore) {
        fill(0);
        rect(width/2-65, height/2-100, 230,230);
        textSize(25);
        fill(255);
        text("Go do your Laundry", width/2+50,height/2-50);
        text("OR", width/2+50,height/2);
        text("Go clean your room", width/2+50,height/2+50);
        }
      if (act) {
        fill(0);
        rect(width/2-65, height/2-100, 230,230);
        textSize(25);
        fill(255);
        text("Read a book", width/2+50,height/2-50);
        text("OR", width/2+50,height/2);
        text("Exercise", width/2+50,height/2+50);
        }
      if (ran) {
        fill(0);
        rect(width/2-65, height/2-100, 230,230);
        textSize(25);
        fill(255);
        text("Go clean your room", width/2+50,height/2-50);
        text("OR", width/2+50,height/2);
        text("Read a book", width/2+50,height/2+50);
        }
      
      myButton.draw();
      myButton2.draw();
      myButton3.draw();

      fill(255)
      stroke(2);
      ellipse(230,230,15,15);
      stroke(2);
      ellipse(200,200,30,20);
      stroke(2);
      ellipse(130,120,200,150);
      textSize(20);
      fill(0);
      text("Choose an option",130,110);
      text("and I'll answer!",130,130);

    }

    

}


////////////////////////////// 5 /////////////////

function scene5() {

  let out = false;
  let act1 = false;
  let ran1 = false;

  this.setup = function()  {
      createCanvas(962,642)
      myButton4 = new Button({
        x: width/2-300, y: height/2-200,
        width: 200, height: 50,
        align_x: 0, align_y: 0,
        content: 'Outside Exercise',
        style_default: {
          background: 'yellow',
          color: 'black',
        },
        style_hover: {
          background: '#E6F5894F',
          color: 'black',
        },
        on_press() {
          out = !out;
          snd1.play();
        }
      });
      myButton5 = new Button({
        x: width/2, y: height/2-200,
        width: 200, height: 50,
        align_x: 0, align_y: 0,
        content: 'Outside Activities',
        style_default: {
          background: '#F0B8AF',
          color: 'black',
        },
        style_hover: {
          background: '#F0B8AF4F',
          color: 'black',
        },
        on_press() {
          act1 = !act1;
          snd1.play();
        }
      });
      myButton6 = new Button({
        x: width/2+300, y: height/2-200,
        width: 200, height: 50,
        align_x: 0, align_y: 0,
        content: 'Random',
        style_default: {
          background: '#35FA36',
          color: 'black',
        },
        style_hover: {
          background: '#35FA364F',
          color: 'black',
        },
        on_press() {
          ran1 = !ran1;
          snd1.play();
        }
      });
    }

    this.enter = function(){
      blob.visible = true;
    }
    
    this.draw = function() {
      
      image(outs,0,-100,1000,800);

      if (out) {
        fill(0);
        rect(width/2+100,height/2+55,300,200);
        textSize(25);
        fill(255);
        text("Go for a walk/run", width/2+250,height/2+100);
        text("OR", width/2+250,height/2+150);
        text("Play your favorite sport", width/2+250,height/2+200);
        }
      if (act1) {
        fill(0);
        rect(width/2+100,height/2+55,300,200);
        textSize(25);
        fill(255);
        text("Ride your bike/skateboard", width/2+250,height/2+100);
        text("OR", width/2+250,height/2+150);
        text("Try to do some Gardening", width/2+250,height/2+200);
        }
      if (ran1) {
        fill(0);
        rect(width/2+100,height/2+55,300,200);
        textSize(25);
        fill(255);
        text("Play your favorite sport", width/2+250,height/2+100);
        text("OR", width/2+250,height/2+150);
        text("Ride your bike/skateboard", width/2+250,height/2+200);
        }
      
      myButton4.draw();
      myButton5.draw();
      myButton6.draw();

      fill(255);
      stroke(2);
      ellipse(300,400,15,15);
      ellipse(320,360,30,15);
      ellipse(430,290,200,150);
      fill(0);
      textSize(20);
      text("Choose an option",430,280);
      text("and I'll answer!",430,300);

    }

}

////////////////////////////// 6 /////////////////

function scene6() {

  let fri = false;
  let fam = false;
  let ran2 = false;

  this.setup = function()  {
      createCanvas(962,642)
      myButton7 = new Button({
        x: width/2+300, y: height/2-200,
        width: 200, height: 50,
        align_x: 0, align_y: 0,
        content: 'With Friends',
        style_default: {
          background: '#BE7DF5',
          color: 'black',
        },
        style_hover: {
          background: '#BE7DF54F',
          color: 'black',
        },
        on_press() {
          fri = !fri;
          snd1.play();
        }
      });
      myButton8 = new Button({
        x: width/2+300, y: height/2,
        width: 200, height: 50,
        align_x: 0, align_y: 0,
        content: 'With Family',
        style_default: {
          background: '#FA6447',
          color: 'black',
        },
        style_hover: {
          background: '#FA64474F',
          color: 'black',
        },
        on_press() {
          fam = !fam;
          snd1.play();
        }
      });
      myButton9 = new Button({
        x: width/2+300, y: height/2+200,
        width: 200, height: 50,
        align_x: 0, align_y: 0,
        content: 'Random',
        style_default: {
          background: '#8AAFF5',
          color: 'black',
        },
        style_hover: {
          background: '#8AAFF54F',
          color: 'black',
        },
        on_press() {
          ran2 = !ran2;
          snd1.play();
        }
      });
    }

    this.enter = function(){
      blob.visible = true;
    }
    
    this.draw = function() {
      
      image(fami,0,-100,1000,800);

      if (fri) {
        fill(0);
        rect(width/2-65, height/2-100, 230,230);
        textSize(25);
        fill(255);
        text("Hang out somewhere", width/2+50,height/2-50);
        text("OR", width/2+50,height/2);
        text("Invite to your home", width/2+50,height/2+50);
      }
      if (fam) {
        fill(0);
        rect(width/2-65, height/2-100, 230,230);
        textSize(25);
        fill(255);
        text("Watch a movie", width/2+50,height/2-50);
        text("OR", width/2+50,height/2);
        text("Go out for dinner", width/2+50,height/2+50);
        }
      if (ran2) {
        fill(0);
        rect(width/2-69, height/2-100, 240,230);
        textSize(25);
        fill(255);
        text("Hangout somewhere", width/2+50,height/2-50);
        text("OR", width/2+50,height/2);
        text("Watch a movie", width/2+50,height/2+50);
          }
      
      myButton7.draw();
      myButton8.draw();
      myButton9.draw();

      fill(255);
      stroke(2);
      ellipse(300,380,15,15);
      ellipse(320,320,15,15);
      ellipse(280,250,15,15);
      ellipse(200,180,200,150);

      fill(0);
      textSize(20);
      text("Choose an option",200,170);
      text("and I'll answer!",200,190);
      
    }

}