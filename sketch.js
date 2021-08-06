
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var hammer ;
var stone;
function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     hammer= new Hammer(100,200,100,30);
	 stone =new Stone(700,320,70,70);   
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  hammer.display();
  stone.display();
  
 
}



