var Diameter = 200;
var step = .7;
var newSz;
var X, Y;


function setup() {
  createCanvas(600, 600);
  colorMode(HSB,360,100,100)
  background(40,50,20);
  noFill();
  frameRate(100);
}

function draw() {
   stroke(0,0,0);
   strokeWeight(1/2);
   
   X = mouseX;
   Y = mouseY;
   rect(X,Y, 5, 5);  
  
 fill(X,50,50)
 rect(X, Y, X, Y);
  
  noStroke()
  fill(247, 185, 14)
 ellipse (300,300,90,90)
  fill(X,50,50)
  ellipse(600,300,90, 90);  
  ellipse(600,600,90, 90);  
  ellipse(0,300,90, 90);  
  ellipse(0,600,90, 90);
  ellipse(600,0,90, 90);  
  ellipse(300,300,90,90);
  ellipse(0,0,90,90);
  noFill(0,0,0)
   
  var fullSpectra = (X/width)*360;
  var fullBrightness = 100-(Y/height)*100;
  fill(fullSpectra,100,fullBrightness)
  ellipse(300,300, 100, 100); 
 
fill(0,0,255); 
textSize(32);
text('many things are awful',10,30)
text('and inalterable',10, 60);
text('but almost everything else is', 10, 90);
text('rainbows and sunshine,', 10, 120);
text('sunshine,', 180,150);
text('sunshine!!', 280,180);


  
}