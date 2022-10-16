let aspect;
let font,
  fontsize = 32;

function preload(){
  font = loadFont('assets/Metropolis-Regular.otf')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);

  fill(255);
  noStroke();
}

function draw(){
  fill(255);
  noStroke();
  text("Shape", width/2, height/6);
  rect((width/6) - 50, (2*height/6) - 50, 100, 100);
  rect((width/2) - 50, (2*height/6) - 50, 100, 100);
  rect((5*width/6) - 50, (2*height/6) - 50, 100, 100);

  text("Color", width/2, height/2);
  rect((width/2) - 250, (4*height/6) - 50, 500, 20);

  rect((width/2) - 125, (5*height/6) - 62.5, 250, 125);
  fill(0);
  text("LAUNCH!", (width/2), (5*height/6));

  /*if(currentScene === PICK_SKY_LOCATION){
    background(0);
    skySelectorBox.display();
  }*/
}

function mouseClicked(){
  /*if(currentScene === PICK_SKY_LOCATION){
    skyClickPosition = skySelectorBox.click(mouseX, mouseY);
    if(!skyClickPosition.hasOwnProperty('clickMissed')){
      sendFirework(1, 0.8);
      // sendRequestSkyAspect();
    }
  }*/
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  aspect = windowWidth/windowHeight;
}

function onReceiveSkyAspect(newAspect){
  skySelectorBox.aspect = newAspect;
}