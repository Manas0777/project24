
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground, ball,wall1,wall2,wall3;
var ballBody


function setup() {
	 var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 
	ground = new Ground(600,height,1200,20)
    
	ball = new Ball(100,600,60);

	wall1= new Ground(550,620,20,100)

	wall2 = new Ground(700,620,20,100)

	wall3 = new Ground(625,680,170,20)

	

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);



  ground.show();
  ball.display();
  wall1.show();
  wall2.show();
  wall3.show();


  drawSprites();
 

}








