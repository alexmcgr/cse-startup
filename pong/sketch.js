var paddle;
var paddle2;
var ball;
var points;
var paddle_x = 50;
var paddle2_x = 700;
var paddle_y;
var paddle2_y;
var ball_x;
var ball_y;
var ballHit;
var ballHit2;
var xspeed = -3;
var yspeed = 0;

function setup() {
  createCanvas(750,500);
	paddle_y = 250;
	
	points = 0
	ball_x = 375;
	ball_y = 250;
	xspeed = -3;
	yspeed = 0;
	paddle_x = 50;
	paddle2_y = 250;
	paddle2_x = 700;
}

function draw() {
  background(100);
  displayPoints();
  movePaddle();
  paddle(50,paddle_y,30,100);
  paddle2(700,paddle_y,30,100);
  ball(ball_x,ball_y,35,35)
		moveBall();
		ballHit();
		ballHit2();
		ceiling();
		
		//text(round(dist(ball_x, ball_y, paddle_x, paddle_y)), 250, 150);
		text(round(dist(mouseX, mouseY, paddle2_x, paddle_y)), 250, 150);
		//text(round(dist(ball_x, ball_y, paddle2_x, paddle2_y)), 450, 150);
	
}

function paddle(x,y,w,h)	{
	rectMode(CENTER);
	fill(0,255,0);
	rect(x,y,w,h);
}


function paddle2(x,y,w,h)	{
	rectMode(CENTER);
	fill(0,255,0);
	rect(x,y,w,h);
}

function displayPoints()	{
	fill(0,255,0);
	textSize(75);
	textAlign(CENTER);
	text(points,375,100);
}

function movePaddle()	{
	if(keyIsDown(UP_ARROW) && paddle_y > 50)
		paddle_y -= 3;
	if(keyIsDown(DOWN_ARROW) && paddle_y < height-50)
		paddle_y += 3;
}

function ball(x,y,w,h)	{
	fill(255);
	ellipseMode(CENTER);
	ellipse(x,y,w,h);
}

function moveBall()	{
	ball_x += xspeed;
	ball_y += yspeed;
	textSize(40);
	if (ball_x < 0)	{
		text("Game Over",375,250);
	}
	if(ball_x > 750) {
		text("Game Over", 375,250);
	}
}

function ceiling() {
	if(ball_y < 0)	{
		ball_y=0;
		yspeed = -yspeed;
	}
	if(ball_y > 500)	{
		ball_y=500;
		yspeed = -yspeed;		
	}
}

function ballHit()	{
	var d =dist(ball_x, ball_y, paddle_x, paddle_y);
	if (d < 20)	{
		yspeed = random(1,5);
		xspeed = 3;
		points += 1;
	}
}

function ballHit2()	{
	var c =dist(ball_x, ball_y, paddle2_x, paddle_y);
	if (c < 20)	{
		yspeed = random(1,5);
		xspeed = -3;
		points += 1;
	}
}
