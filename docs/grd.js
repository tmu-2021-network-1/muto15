var canvas;
function setup(){
    canvas = createCanvas(640,480);
    canvas.parent("oekaki");

}
function draw(){
    fill(255,255,255,50);
    rect(0,0,width,height);
    if(mouseIsPressed){
	fill(0);
    }
    else{
	fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}