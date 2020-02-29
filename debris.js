var canvas;
let coral;
let bubbles=[];
let bubble
let peach;
let j=0;
let mySound;

function preload() {
    // Load model with normalise parameter set to true
    coral = loadModel('debris.obj', true);
    tire=loadModel('bananas.obj', true);
   apple=loadModel('apple.obj', true);
   can=loadModel('konserva.obj', true);
   cocacola=loadModel('Bottle_001.obj', true);
  bag=loadModel('Garbage Bag obj.obj', true);
  grass=loadModel('grass1.obj', true);
    glitter = loadImage('concretedark.jpg');
    console.log('loaded')
    soundFormats('mp3', 'ogg');
    mySound = loadSound('syntrimia sthn kardia mou.mp3');
  }

function setup(){
    let canvas= createCanvas(windowWidth,windowHeight,WEBGL);
    //textureMode(IMAGE);
    //textureWrap(MIRROR);


   //ortho(-width, width, height, -height/2, 0.1, 100);
  }


  function draw(){
    clear();
   background(30);
    angleMode(DEGREES);
   ambientLight(255);
  //  camera(0, 0, 800 + sin(frameCount * 0.1) * 10, 0, 0, 0, 0, 1, 0);
// texture(debrisimg);

// plane(windowWidth*3,windowHeight*3);
// translate(0,0,800);
    pointLight(255,mouseX,mouseY);
  //directionalLight(255,600,200,0);
  // rotateX(200);
  noStroke();
orbitControl();
rotateX(90);
texture(glitter);

//debris
push();
scale(5);
 translate(-50,0,0)
model(coral);
pop();

//debris
push();
scale(5);
 translate(50,0,0);
 rotateY(30);
model(coral);
pop();

//debris
push();
scale(5);
 translate(0,0,150);
 rotateY(30);
model(coral);
pop();
//debris
push();
scale(5);
 translate(250,0,0);
 rotateY(30);
model(coral);
pop();
//debris
push();
scale(5);
 translate(50,0,300);
 rotateY(30);
model(coral);
pop();
//debris
push();
scale(5);
 translate(50,0,-100);
 rotateY(30);
model(coral);
pop();
//debris
push();
scale(5);
 translate(150,0,-100);
 rotateY(30);
model(coral);
pop();
//debris
push();
scale(5);
 translate(80,0,200);
 rotateY(30);
model(coral);
pop();
//debris
push();
scale(5);
 translate(150,0,100);
 rotateY(30);
model(coral);
pop();
//debris
push();
scale(5);
 translate(-100,0,200);
 rotateY(30);
model(coral);
pop();
//debris
push();
scale(5);
 translate(-180,0,100);
 rotateY(30);
model(coral);
pop();

//debris
push();
scale(5);
 translate(-180,0,-100);
 rotateY(30);
model(coral);
pop();

//debris
push();
scale(5);
 translate(-80,0,-150);
 rotateY(30);
model(coral);
pop();

//debris
push();
scale(5);
 translate(80,0,-200);
 rotateY(30);
model(coral);
pop();

//debris
push();
scale(5);
 translate(-180,0,-250);
 rotateY(30);
model(coral);
pop();

//debris
push();
scale(5);
 translate(-300,0,-200);
 rotateY(30);
model(coral);
pop();

//debris
push();
scale(5);
 translate(-300,0,-50);
 rotateY(30);
model(coral);
pop();

//debris
push();
scale(5);
 translate(-300,0,100);
 rotateY(30);
model(coral);
pop();

//debris
push();
scale(5);
 translate(-30,0,-250);
 rotateY(30);
model(coral);
pop();

//debris
push();
scale(5);
 translate(150,0,-250);
 rotateY(30);
model(coral);
pop();

//debris
push();
scale(5);
 translate(-150,0,250);
 rotateY(30);
model(coral);
pop();

//debris
push();
scale(5);
 translate(200,0,300);
 rotateY(30);
model(coral);
pop();

//debris
push();
scale(5);
 translate(200,0,-150);
 rotateY(30);
model(coral);
pop();

//debris
push();
scale(5);
 translate(300,0,150);
 rotateY(30);
model(coral);
pop();


//banana
push();
specularMaterial(174,151,115);
scale(0.3);
model(tire);
pop();

//apple
push();
specularMaterial(30,0,0);
translate(-50,0,300);
scale(0.2);
model(apple);
pop();

//can
push();
specularMaterial(50);
translate(100,0,-200);
scale(0.2);
rotateX(30);
model(can);
pop();

//cola
push();
specularMaterial(0,20,0);
translate(-100,0,-200);
scale(0.3);
rotateX(80);
model(cocacola);
pop();

////////////////////sakoula
push();
specularMaterial(10);
translate(-300,0,300);
scale(0.5);
rotateX(10);
model(bag);
pop();

//sakoula
push();
specularMaterial(20);
translate(100,0,30);
scale(0.5);
rotateX(10);
model(bag);
pop();

//sakoula
push();
specularMaterial(30);
translate(230,0,320);
scale(0.5);
rotateX(-30);
rotateY(-30);

model(bag);
pop();

//sakoula
push();

translate(150,-10,260);
scale(0.5);
rotateX(-40);
model(bag);
pop();

//sakoula
push();

translate(-200,-10,300);
scale(0.5);
rotateX(-40);
model(bag);
pop();

//sakoula
push();

translate(-300,-10,900);
scale(0.5);
rotateX(-40);
model(bag);
pop();

//sakoula
push();
translate(-600,-10,1000);
scale(0.5);
rotateX(-40);
model(bag);
pop();

//sakoula
push();
translate(-600,-10,-1000);
scale(0.5);
rotateX(-40);
model(bag);
pop();

//sakoula
push();
translate(-500,-10,-800);
scale(0.5);
rotateX(-40);
model(bag);
pop();

//sakoula
push();
translate(500,-10,-800);
scale(0.5);
rotateX(-40);
model(bag);
pop();

//sakoula
push();
translate(400,-10,-400);
scale(0.5);
rotateX(-40);
model(bag);
pop();

//sakoula
push();
translate(500,-10,300);
scale(0.5);
rotateX(-40);
model(bag);
pop();

//sakoula
push();
translate(400,-10,800);
scale(0.5);
rotateX(-40);
model(bag);
pop();

//sakoula
push();
translate(800,-10,1200);
scale(0.5);
rotateX(-40);
model(bag);
pop();

//sakoula
push();
translate(-1000,-10,-700);
scale(0.5);
rotateX(-40);
model(bag);
pop();

//sakoula
push();
translate(-1000,-10,500);
scale(0.5);
rotateX(-40);
model(bag);
pop();

//sakoula
push();
translate(1000,-10,500);
scale(0.5);
rotateX(-40);
model(bag);
pop();

//sakoula
push();
translate(500,-10,-500);
scale(0.5);
rotateX(-40);
model(bag);
pop();

for(i=0; i<7; i++){
//grass
push();
specularMaterial(0,20,0);
translate(0,10,100);
// scale(3);
rotateY(sin(frameCount*0.5) * 10);
rotateX(270);
model(grass);
pop();
/////////grammh
//grass
push();
specularMaterial(0,20,0);
translate(-300*i,10,-100);
// scale(3);
rotateX(270);
rotateX(sin(frameCount*0.8) * 10);
model(grass);
pop();

//grass
push();
specularMaterial(0,20,0);
translate(300*i,10,-100);
// scale(3);
rotateX(270);
rotateX(sin(frameCount*0.8) * 10);
model(grass);
pop();
/////////////grammh

//grass
push();
specularMaterial(0,20,0);
translate(-300*i,10,-400);
// scale(3);
rotateX(270);
rotateX(sin(frameCount*0.8) * 10);
model(grass);
pop();


push();
translate(300*i,10,-400);
// scale(3);
specularMaterial(0,20,0);

rotateX(270);
rotateX(sin(frameCount*0.8) * 10);
model(grass);
pop();

//grass
push();
translate(-300*i,10,-700);
specularMaterial(0,20,0);
rotateX(270);
rotateX(sin(frameCount*0.8) * 10);
model(grass);
pop();


push();
translate(300*i,10,-700);
specularMaterial(0,20,0);
rotateX(270);
rotateX(sin(frameCount*0.8) * 10);
model(grass);
pop();


//grass
push();
translate(-300*i,10,500);
specularMaterial(0,20,0);
rotateX(270);
rotateX(sin(frameCount*0.8) * 10);
model(grass);
pop();


push();
translate(300*i,10,500);
specularMaterial(0,20,0);
rotateX(270);
rotateX(sin(frameCount*0.8) * 10);
model(grass);
pop();


//grass
push();
translate(-300*i,10,800);
specularMaterial(0,20,0);
rotateX(270);
rotateX(sin(frameCount*0.8) * 10);
model(grass);
pop();


push();
translate(300*i,10,800);
specularMaterial(0,20,0);
rotateX(270);
rotateX(sin(frameCount*0.8) * 10);
model(grass);
pop();
}

  }


  function mousePressed(){
    j=j+1;
    if (j<2){
    mySound.setVolume(0.4);
    mySound.loop();
  }
  }
