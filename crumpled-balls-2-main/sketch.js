const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var binImg,bin;

function preload(){
    binImg = loadImage("Images/dustbingreen.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    paper= new Paper();

    bin = createSprite(964,520,20,20);
    bin.addImage(binImg);
    bin.scale = 0.45;

    leftSide = new Dustbin(550, 620, 20, 100);
    bottom = new Dustbin(610, 660, 100, 20);
    rightSide = new Dustbin(670, 620, 20, 100);
  
}

function draw(){
    background(0);
    Engine.update(engine);

    

    
    ground.display();
    paper.display();
    leftSide.display();
    bottom.display();
    rightSide.display(); 
      
    drawSprites();
}

function mouseDragged(){

  Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY});
}


function mouseReleased(){
  
  sling1.fly();
}
function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:74,y:-75});
    }
}
