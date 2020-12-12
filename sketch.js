
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var ground1;
var paperball;


function setup() {
	rectMode(CENTER);
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
ground1 = new ground(400,580,800,20);
box1 = new box(600,563,100,15);
box2 = new box(550,529,15,80);
box3 =new box(650,529,15,80);
paperball= new paper(100,350);

keyPressed();
Engine.run(engine);
}


function draw() {
 rectMode(CENTER);
  background(0);
  

  ground1.display();
 box1.display();
 box2.display();
 box3.display();
 paperball.display();

 drawSprites();
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Body.applyForce(paperball.body,paperball.body.position,{x: 55, y: -55});
	}
}




