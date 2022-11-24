let typeSelectScene, customizationScene, launchScene;
let currentScene = 0; // typeSelect = 0, customizationScene = 1, launchScene = 2;
let font;

// Return data from typeSelect
let fwk_selectedType = -1; // 0 = high, 1 = mid, 2 = low

// Return data from customizationScene

// Return data from Launch Scene

function preload(){
  font = loadFont('assets/Metropolis-Regular.otf');
}

function setup(){
	createCanvas(windowWidth, windowHeight);
	background(0);

	typeSelectScene = new TypeSelectScene();
	typeSelectScene.setup();
	customizationScene = new CustomizationScene();
	customizationScene.setup();
	launchScene = new LaunchScene();
	launchScene.setup();

	typeSelectScene.show();
}

function draw(){
	if(currentScene == 0){
		typeSelectScene.draw();
	}else if(currentScene == 1){
		customizationScene.draw();
	}else if(currentScene == 2){
		launchScene.draw();
	}else{
		print("ERROR - unknown scene #"+currentScene);
	}
}

function mousePressed(){
	print("mousePressed");
	if(currentScene == 0){
		typeSelectScene.mousePressedDelegate();
	}else if(currentScene == 1){
		customizationScene.mousePressedDelegate();
	}else if(currentScene == 2){
		launchScene.mousePressedDelegate();
	}else{
		print("ERROR - unknown scene #"+currentScene);
	}
}

function mouseReleased(){
	print("mouseReleased");
	if(currentScene == 2){
		launchScene.mouseReleasedDelegate();
	}
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  aspect = windowWidth/windowHeight;
}

function navigateToScene(targetScene){
	if(currentScene == 0){
		typeSelectScene.hide();
	}else if(currentScene == 1){
		customizationScene.hide();
	}else if(currentScene == 2){
		launchScene.hide();
	}

	if(targetScene == 0){
		typeSelectScene.show();
	}else if(targetScene == 1){
		customizationScene.show();
	}else if(targetScene == 2){
		launchScene.show();
	}
	
	currentScene = targetScene;
}