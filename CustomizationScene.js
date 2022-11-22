let imgArray = [];

// Global
let margin = 10;
let padding = 10;

let shapeSectionHeight = 150;
let colorSectionHeight = 100;
let behaviorSectionHeight = 100;

// SHAPE DISPLAY
let shapeSize = 50;
let shapePadding = 10;
let shapeNX = 5;
let shapeNY = 2;
let calculatedShapePanelWidth;
let calculatedShapePanelHeight;

let sectionFontSize = 16;
let navButtonSize = 100;

let backButton, nextButton;
let shapeSelector;

function CustomizationScene(){
	this.show = function(){

	}

	this.setup = function(){
		imgArray[0] = loadImage('assets/shapes/Square.png');
		imgArray[1] = loadImage('assets/shapes/Circle.png');
		imgArray[2] = loadImage('assets/shapes/Triangle.png');
		
		imgArray[3] = loadImage('assets/shapes/Blob.png');
		imgArray[4] = loadImage('assets/shapes/Bolt.png');
		imgArray[5] = loadImage('assets/shapes/Clover.png');
		imgArray[6] = loadImage('assets/shapes/Spike.png');
		imgArray[7] = loadImage('assets/shapes/Star.png');
		imgArray[8] = loadImage('assets/shapes/Triangle.png');
		imgArray[9] = loadImage('assets/shapes/Square.png');

		// Shape Selector
		calculatedShapePanelWidth = shapeNX * shapeSize + (shapeNX - 1) * shapePadding;
		calculatedShapePanelHeight = shapeNY * shapeSize + (shapeNY - 1) * shapePadding;

		var shapeLeftCorner = [margin, (height / 2) - (colorSectionHeight / 2) - margin - shapeSectionHeight];
		var shapeRightCorner = [width - margin, shapeLeftCorner[1] + shapeSectionHeight];

		var shapeAdjustedLeftCorner = [(width / 2) - (calculatedShapePanelWidth / 2), 
			shapeRightCorner[1] - calculatedShapePanelHeight - shapePadding];

		shapeSelector = new ShapeSelector(
			shapeAdjustedLeftCorner[0], shapeAdjustedLeftCorner[1], 5, 2, shapeSize, shapePadding, imgArray);
		

		// Navigation Buttons
		var navBackLeftCorner = [margin, (height/2) + (colorSectionHeight / 2) + margin + behaviorSectionHeight + margin];
		var navBackRightCorner = [navBackLeftCorner[0] + navButtonSize, navBackLeftCorner[1] + navButtonSize];
		var navNextLeftCorner = [width - margin - navButtonSize, navBackLeftCorner[1]];
		var navNextRightCorner = [navNextLeftCorner[0] + navButtonSize, navNextLeftCorner[1] + navButtonSize];

		backButton = new ImageButton(navBackLeftCorner[0], navBackLeftCorner[1], 
			navButtonSize, navButtonSize, loadImage('assets/graphics/LeftArrow.png'), navBackClicked, -1);
		nextButton = new ImageButton(navNextLeftCorner[0], navNextLeftCorner[1], 
			navButtonSize, navButtonSize, loadImage('assets/graphics/RightArrow.png'), navNextClicked, -1);
	}

	this.draw = function(){
		background(0);
		
		// Page title
		fill(255);
		textFont(font);
		textSize(36);
		textAlign(CENTER, CENTER);
		var title = "";
		if(selectedType == 0){
			title = "Light";
		}else if(selectedType == 1){
			title = "Medium";
		}else if(selectedType == 2){
			title = "Heavy";
		}
		text(title, width/2, height/8);


		// Color section
		var colorLeftCorner = [margin, (height / 2) - (colorSectionHeight / 2)];
		var colorRightCorner = [width - margin, (height / 2) + (colorSectionHeight / 2)];

		fill(255, 0, 0);
		rect(colorLeftCorner[0], colorLeftCorner[1], 
				 colorRightCorner[0] - colorLeftCorner[0], 
				 colorRightCorner[1] - colorLeftCorner[1]);

		// Shape section
		var shapeLeftCorner = [margin, (height / 2) - (colorSectionHeight / 2) - margin - shapeSectionHeight];
		var shapeRightCorner = [width - margin, shapeLeftCorner[1] + shapeSectionHeight];

		fill(0, 255, 0);
		rect(shapeLeftCorner[0], shapeLeftCorner[1], 
				 shapeRightCorner[0] - shapeLeftCorner[0], 
				 shapeRightCorner[1] - shapeLeftCorner[1]);

		shapeSelector.draw();

		// Behavior section

		var behaviorLeftCorner = [margin, (height / 2) + (colorSectionHeight / 2) + margin];
		var behaviorRightCorner = [width - margin, behaviorLeftCorner[1] + behaviorSectionHeight];

		fill(0, 0, 255);
		rect(behaviorLeftCorner[0], behaviorLeftCorner[1], 
				 behaviorRightCorner[0] - behaviorLeftCorner[0], 
				 behaviorRightCorner[1] - behaviorLeftCorner[1]);

		// Navigation Buttons

		nextButton.draw();
		backButton.draw();

		/*
		var navBackLeftCorner = [margin, (height/2) + (colorSectionHeight / 2) + margin + behaviorSectionHeight + margin];
		var navBackRightCorner = [navBackLeftCorner[0] + navButtonSize, navBackLeftCorner[1] + navButtonSize];

		fill(255, 0, 0);
		rect(navBackLeftCorner[0], navBackLeftCorner[1], 
				 navBackRightCorner[0] - navBackLeftCorner[0], 
				 navBackRightCorner[1] - navBackLeftCorner[1]);

		var navNextLeftCorner = [width - margin - navButtonSize, navBackLeftCorner[1]];
		var navNextRightCorner = [navNextLeftCorner[0] + navButtonSize, navNextLeftCorner[1] + navButtonSize];

		fill(0, 255, 0);
		rect(navNextLeftCorner[0], navNextLeftCorner[1], 
				 navNextRightCorner[0] - navNextLeftCorner[0], 
				 navNextRightCorner[1] - navNextLeftCorner[1]);*/

	}

	this.mouseClickedDelegate = function(){
		nextButton.checkClick();
		backButton.checkClick();
	}
}

function navNextClicked(ID){
	navigateToScene(2);
}

function navBackClicked(ID){
	navigateToScene(0);
}