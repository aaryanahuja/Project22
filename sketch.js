const Engine=Matter.Engine
const World=Matter.World
const Bodies = Matter.Bodies

var engine,world
var ground,box,ball
function setup() {

  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world
var box_Options={
  isStatic:false,
  restitution:1
  
}
box=Bodies.rectangle(200,200,50,50,box_Options)
World.add(world,box)


var ground_Options={
  isStatic:true
}
ground=Bodies.rectangle(200,380,400,20,ground_Options)
World.add(world,ground)

var ball_Options={
  isStatic:false,
  restitution:0.5
}
ball=Bodies.circle(102,180,25,ball_Options)
World.add(world,ball)
}

function draw() {
  background(0);  
  Engine.update(engine)

  
rectMode(CENTER);
rect(box.position.x,box.position.y,50,50)
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20)

ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,25,25)
}
