var diameter; 
var angle = 0;
H = 600;
W = 600
function setup() {
  angleMode(DEGREES)
  createCanvas(W, H+100);
  diameter = H - 10;
  noStroke();
  fill(10, 204, 0);
  
  rSlider = createSlider(0, 255, 10);
  rSlider.position(20, 600);
  gSlider = createSlider(0, 255, 204);
  gSlider.position(20, 630);
  bSlider = createSlider(0, 255, 0);
  bSlider.position(20, 660);
 
}

function draw() {
  background(0);
  textSize(18);
  noStroke();
  text("R Value = "+rSlider.value(),20+5+130,rSlider.y+10)
  text("G Value = "+gSlider.value(),20+5+130,gSlider.y+10)
  text("B Value = "+bSlider.value(),20+5+130,bSlider.y+10)
  text('circles traveling in circles', 50, 50) 
  text('and lines traveling in lines', 100, 90)
  
  var d1 =  SineWave(angle,110,100,4,0);
  var x1 =  SineWave(angle,width/2,.9*width/2,2,0)
  var y1 =  SineWave(angle,width/2,.9*width/2,2,90)
  var c1 =  SineWave(angle,128,120,1,0)
  
    fill(d1,gSlider.value(),bSlider.value(),255);

  //ellipse(width/2, height/2, d1/2, d1);
 // ellipse(height/2, width/2, d1/3, d1);
rect(y1, 100, 20, 10);
  rect(y1/2, 125, 20, 10);
  rect(x1, 150, 20, 10);
  rect(y1, 175, 20, 10);
  rect(y1/2, 200, 20, 10);
  rect(y1, 225, 20, 10);
  rect(x1, 250, 20, 10);
  rect(y1, 275, 20, 10);
  rect(y1/2, 300, 20, 10);
  rect(y1, 325, 20, 10);
  rect(x1, 350, 20, 10);
  rect(y1, 375, 20, 10);
  rect(y1/2, 400, 20, 10);
  rect(y1, 425, 20, 10);
  rect(x1, 450, 20, 10);
  rect(y1, 475, 20, 10);
  rect(y1/2, 500, 20, 10);
  rect(y1, 525, 20, 10);
  rect(x1, 550, 20, 10);
  
 // ellipse(x1, height/2, 10, 10);
  //ellipse(width/2, y1, 10, 20);
  ellipse(x1, y1, 40, 40);
  ellipse(y1,x1, 40,40);
  ellipse(y1/2, x1/2, 40,40)
  //fill(c1,c1,c1,255);
  //ellipse(width/2, 200, 40, 40);
  
  angle= angle+1;
}


// 1  let's talk about this function
function SineWave(t,Mean,Amplitude,Frequency,Phase) { //t:angles
   var Output = Mean + Amplitude*sin(Frequency*t+Phase);
   return Output;
}
   
   
   
   
