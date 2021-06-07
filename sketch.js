var canvas;
var music;
var wall1;
var wall2;
var wall3;
var wall4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1000,600);

    //create 4 different surfaces

wall1=createSprite(40,550,300,40);
wall1.shapeColor="red";
wall2=createSprite(350,550,220,40);
wall2.shapeColor="yellow";
wall3=createSprite(620,550,220,40);
wall3.shapeColor="pink";
wall4=createSprite(890,550,220,40);
wall4.shapeColor="orange";

   //create box sprite and give velocity

   box=createSprite(50,50,50,50);
   box.shapeColor="white"

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);

    if (keyDown(RIGHT_ARROW)) {
       box.velocityX=8;
       }

    if (keyDown(LEFT_ARROW)) {
        box.velocityX=-8;
    }
    if (keyDown(DOWN_ARROW)){
        box.velocityY=8;
    }

    if (keyDown(UP_ARROW)){
        box.velocityY=-8;
    }

    //add condition to check if box touching surface and make it box

    if (wall1.isTouching(box)){
        box.shapeColor="red"
    }

    if (wall2.isTouching(box)){
        box.shapeColor="yellow";
    }

    if (wall3.isTouching(box)){
        box.shapeColor="pink";
    }

    if (wall4.isTouching(box)){
        box.shapeColor="orange";
    }

    box.bounceOff(wall1);
    box.bounceOff(wall2);
    box.bounceOff(wall3);
    box.bounceOff(wall4);

    createEdgeSprites();

    drawSprites();
}
