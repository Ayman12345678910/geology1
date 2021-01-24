
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var circle

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    circle= new Circle(550,600, 2);

  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



