
function setup(){
createCanvas(1320,600,WEBGL)


}
function draw(){
   background(223);
   fill(238, 103, 36);
   
   push();
   rotateX(frameCount*0.06);
   rotateY(frameCount*0.07);
   torus(100,16);
   pop();   

 
   fill(64, 238, 36); 
   push();
   sphere(50);
   pop();




  
}