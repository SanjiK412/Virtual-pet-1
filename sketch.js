var dog,happyDog,dogImg;
var database;
var foodS,foodStock;

function preload(){
dogImg = loadImage("images/dogImg.png");
happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,300,150,150);
 dog.addImage(dogImg);
 dog.scale = 0.2;
foodStock = database.ref('Food');
    foodStock.on("value",readStock);
    textSize(20);
}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
 drawSprites()
  fill(255,255,254);
  stroke("black");
  text("food remaning :" + foodS, 170, 200);
  textSize(13);
  text("Press the up arrow key to feed milk to BUDDY!",130,20,300,20);
}
function readStock(data){
  foodS = data.val();
  }
  
  function writeStock(x){
    if(x <= 0){
      x = 0;
    }
    else{
      x = x-1;
    }
      database.ref("/").update({
        Food:x,
      })
    }

