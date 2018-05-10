var img;
var bac;
var cirX=230;
var cirY;

function preload(){
    bac = loadImage("bac.jpg");
    img = loadImage("sun.jpg");
}

function setup() {
  
  createCanvas(780,300);
  image(img,390,0,390,300);
  image(bac,0,0,390,300);
  keyPressed();
  
}

function dr(){
  noStroke();
  image(bac,0,0,390,300);
  fill(255,60,0,150);
  ellipse(cirX,95,15,15);
  
  fill(255,60,0,70);
  rect(cirX-9,150,20,70);
  
}

function draw(){
  dr();
}

function keyPressed(){
    if(keyCode == RIGHT_ARROW ){cirX+=2;}
    if(keyCode == LEFT_ARROW ){cirX-=2;}
  }
