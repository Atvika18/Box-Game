var canvas;
var music;
var box1, box2, box3, box4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(700,580,180,20);
    box1.shapeColor = "pink";
    box2 = createSprite(500,580,180,20);
    box2.shapeColor = "blue";
    box3 = createSprite(300,580,180,20);
    box3.shapeColor = "yellow";
    box4 = createSprite(100,580,180,20);
    box4.shapeColor = "purple";
    edge1 = createSprite(1,1,2000,1);
    edge2 = createSprite(1,600,1,2000)
    edge3 = createSprite(800,1,1,2000)
    edge4 = createSprite(800,600,1,2000)

    //create box sprite and give velocity

    box = createSprite(random(20,70), 200, 50,50);
    box.shapeColor = "white";
    box.velocityX = (random(2,7));
    box.velocityY = (random(4,9));
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
createEdgeSprites()



    //add condition to check if box touching surface and make it box
    if (box1.isTouching(box) && box.bounceOff(box1))
    {
        box.shapeColor= "pink";
    }
    else if (box2.isTouching(box) && box.bounceOff(box2))
    {
        box.shapeColor= "blue";
        music.play();
    }
    else if (box3.isTouching(box) && box.bounceOff(box3))
    {
        box.shapeColor= "yellow";
        music.stop();
    }
    else if (box4.isTouching(box) && box.bounceOff(box4))
    {
        box.shapeColor= "purple";

    }

box.bounceOff(edge1);
box.bounceOff(edge2);
box.bounceOff(edge2);
box.bounceOff(edge4);
   



    drawSprites();
}
