var canvas;

function setup() {
    canvas1 = createCanvas(1409, 600, WEBGL);
    canvas1.parent("mainvisual");
    frameRate(10);
    myCamera = createCamera();
    let s =0.5 ;
}
   

function draw() {
    
    
    s = map(mouseY,0,600,0.2,1);
    noStroke();
    rotateY(radians(40 * sin(frameCount / 15)));
    background(255);

    push();
    translate(170, 65, -150);
    rotateY(radians(-7));
    directionalLight(255, 255, 255, 1, 0, -1);
    ambientMaterial(255, 255, 255);
    box(140, 210, 140);
    pop();

    push();
    translate(20, 55, 0);
    directionalLight(255, 255, 255, 0, s, -1);
    ambientMaterial(255, 255, 255);
    sphere(90);
    pop();

    push();
    translate(-160, 60, -80);
    rotateY(radians(8));
    directionalLight(255, 255, 255, 0.5, 0.5, -0.7);
    ambientMaterial(255, 255, 255);
    box(130, 200, 130);
    pop();

    push();
    translate(-160, -160, -200);
    directionalLight(255, 255, 255, 0, s, -1);
    ambientMaterial(220, 220, 220);
    sphere(80);
    pop();

    myCamera.camera(0, 15, (height / 2.0) / tan(PI * 30.0 / 180.0), 0, 0, 0, 0, 1, 0);

}
