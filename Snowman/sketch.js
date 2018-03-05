var bugs = [];
var wSlider;

function setup() {
  
  createCanvas(600,600)
   // Create objects
  for (var i=0; i<50; i++) {
    bugs.push(new Jitter());
  }
  
 wSlider = createSlider(0, width, 0);
  wSlider.position(20, height-20);
  wSlider.size(100,10)
  
}

function draw() {
  
  //fill (255,255,255);
  //rect (0,400,600,200);
  
  background(0,0,0);
    for (var i=0; i<bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
    stroke(1)
    

    
  drawSnow(120,100,80)
  drawSnow(200,100,80)
  drawSnow(280,100,80)
  drawSnow(360,100,80)
  drawSnow(440,100,80)
  drawSnow(520,100,80)
  }
    fill (255,255,255);

rect(0,400,600, 200)
  
}

// Jitter class
function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(1, 10);
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  this.display = function() {
    fill(255,255,255)
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

  function drawSnow(Xstart, Ystart,size) {
  fill(255,255,255)
  ellipse(Xstart+wSlider.value(), Ystart, size, size); //top circle
  ellipse(Xstart+wSlider.value(), Ystart+size*(6/5), size*(3/2), size*(3/2)); //middle circle
  ellipse(Xstart+wSlider.value(), Ystart+size*3,size*(5/2), size*(5/2)); //bottom circle
 
  fill(0,0,0)
  ellipse(Xstart-15+wSlider.value(), Ystart-10, 10,10)
  ellipse(Xstart+15+wSlider.value(), Ystart-10, 10,10)
  
  fill(255, 161, 0)
  triangle(Xstart+wSlider.value(),Ystart,Xstart+wSlider.value(),Ystart+15, Xstart+20+wSlider.value(), Ystart+15)
  
  

}