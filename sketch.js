
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Constraint=Matter.Constraint;

var tree,stone,mango,mango1,mango2,mango3,mango4,mango5,boy,ground,chain,boyImg;
var engine,world;
var ground;

function preload()
{
	boyImg=loadImage("images/Priyal-mangoes-main/boy.png");
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(650,740,20,248);

	stone = new Stone(70,420,90,90);

	mango1=new Mango(680,200,100,100);

	mango2=new Mango(600,160,100,100);

	mango3=new Mango(590,260,80,100);

	mango4=new Mango(740,260,100,100);

	mango5=new Mango(680,100,100,100);

	//boy=new Boy(190,500,300,300);

	ground = new Ground(400,740,800,6);

	chain=new Chain(stone.body,{x:60 , y:430});

	//mango.depth=tree.depth+1;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  strokeWeight(7);
  
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  ground.display();
  chain.display();

  imageMode(CENTER);
  image(boyImg,150,500,300,300);
  //drawSprites();

  keyPressed();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	chain.fly();
}

function detectollision(stone,mango){
	mango.pos=mango.body.position;
	stone.pos=stone.body.position;

	var distance=dist(stone.pos.x,stone.pos.y,mango.pos.x,mango.pos.y);
	if (distance<-mango.r+stone.r){
		Matter.Body.setStatiic(mango.body,false);
	}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235, y:420})
		launcherObject.attach(stone.body);
	}
}