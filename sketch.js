const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground;
var pig1,pig2;
var slab1,slab2,slab3,slab4;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(100,350,50,50);
    box2 = new Box(300,350,50,50);
    box3 = new Box(100,200,50,50);
    box4 = new Box(300,200,50,50);
    box5 = new Box(200,100,50,50);


    ground = new Ground(200,385,400,10);

    slab1= new Slab(200,250,300,PI/2);
    slab2= new Slab(200,150,300,PI/2);
    slab3= new Slab(150,100,70,PI/7);
    slab4= new Slab(250,100,70 ,-PI/7);

    pig1= new Pig(200,350);
    pig2= new Pig(200,200);

    bird1 = new Bird(100,100);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    slab1.display();
    slab2.display();
    slab3.display();
    slab4.display();
    pig1.display();
    pig2.display();
    bird1.display();
   
}