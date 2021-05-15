var canvas;
function setup(){
    canvas1 = createCanvas(460,240);
    canvas1.parent("mainvisual");
   
  
    frameRate(10);

}
function draw(){
    
    
	background(255);
  // fill(255);
  // rect(0,0,width,height);
	fill(0);
    
    ellipse(mouseX, mouseY, 80, 80);
   
}