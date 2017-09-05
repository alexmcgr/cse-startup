  var bgColor = 155;

function setup() {
  //could also use background(color(random(256),random(256),random(256))
  createCanvas(400,400);
  frameRate(60);
}
var drawShades = false;
function draw() {
  //colors defined so they are easier to call back
  pink = color(255,3,246);
  purple = color(148,0,173);
  gr = color(99,255,0);
  darkgr = color(8,158,52);
  white = color(255,255,255);
  black = color(0,0,0);
  background(68,182,255);
  fill(white);
  rect(60,100,200,75,30);
  cloud(70,100,80,100);
  cloud(130,100,80,150);
  cloud(190,110,60,120);
  cloud(250,120,80,70),
  
  rect(240,230,140,60,30);
  cloud(250,230,56,50);
  cloud(280,230,56,50);
  cloud(310,240,42,50);
  cloud(330,230,56,50),
  
  
  stroke(0,0,0);
  hill(-100,450,200,300);
  hill(100,450,300,200);
  hill(0,400,200,300);
  hill(300,400,200,150)
  translate(mouseX-200,mouseY-240);
  noStroke();
  
  body(200,240,90,200);


  leftarm(110,180,80,10);
  leftarm(110,180,10,90);
  
  rightarm(210,180,80,10);

  stalk(230,100,10,70);

  head(200,140,100,50);

  eye(230,60,30,30)

  eye(170,60,30,30)

  
  //fill on the body
  noStroke();
  fill(darkgr);
  quad(170,300,185,175,215,175,230,300);
  
  //feet
  fill(bgColor);
  quad(150,350,180,330,220,330,250,350);
  
  //Mouth
  stroke(black);
  fill(white);
  ellipse(200,140,70,30);
  noStroke();
 
  
  if (drawShades){
  fill(purple);
  ellipse(230,60,30,30);
  ellipse(170,60,30,30); 
  } 
  
}

function body(x,y,w,h) {
  fill(color(purple));
  ellipse(x,y,w,h);
}

function head(x,y,w,h)  {
  fill(color(bgColor));
  ellipse(x,y,w,h);
}

function eye(x,y,w,h) {
  stroke(black);
  fill(color(white));
  ellipse(x,y,w,h);
  fill(color(black));
  ellipse(x,y+5,w/2,h/2);
}

function stalk(x,y,w,h) {
  fill(color(purple));
  ellipse(x,y,w,h);
  ellipse(x-60,y,w,h);
}

function rightarm(x,y,w,h)  {
  c = 90;
  d = 80;
  b = 10;
  fill(color(bgColor));
  rect(x,y,d,b);
  rect(x+70,y,b,c);
  rect(x-20,y+30,d,b);
  rect(x+50,y+30,b,c);
  rect(x-40,y+60,d,b);
  rect(x+30,y+60,b,c);
}

function leftarm(x,y,w,h)  {
  fill(color(bgColor));
  rect(x,y,w,h);
  rect(x+20,y+30,w,h);
  rect(x+40,y+60,w,h);
}

function cloud(x,y,w,h)  {
  fill(color(white));
  ellipse(x,y,w,h);
}
function hill(x,y,w,h) {
  fill(color(0,255,0));
  arc(x+(w/2),y,w,h,PI,0,PIE);
}

function mousePressed() {
  drawShades = true;
}

function keyPressed() {
  if (keyCode === ENTER) {
    bgColor = color(random(256),random(256),random(256));
  }
}