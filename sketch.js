var zenia;
var tourus;
var cyclap;
var wall1, wall2, wall3;
var speed, weight;

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  wall1 = createSprite(windowWidth-50, 100, 30, 80);
  wall1.shapeColor = 'white';
  wall2 = createSprite(windowWidth-50, 300, 30, 80);
  wall2.shapeColor = 'white';
  wall3 = createSprite(windowWidth-50, 500, 30, 80);
  wall3.shapeColor = 'white';

  zenia = createSprite(30,100,30,30);
  zenia.shapeColor = 'white';
  tourus = createSprite(30,300,30,30);
  tourus.shapeColor = 'white';
  cyclap = createSprite(30,500,30,30);
  cyclap.shapeColor = 'white';

  speed = random(55,90);
  weight = random(400,1500);


}

function draw() {
  background("black");
  
  zenia.velocityX = speed;
  tourus.velocityX = speed;
  cyclap.velocityX = speed;

  if(wall1.x-zenia.x < (zenia.width+wall1.width)/2)
  {
   zenia.velocityX = 0;
   var deformation=0.7 * weight * speed * speed/22509;
  
   if(deformation>180)
   {
     zenia.shapeColor = color(255,0,0);
   }

   if(deformation<180 && deformation>100)
   {
     zenia.shapeColor = color(230,230,0);
   }
  
   if(deformation<100)
   {
     zenia.shapeColor = color(0,255,0);
   }

  }

  if(wall2.x-tourus.x < (tourus.width+wall2.width)/2)
  {
    tourus.velocityX = 0;
   var deformation=0.4 * weight * speed * speed/22509;
  
   if(deformation>180)
   {
    tourus.shapeColor = color(255,0,0);
   }

   if(deformation<180 && deformation>100)
   {
    tourus.shapeColor = color(230,230,0);
   }
  
   if(deformation<100)
   {
    tourus.shapeColor = color(0,255,0);
   }

  }

  if(wall3.x-cyclap.x < (cyclap.width+wall3.width)/2)
  {
    cyclap.velocityX = 0;
   var deformation=0.3 * weight * speed * speed/22509;
  
   if(deformation>180)
   {
    cyclap.shapeColor = color(255,0,0);
   }

   if(deformation<180 && deformation>100)
   {
    cyclap.shapeColor = color(230,230,0);
   }
  
   if(deformation<100)
   {
    cyclap.shapeColor = color(0,255,0);
   }

  }

  drawSprites();
}