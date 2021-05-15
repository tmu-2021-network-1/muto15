var canvas;
function setup(){
    canvas = createCanvas(640,480);
    canvas.parent("mask");
    frameRate(10);

}
function draw(){
    fill(255,255,255,0);
    noStroke();
    rect(0,0,width,height);
    
	fill(0);
    
    ellipse(mouseX, mouseY, 80, 80);
}