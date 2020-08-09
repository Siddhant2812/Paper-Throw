
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground;
var side1,side2;

/*function preload()
{
	
}*/

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(40,595,20)
  ground = new Ground(400,600,800,20);
  side1 = new Side(750,570,10,50);
  side2 = new Side(695,590,100,10);
  side3 = new Side(640,570,10,50);

	Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);
  background(0);

  keyPress(60,-85);

  Engine.update(engine);
  paper.display();
  ground.display();
  side1.display();
  side2.display();
  side3.display();
  
  drawSprites(); 
}

function keyPress(pos1,pos2){
  if(keyDown("T")){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:pos1,y:pos2});
  }
}



