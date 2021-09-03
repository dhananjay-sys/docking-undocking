var iss, spacecraft1,spacecraft2,spacecraft3,spacecraft4;
var hasDocked;
var hasDocked = false;

function setup() {
  createCanvas(1600,800);
  if (hasDocked){
    spacecraft.x = spacecraft2.x + random(-1,1);
  
  if (keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y = 2;
  }

  if (keyDown("DOWN_ARROW")){
    spacecraft.addImage(spacecraft1img);
  }
  if (keyDown("LEFT_ARROW")){
    spacecraft.addImage(spacecraft3img);
  }
  if (keyDown("RIGHT_ARROW")){
    spacecraft.addImage(spacecraft4img);
  }
}
}
function preload() {

  issimg = loadImage("../images/iss.png");
  spacebg = loadImage("../images/spacebg.jpg");
  spacecraft1img = loadImage("../images/spacecraft1.png");
  spacecraft2img = loadImage("../images/spacecraft2.png");
  spacecraft3img = loadImage("../images/spacecraft3.png");
  spacecraft4img = loadImage("../images/spacecraft4.png");
}

function draw() {
  background(255,255,255);
  background(spacebg);

  iss = createSprite(800,400);
  iss.addImage(issimg);
  
  spacecraft = createSprite(850,500);
  spacecraft.addImage(spacecraft1img);
  spacecraft.scale = 0.15

  drawSprites();

  iss.display()
}