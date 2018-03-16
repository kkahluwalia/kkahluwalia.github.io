var diameter; 
var Counter = 0;
H = 600;
W = 600

var img;
function preload() {
  img = loadImage ('Saif.jpg');
}
function setup() {
  image(img, 0, 0);
  
  angleMode(DEGREES);
 // colorMode(HSB,80,100,100)
 // createCanvas(700, 500);
  frameRate(20)
  noStroke();
 
 
}

function draw() {
 // background(0);
  fill(255,255,255,10)
  rect(0,0,width, height)
  textSize(18);
  fill(0,100,100);
  noStroke();
  
  var y0 =  SineWave(Counter,height/2,.6*height/2,.5,0)
  var y1 =  SineWave(Counter,height/2,.6*height/2,1,0)
  var y2 =  SineWave(Counter,height/2,.6*height/2,1.5,0)
  var y3 =  SineWave(Counter,height/2,.6*height/2,2.0,0)
  var y4 =  SineWave(Counter,height/2,.6*height/2,2.5,0)
  var y5 =  SineWave(Counter,height/2,.6*height/2,3.0,0)
  var y6 =  SineWave(Counter,height/2,.6*height/2,3.5,0)

  var XposStep = width/8;
fill(0,100,100),ellipse(1*XposStep, y0, 20, 20);
    fill(0,100,100),ellipse(1*XposStep, y0/2, 10, 10);
    fill(0,100,100),ellipse(1*XposStep, y0/4, 30, 30);
    
fill(10,100,100),ellipse(2*XposStep, y1, 20, 20);
    fill(10,100,100),ellipse(2*XposStep, y1/2, 10, 10);
        fill(10,100,100),ellipse(2*XposStep, y1/4, 30, 30);

fill(20,100,100),ellipse(3*XposStep, y2, 20, 20);
  fill(20,100,100),ellipse(3*XposStep, y2/2, 10, 10);
      fill(20,100,100),ellipse(3*XposStep, y2/4, 30, 30);

fill(30,100,100),ellipse(4*XposStep, y3, 20, 20);
  fill(30,100,100),ellipse(4*XposStep, y3/2, 10, 10);
      fill(30,100,100),ellipse(4*XposStep, y3/4, 30, 30);

fill(40,100,100),ellipse(5*XposStep, y4, 20, 20);
  fill(40,100,100),ellipse(5*XposStep, y4/2, 10, 10);
      fill(40,100,100),ellipse(5*XposStep, y4/4, 30, 30);

fill(50,100,100),ellipse(6*XposStep, y5, 20, 20);
  fill(50,100,100),ellipse(6*XposStep, y5/2, 10, 10);
      fill(50,100,100),ellipse(6*XposStep, y5/4, 30, 30);

fill(60,100,100),ellipse(7*XposStep, y6, 20, 20);
  fill(60,100,100),ellipse(7*XposStep, y6/2, 10, 10);
      fill(60,100,100),ellipse(7*XposStep, y6/4, 30, 30);


  Counter += 4;
}


// 1  let's talk about this function
function SineWave(t,Mean,Amplitude,Frequency,Phase) {
   var Output = Mean + Amplitude*sin(Frequency*t+Phase);
   return Output;
}
   
   
   
   
