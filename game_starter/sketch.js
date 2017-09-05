var monster_img;
var cookie_img;
var points;
var monster_x, monster_y;
var cookie_x, cookie_y;
var misses = 0;
var cake_x, cake_y;
var pie_x, pie_y;
var pie_img;
var cake_img;


function preload() {
  monster_img = loadImage("assets/cookie_monster.png");
  cookie_img = loadImage("assets/cookie.png");
  cake_img = loadImage("assets/cake.png");
  pie_img = loadImage("assets/pie.png");
}

function setup() {
  createCanvas(720, 400);
  monster_x = 150
  monster_y = height-150;
  cookie_x = 725;
  cookie_y = random(350);
  points = 0;
  cake_x = 0;
  cake_y = 0;
  pie_x = 0;
  pie_y = 0;
}

function draw() {
  background(200);
  displayPoints();
  displayMisses();
  
  if(misses >= 3) {
    fill(25);
    textSize(100);
    text("Game Over", 100,100);
    textSize(40);
    text("Press Any Key to Restart", 130,200);
  }
  else  {
  
    image(monster_img, monster_x, monster_y);
    image(cookie_img, cookie_x, cookie_y);
    image(cake_img, cake_x, cake_y);
    image(pie_img, pie_x, pie_y);
  
    moveCookie();
    moveMonster();
    moveCake();
    movePie();
    checkForChomp();
  }
}

function displayPoints() {
  fill(160);
  textSize(150);
  text(points,10,370);
  textSize(20);
  text("Your Score", 10,250);
  
}

function displayMisses() {
  fill(255,0,0);
  textSize(100);
  text(misses,600,370);
  textSize(20);
  text("Your Misses",600,285)
}

function moveCake() {
  if (dist(cake_x, cake_y, monster_x, monster_y) < 60)
  {
    misses += 1;
    cake_x = 725 + random(2000);
    cake_y = random(350);
  }
  if(cake_x < 0 ){
 
    cake_x = 725 + random(2000);
    cake_y = random(350);
  }
  else 
    cake_x -= 10;
}

function movePie() {
  if(dist(pie_x,pie_y,monster_x,monster_y)< 100) {
    misses +=1;
    pie_x = 725 + random(3000);
    pie_y = random(350);
  }
  if(pie_x < 0){
   
    pie_x = 725 + random(3000);
    pie_y = random(350);
  }
  else
    pie_x -= 8;
}
function moveCookie() {
  if(cookie_x < 0){
    misses += 1;
    cookie_x = 725;
    cookie_y = random(350);
  }
  else 
    cookie_x -= 4 + points/2;
}

function moveMonster() {
  if(keyIsDown(UP_ARROW) && monster_y > 0)
    monster_y -= 2;
  if(keyIsDown(DOWN_ARROW) && monster_y < height-150)
    monster_y += 2;
  if(keyIsDown(LEFT_ARROW) && monster_x > 0)
    monster_x -= 2;
  if(keyIsDown(RIGHT_ARROW) && monster_x < width-150)
    monster_x += 2;
}

function checkForChomp() {
  var d = dist(cookie_x, cookie_y, monster_x, monster_y);
  if (d < 100) {
    points += 1;
    cookie_x = 725;
    cookie_y = random(350);
  }
}

function keyPressed() {
  if(misses>=3){
    misses = 0;
    points = 0;
  }
  
}