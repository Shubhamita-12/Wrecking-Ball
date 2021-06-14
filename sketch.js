const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var chain;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(2500,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,550,2000,20);

    ball = new Ball();

    chain = new Chain(ball.body, {x : 500, y : 50});

    box = new Box(900, 100);
    box2 = new Box(900, 100);
    box3 = new Box(900, 100);
    box4 = new Box(900, 100);
    box5 = new Box(900, 100);

    box6 = new Box(800, 100);
    box7 = new Box(800, 100);
    box8 = new Box(800, 100);
    box9 = new Box(800, 100);
    box10 = new Box(800, 100);
    box11 = new Box(800, 100);

    box12 = new Box(700, 100);
    box13 = new Box(700, 100);
    box14 = new Box(700, 100);
    box15 = new Box(700, 100);
    box16 = new Box(700, 100);

}

function draw(){
    background("black");

    Engine.update(engine);
    
    ball.display();

    chain.display();

    box.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();

    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();


    
}

function mouseDragged(){
    
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    
}