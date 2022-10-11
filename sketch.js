// GLOBAL THINGS
let aspect; // Width/Height
let currentScene;

// LANDING SCREEN
let beginGameButton;

// PICK SKY LOCATION SCREEN
let skySelectorBox;


// Just because there are no enum in Javascript
const LANDING_SCREEN = "SCENE_LANDING_SCREEN";
const PICK_SKY_LOCATION = "SCENE_PICK_SKY_LOCATION";


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  beginGameButton = createButton('Click anywhere to begin game!');
  beginGameButton.position(0, 0);
  beginGameButton.size(windowWidth, windowHeight);
  beginGameButton.mousePressed(onBeginGameClicked);

  currentScene = LANDING_SCREEN;
}

function onBeginGameClicked(){
  beginGameButton.hide();
  fullscreen(true);
  loadPickSkyScene();
}

function loadPickSkyScene(){
  background(0);
  skySelectorBox = new SkySelectionBox(windowWidth/2, windowHeight/2, 100, 100);
  currentScene = PICK_SKY_LOCATION;
}

function draw(){
  if(currentScene === PICK_SKY_LOCATION){
    background(0);
    skySelectorBox.display();
  }
}

function mouseClicked(){
  if(currentScene === PICK_SKY_LOCATION){
    skyClickPosition = skySelectorBox.click(mouseX, mouseY);
    if(!skyClickPosition.hasOwnProperty('clickMissed')){
      sendFirework(1, 0.8);
      // sendRequestSkyAspect();
    }
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  aspect = windowWidth/windowHeight;
}

function onReceiveSkyAspect(newAspect){
  skySelectorBox.aspect = newAspect;
}