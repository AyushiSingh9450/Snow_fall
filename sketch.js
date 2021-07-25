const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg_image;
var snow;

function preload(){

  bg_image = loadImage("snow2.jpg");

}

function setup() {
  createCanvas(800, 400);
  // createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  if(frameCount % 200 === 0){
    snow = new Snow(random(0, 800), 10);
  }
   
}

function draw() {

  Engine.update(engine);
  background(bg_image);
  console.log(frameCount);
  
  snow.display();
  drawSprites();
}