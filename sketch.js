const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var rect1,rect2,rect3,rect4,rect5,rect6,rect7,rect8,rect9,rect10,rect11,rect12,rect13;
var ground;
function setup() {
  var canvas= createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  background(255);
  ground = new Ground(400,380,800,50);
  rect1 = new Shapes(100,50,50,350);
  rect2 = new Shapes(150,200,50,50);
  rect3 = new Shapes(200,150,50,150);
  rect4 = new Shapes(250,200,50,50);
  rect5 = new Shapes(300,175,50,100);
  rect6 = new Shapes(350,100,50,250);
  rect7 = new Shapes(400,50,50,350);
  rect8 = new Shapes(450,100,50,250);
  rect9 = new Shapes(500,175,50,100);
  rect10 = new Shapes(550,200,50,50);
  rect11 = new Shapes(600,150,50,150);
  rect12 = new Shapes(650,200,50,50);
  rect13 = new Shapes(700,50,50,350);
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  rect1.display();
  rect2.display();
  rect3.display();
  rect4.display();
  rect5.display();
  rect6.display();
  rect7.display();
  rect8.display();
  rect9.display();
  rect10.display();
  rect11.display();
  rect12.display();
  rect13.display();
  drawSprites();
}