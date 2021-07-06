function setup() {
	createCanvas(800, 800);
	noStroke();
}

function draw() {	
  background(0);
  for(var y = 0; y <= height; y+=10){
  	for(var x = 0; x <= width; x+=10){
  		var g = random(250);
  		fill(g); 
  		//greyscale random 
  		rect(x, y, 10, 10);
  		//squares
  	}
  }
}