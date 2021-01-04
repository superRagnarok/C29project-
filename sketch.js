const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var box17,box18,box19,box20,box21,box22,box23,box24,box25;
var ground1, stand1, stand2;
var polygon1;
var slingshot;

function setup(){
    var canvas = createCanvas(1500,400);
    engine = Engine.create();
    world = engine.world;
    //1st pyramid
    box1 = new Box(600,200,40,50);
    box2 = new Box(640,200,40,50);
    box3 = new Box(680,200,40,50);
    box4 = new Box(720,200,40,50);
    box5 = new Box(560,200,40,50);
    box6 = new Box(520,200,40,50);
    box7 = new Box(480,200,40,50);

    box8 = new Box(600,150,40,50);
    box9 = new Box(640,150,40,50);
    box10 = new Box(680,150,40,50);
    box11 = new Box(560,150,40,50);
    box12 = new Box(520,150,40,50);

    box13 = new Box(600,100,40,50);
    box14 = new Box(640,100,40,50);
    box15 = new Box(560,100,40,50);

    box16 = new Box(600,50,40,50);
//2nd pyramid
    box17 = new Box(1150,150,40,50);
    box18 = new Box(1190,150,40,50);
    box19 = new Box(1230,150,40,50);
    box20 = new Box(1110,150,40,50);
    box21 = new Box(1070,150,40,50);

    box22 = new Box(1150,100,40,50);
    box23 = new Box(1190,100,40,50);
    box24 = new Box(1110,100,40,50);

    box25 = new Box(1150,50,40,50);


    ground1= new Ground(750,390,1500,20);
    stand1= new Ground(600,300,350,20);
    stand2= new Ground(1150,250,300,20);
    polygon1 = new Polygon(100,200);
    slingshot = new Slingshot(polygon1.body,{x:100,y:200});
}

function draw(){
    background(0);
    Engine.update(engine);
fill("yellow");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("orange");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill("green");
    box13.display();
    box14.display();
    box15.display();
    fill("red");
    box16.display();
    fill("magenta");
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    fill("black");
    box22.display();
    box23.display();
    
    box24.display();
    fill("blue");
    box25.display();
    
    ground1.display();
    stand1.display();
    stand2.display();
    polygon1.display();
    slingshot.display();

}
function mouseDragged(){
    Matter.Body.setPosition(polygon1.body,{x: mouseX, y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
    
    }