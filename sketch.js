var cat,catImg1,catImg2,catImg3,catImg4;
var rat,ratImg;
var garden,gardenImg;
function preload() {
    //load the images here
    catImg1 = loadImage("cat1.png");
    ratImg = loadImage("mouse1.png");
    gardenImg = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(300,300,100,10);
    cat.addImage(catImg1);

    rat = createSprite(100,100,100,10);
    rat.addImage(ratImg);

    garden = createSprite(800,700,1,1);
    garden.addImage(gardenImg);
}

function draw() {

    background("gray");
    //Write condition here to evalute if tom and jerry collide
    if (cat.x - rat.x < rat.width/2 + cat.width/2 
        && rat.x - cat.x < rat.width/2 + cat.width/2 ){
        rat.changeAnimation("mouse4.png");
        
    }  
        
        
    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 /* if(keyCode === LEFT_ARROW){ 
      cat.changeAnimation("cat2.png"+"cat3.png"+"cat4.png");
  }*/
}
