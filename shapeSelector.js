function ShapeSelector(posX, posY, nX, nY, shapeSize, padding, imgArray){
	this.posX = posX;
	this.posY = posY;
	this.nX = nX;
	this.nY = nY;
	this.shapeSize = shapeSize;
	this.padding = padding;
	this.imgArray = imgArray;

	this.draw = function(){
		for(var x = 0; x < nX; x++){
			for(var y = 0; y < nY; y++){
				var img = imgArray[y*nX + x];
				var qX = posX + (x * (shapeSize + padding));
				var qY = posY + (y * (shapeSize + padding));
				fill(255);
				tint(255);
				image(img, qX, qY, shapeSize, shapeSize);
			}
		}
	}
}