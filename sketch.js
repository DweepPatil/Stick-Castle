function setup() {
   var canvas=createCanvas(800,400);
  
}

function draw() {
  background("lightblue");
  rectMode(CENTER);
  fill(181,101,29);
  rect(400,375,800,50); 

  for (var i = 200; i < 601; i=i+200) {
    rectMode(CENTER);
    fill(120,120,120);
  rect(i,250,50,200);    
  }

  for (var d = 300; d < 601; d=d+200) {
    rectMode(CENTER);
    fill(120,120,120);
  rect(d,285,150,130);    
  }

  for (var d = 175; d < 601; d=d+400) {
    fill(120,120,120);
    triangle(d,150,d+50,150,d+25,50);
   
  }
 
  rectMode(CENTER);
  fill(181,101,29);
  rect(400,85,15,130); 

  fill("red");
  triangle(408,20,408,70,445,45);
  drawSprites();
}