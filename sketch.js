var fRect, mRect



function setup() {
  createCanvas(1200,800);
 
 mRect =  createSprite(400, 100, 80, 30);
 mRect.shapeColor = "green"
 fRect =  createSprite(400, 800, 50, 80);
 fRect.shapeColor = "green"
mRect.velocityY = 5
fRect.velocityY = -5

}

function draw() {
  background(255,255,255);  
  
  if(mRect.x - fRect.x < mRect.width/2 + fRect.width/2 && 
    fRect.x - mRect.x < mRect.width/2 + fRect.width/2 ){
       mRect.velocityX = mRect.velocityX* (-1)
       fRect.velocityX = fRect.velocityX* (-1)
      
    }
    if(mRect.y - fRect.y < mRect.height/2 + fRect.height/2 && 
      fRect.y - mRect.y < mRect.height/2 + fRect.height/2){
        mRect.velocityY = mRect.velocityY* (-1)
        fRect.velocityY = fRect.velocityY* (-1)


    }
    
    
    
  
  
  drawSprites();
}