let aspect;
let font,
  fontsize = 32;

let launchButton, triangleButton, squareButton, circleButton, 
  colorButton_1, colorButton_2, colorButton_3, colorButton_4, colorButton_5; // Buttons!
let count = 0;

let colorOptions = ["#ff9999", "#ebff99", "#99ffc2", "#99c2ff", "#eb99ff"];

let particleDemo_A, particleDemo_B;

let selectedShape = 0; // 0 = triangle, 1 = square, 2 = circle
let selectedColor = 0;

function preload(){
  font = loadFont('assets/Metropolis-Regular.otf')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  // SHAPES ------------------------------
  triangleButton = new Button({
    x: width / 6, y: 2 * height / 6,
    width: 100,   height: 50,
    align_x: 0,   align_y: 0,
    content: 'Triangle',
    on_press() {
      selectedShape = 0;
    }
  });
  triangleButton.style("default", {
    text_size: 16, text_font: font});

  squareButton = new Button({
    x: width / 2, y: 2 * height / 6,
    width: 100,   height: 50,
    align_x: 0,   align_y: 0,
    content: 'Square',
    on_press() {
      selectedShape = 1;
    }
  });
  squareButton.style("default", {
    text_size: 16, text_font: font});

  circleButton = new Button({
    x: 5 * width / 6, y: 2 * height / 6,
    width: 100,   height: 50,
    align_x: 0,   align_y: 0,
    content: 'Circle',
    on_press() {
      selectedShape = 2;
    }
  });
  circleButton.style("default", {
    text_size: 16, text_font: font});

  // COLORS ---------------------------------
  colorButton_1 = new Button({
    x: 1 * width / 6, y: 4 * height / 6,
    width: 50,   height: 50,
    align_x: 0,   align_y: 0,
    content: '1',
    on_press() {
      selectedColor = 0;
    }
  });
  colorButton_1.style("default", {
    text_size: 16, text_font: font, background: colorOptions[0]});

  colorButton_2 = new Button({
    x: 2 * width / 6, y: 4 * height / 6,
    width: 50,   height: 50,
    align_x: 0,   align_y: 0,
    content: '2',
    on_press() {
      selectedColor = 1;
    }
  });
  colorButton_2.style("default", {
    text_size: 16, text_font: font, background: colorOptions[1]});

  colorButton_3 = new Button({
    x: 3 * width / 6, y: 4 * height / 6,
    width: 50,   height: 50,
    align_x: 0,   align_y: 0,
    content: '3',
    on_press() {
      selectedColor = 2;
    }
  });
  colorButton_3.style("default", {
    text_size: 16, text_font: font, background: colorOptions[2]});

  colorButton_4 = new Button({
    x: 4 * width / 6, y: 4 * height / 6,
    width: 50,   height: 50,
    align_x: 0,   align_y: 0,
    content: '4',
    on_press() {
      selectedColor = 3;
    }
  });
  colorButton_4.style("default", {
    text_size: 16, text_font: font, background: colorOptions[3]});

  colorButton_5 = new Button({
    x: 5 * width / 6, y: 4 * height / 6,
    width: 50,   height: 50,
    align_x: 0,   align_y: 0,
    content: '5',
    on_press() {
      selectedColor = 4;
    }
  });
  colorButton_5.style("default", {
    text_size: 16, text_font: font, background: colorOptions[4]});

  // LAUNCH ---------------------------------
  launchButton = new Button({
    x: width / 2, y: 5 * height / 6,
    width: 125,   height: 70,
    align_x: 0,   align_y: 0,
    content: 'LAUNCH!',
    on_press() {
      onLaunchClicked();
    }
  });
  launchButton.style("default", {
    text_size: 24, text_font: font});

  // PARTICLE DEMOS --------------------------
  particleDemo_A = new ParticleDemo(width / 6, 5 * height / 6, 100);
  particleDemo_B = new ParticleDemo(5 * width / 6, 5 * height / 6, 100);
}

function onLaunchClicked(){
  console.log("Launch clicked");
  sendFirework(selectedShape, hexToRgb(colorOptions[selectedColor]));
}

function draw(){
  background(0);
  triangleButton.draw();
  squareButton.draw();
  circleButton.draw();

  colorButton_1.draw();
  colorButton_2.draw();
  colorButton_3.draw();
  colorButton_4.draw();
  colorButton_5.draw();

  particleDemo_A.draw(selectedShape, colorOptions[selectedColor]);
  particleDemo_B.draw(selectedShape, colorOptions[selectedColor]);
  launchButton.draw();



  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);

  fill(255);
  noStroke();

  text("Shape", width/2, height/6);
  text("Color", width/2, height/2);

  /*
  fill(255);
  noStroke();
  
  rect((width/6) - 50, (2*height/6) - 50, 100, 100);
  rect((width/2) - 50, (2*height/6) - 50, 100, 100);
  rect((5*width/6) - 50, (2*height/6) - 50, 100, 100);

  
  rect((width/2) - 250, (4*height/6) - 50, 500, 20);*/

  /*rect((width/2) - 125, (5*height/6) - 62.5, 250, 125);
  fill(0);
  text("LAUNCH!", (width/2), (5*height/6));*/

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

function hexToRgb(hex) {
  hex = hex.replace('#', '');

  var bigint = parseInt(hex, 16);

  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return color(r, g, b);
}