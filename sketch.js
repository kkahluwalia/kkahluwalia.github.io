var diameter; 
var Counter = 0;
H = 600;
W = 600

var img;
function preload() {
  img = loadImage ('assets/Saif2.jpg');
  song = loadSound('assets/Fitzpleasure.mp3');
}
function setup() {
    song.play(); 

  angleMode(DEGREES);
 // colorMode(HSB,80,100,100)
  createCanvas(500, 500);
  frameRate(20)
  noStroke();
 
 image(img, 0, 0, 500, 500);
 
   tint(255, 10);

}

function draw() {
  
 // background(0);
  fill(255,255,255,10)
 image(img, 0, 0, 500, 500);
  textSize(18);
  fill(226, 140, 224);
  noStroke();
  
  textSize(16);
text('SadBoySaif', 10, 30);
text('SadBoySaif', 10, 60);
text('SadBoySaif  SadBoySaif', 10, 90);
text('SadBoySaif  SadBoySaif', 10, 120);
text('SadBoySaif  SadBoySaif', 10, 150);
text('SadBoySaif  SadBoySaif', 10, 180);
text('SadBoySaif  SadBoySaif', 10, 210);
text('SadBoySaif  SadBoySaif', 10, 240);
text('SadBoySaif  SadBoySaif', 10, 270);
text('SadBoySaif  SadBoySaif', 10, 300);
text('SadBoySaif  SadBoySaif', 10, 330);
text('SadBoySaif  SadBoy', 10, 360);
text('SadBoySaif  SadBo', 10, 390);
text('SadBoySaif  SadB', 10, 420);
text('SadBoySaif  S', 10, 450);
text('SadBoySaif  ', 10, 480);
fill(0, 102, 153, 40);


  var y0 =  SineWave(Counter,height/2,.6*height/2,.5,0)
  var y1 =  SineWave(Counter,height/2,.6*height/2,1,0)
  var y2 =  SineWave(Counter,height/2,.6*height/2,1.5,0)
  var y3 =  SineWave(Counter,height/2,.6*height/2,2.0,0)
  var y4 =  SineWave(Counter,height/2,.6*height/2,2.5,0)
  var y5 =  SineWave(Counter,height/2,.6*height/2,3.0,0)
  var y6 =  SineWave(Counter,height/2,.6*height/2,3.5,0)
  
  var x0 =  SineWave(Counter,height/2,.6*height/2,.5,0)
  var x1 =  SineWave(Counter,height/2,.6*height/2,1,0)
  var x2 =  SineWave(Counter,height/2,.6*height/2,1.5,0)
  var x3 =  SineWave(Counter,height/2,.6*height/2,2.0,0)
  var x4 =  SineWave(Counter,height/2,.6*height/2,2.5,0)
  var x5 =  SineWave(Counter,height/2,.6*height/2,3.0,0)
  var x6 =  SineWave(Counter,height/2,.6*height/2,3.5,0)


  var XposStep = width/8;
fill(226, 100, 224),ellipse(1*XposStep, y0, 20, 20);
    fill(226, 140, 224),ellipse(1*XposStep, y0/2, 10, 10);
    fill(226, 140, 224),ellipse(1*XposStep, y0/4, 30, 30);
    
fill(226, 100, 224),ellipse(2*XposStep, y1, 20, 20);
    fill(226, 140, 224),ellipse(2*XposStep, y1/2, 10, 10);
        fill(226, 140, 224),ellipse(2*XposStep, y1/4, 30, 30);

fill(226, 100, 224),ellipse(3*XposStep, y2, 20, 20);
  fill(226, 140, 224),ellipse(3*XposStep, y2/2, 10, 10);
      fill(226, 140, 224),ellipse(3*XposStep, y2/4, 30, 30);

fill(226, 100, 224),ellipse(4*XposStep, y3, 20, 20);
  fill(226, 140, 224),ellipse(4*XposStep, y3/2, 10, 10);
      fill(226, 140, 224),ellipse(4*XposStep, y3/4, 30, 30);

fill(226, 100, 224, 60),ellipse(5*XposStep, y4, 20, 20);
  fill(226, 140, 224),ellipse(5*XposStep, y4/2, 10, 10);
      fill(56, 27, 153, 50),ellipse(5*XposStep, y4/4, 30, 30);

fill(226, 100, 224, 60),ellipse(6*XposStep, y5, 20, 20);
  fill(56, 27, 153, 50),ellipse(6*XposStep, y5/2, 10, 10);
      fill(56, 27, 153, 50),ellipse(6*XposStep, y5/4, 30, 30);

fill(226, 100, 224, 60),ellipse(7*XposStep, y6, 20, 20);
  fill(56, 27, 153, 30),ellipse(7*XposStep, y6/2, 10, 10);
      fill(56, 27, 153, 50),ellipse(7*XposStep, y6/4, 30, 30);
      
      
      
      
      
      
       var yposStep = width/12;
fill(56, 27, 153, 30),ellipse(x0, 1*yposStep, 20, 20);
    fill(56, 27, 153, 30),ellipse(x0/2, 1*yposStep,10, 10);
    fill(56, 27, 153, 30),ellipse(x0/4, 1*yposStep, 30, 30);
    
fill(252, 255, 186, 30),ellipse(x1, 2*yposStep, 20, 20);
    fill(252, 255, 186, 30),ellipse(x1/2, 2*yposStep, 10, 10);
        fill(252, 255, 186, 30),ellipse(x1/4, 2*yposStep, 30, 30);

fill(56, 27, 153, 30),ellipse(x2, 3*yposStep, 20, 20);
  fill(56, 27, 153, 30),ellipse(x2/2, 3*yposStep, 10, 10);
      fill(56, 27, 153, 30),ellipse(x2/4,3*yposStep, 30, 30);

fill(252, 255, 186, 30),ellipse(x3, 4*yposStep, 20, 20);
  fill(252, 255, 186, 30),ellipse(x3/2,4*yposStep, 10, 10);
      fill(252, 255, 186, 30),ellipse(x3/4,4*yposStep, 30, 30);

fill(56, 27, 153, 30),ellipse(x4, 5*yposStep, 20, 20);
  fill(56, 27, 153, 30),ellipse(x4/2, 5*yposStep, 10, 10);
      fill(56, 27, 153, 30),ellipse(x4/4,5*yposStep, 30, 30);

fill(252, 255, 186, 30),ellipse(x5,6*yposStep, 20, 20);
  fill(252, 255, 186, 30),ellipse(x5/2,6*yposStep, 10, 10);
      fill(252, 255, 186, 30),ellipse(x5/4,6*yposStep, 30, 30);

fill(56, 27, 153, 30),ellipse(x6, 7*yposStep, 20, 20);
  fill(56, 27, 153, 30),ellipse(x6/2, 7*yposStep, 10, 10);
      fill(56, 27, 153, 30),ellipse(x6/4, 7*yposStep, 30, 30);



  Counter += 4;
}


// 1  let's talk about this function
function SineWave(t,Mean,Amplitude,Frequency,Phase) {
   var Output = Mean + Amplitude*sin(Frequency*t+Phase);
   return Output;
}
   
   
   
   
