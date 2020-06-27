var fixedrect,movingrect;




function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  fixedrect = createSprite(400,200,80,50);
movingrect = createSprite(600,200,50,80);
movingrect.shapeColor = "green";
fixedrect.shapeColor = "green";


}


function draw() {
  background(255,255,255);  
movingrect.y = World.mouseY;
movingrect.x = World.mouseX;
console.log(movingrect.x - fixedrect.x);











if(movingrect.x - fixedrect.x < fixedrect.width /2 +movingrect.width / 2
  &&  fixedrect.x - movingrect.x < fixedrect.width /2 +movingrect.width / 2
  &&  fixedrect.y - movingrect.y < fixedrect.height /2 +movingrect.height / 2
  &&  movingrect.y  - fixedrect.y  < fixedrect.height /2 +movingrect.height / 2

  )
{
  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "green";
  
}
else {
  movingrect.shapeColor = "blue";
fixedrect.shapeColor = "blue";

}






  drawSprites();
}