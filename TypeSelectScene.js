let highButton, midButton, lowButton;

function TypeSelectScene(){
	this.hide = function(){
		
	}

	this.show = function(){

	}

	this.setup = function(){

		// HIGH BUTTON
		highButton = new Button({
	    x: width / 2, y: (height / 2) - 150,
	    width: 200,   height: 100,
	    align_x: 0,   align_y: 0,
	    content: 'Light',
	    on_press() {
	      highClicked();
	    }
	  });
	  highButton.style("default", {
	    text_size: 32, text_font: font});

	  // MID BUTTON
		midButton = new Button({
	    x: width / 2, y: height / 2,
	    width: 200,   height: 100,
	    align_x: 0,   align_y: 0,
	    content: 'Medium',
	    on_press() {
	      midClicked();
	    }
	  });
	  midButton.style("default", {
	    text_size: 32, text_font: font});

	  // HIGH BUTTON
		lowButton = new Button({
	    x: width / 2, y: (height / 2) + 150,
	    width: 200,   height: 100,
	    align_x: 0,   align_y: 0,
	    content: 'Heavy',
	    on_press() {
	      lowClicked();
	    }
	  });
	  lowButton.style("default", {
	    text_size: 32, text_font: font});

	  
	}

	this.draw = function(){
		background(0);
		highButton.draw();
		midButton.draw();
		lowButton.draw();
	}

	this.mousePressedDelegate = function(){

	}
}

function highClicked(){
	fwk_selectedType = 0;
	navigateToScene(1);
}

function midClicked(){
	fwk_selectedType = 1;
	navigateToScene(1);
}

function lowClicked(){
	fwk_selectedType = 2;
	navigateToScene(1);
}