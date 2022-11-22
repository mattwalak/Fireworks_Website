let typeSelectScene, customizationScene, launchScene;
let currentScene = 0; // typeSelect = 0, customizationScene = 1, launchScene = 2;
let font;

// Return data from typeSelect
let selectedType = -1; // 0 = high, 1 = mid, 2 = low

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

function mouseClicked(){
	if(currentScene == 0){
		typeSelectScene.mouseClickedDelegate();
	}else if(currentScene == 1){
		customizationScene.mouseClickedDelegate();
	}else if(currentScene == 2){
		launchScene.mouseClickedDelegate();
	}else{
		print("ERROR - unknown scene #"+currentScene);
	}
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  aspect = windowWidth/windowHeight;
}

function returnFromTypeSelect(selected){
	selectedType = selected;
	print("Selected = " + selected);
	currentScene = 1;
	customizationScene.show();
}

function navigateToScene(targetScene){
	currentScene = targetScene;
}