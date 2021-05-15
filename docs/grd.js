var canvas;
function setup(){
    canvas1 = createCanvas(704,300,WEBGL);
    canvas1.parent("mainvisual");
   
  
    frameRate(10);



    canvas1 = createCanvas(704,300,WEBGL);
 
  
    frameRate(10);
   myCamera = createCamera();

}
function draw(){
  noStroke();
  ambientLight(200);
   
  
 rotateY(radians(40*sin(frameCount/15)));
  // rotateX(radians(mouseX));
  
      background(50);
  push();
         translate(95,65,-80);
  rotateY(radians(-7));
 
  normalMaterial()
        box(70, 110, 70);
  pop();
  push();
         translate(20,55,0);
         fill(255, 255, 255);
          sphere(45);
 
  pop();
  push();
         translate(-70,60,-40);
   rotateY(radians(8));
 
 
         box(65, 100, 65);
  pop();
  push();
          translate(-88,-38,-100);
          normalMaterial()
          fill(255, 255, 255);
          sphere(40);
  pop();
  
      var dirY = (mouseY / height ) *2;
  var dirX = (mouseX / width - 0.5) *2;

  //マウスに合わせてライト強弱
  directionalLight(450, 450, 450, dirX, dirY, 0.65);
  directionalLight(450, 450, 450, 0.5, 0.9, 1);
  
  myCamera.camera(0,15,(height / 2.0) / tan(PI * 30.0 / 180.0),0, 0, 0, 0, 1, 0);
  
  
  
 
}
      
    
    
// 	background(255);
//   // fill(255);
//   // rect(0,0,width,height);
// 	fill(0);
    
//     ellipse(mouseX, mouseY, 80, 80);
   
