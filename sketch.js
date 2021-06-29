//Create variables here
var foodStock, foodCount;
function preload()
{
	//load images here
}

function setup() {
	createCanvas(800, 700);
  
}


function draw() {  
background("green");
  foodStock=database.ref('foodCount');
  foodStock.on("value", readStock);

  readState=database.ref('gameState');
  readState.on("value",function(data){
    gameState=data.val();
  });
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage("dogHappy");
  }
  if(gameState!="Hungry"){
    feed.hide();
    addFood.hide();
    dog.remove();
  }else{
    feed.show();
    addFood.show();
    dog.addImage(SadDog);
  }
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    foodCount:x
  })

}
function update(state){
  database.ref('/').update({
    gameState:state
  });
}

