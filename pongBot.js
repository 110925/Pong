var w = 800; h = 400;
var paddle1X =50; paddle1Y =h/2-25;
var paddle2X =w-70; paddle2Y =h/2; paddleSpeed = 2.5; paddleSpeedBot = 3;
var pongX = w/2; pongY = h/2; pongSpeedY = 2; pongSpeedX = 2;
var score1 = 0; score2 = 0;

function setup() {
  createCanvas(800, 400);
  
  Easy = createButton('Easy');
  Easy.mousePressed(DiffEasy);
  
  Medium = createButton('Medium');
  Medium.mousePressed(DiffMedium);  
  
  Hard = createButton('Hard');
  Hard.mousePressed(DiffHard);
  
  Hardcore = createButton('Hardcore');
  Hardcore.mousePressed(DiffHardcore);
}

//Difficuilties_Start----------------------------//
function DiffEasy(){
  pongSpeedX = 1; pongSpeedY = 1;
  pongX = w/2; pongY = h/2; 
  paddleSpeed = 1.5;
  paddleSpeedBot = 1.5;
}
function DiffMedium(){
  pongSpeedX = 2.5; pongSpeedY = 2.5;
  pongX = w/2; pongY = h/2; 
  paddleSpeed = 2;
  paddleSpeedBot = 2.5
}
function DiffHard(){
  pongSpeedX = 4; pongSpeedY = 4;
  pongX = w/2; pongY = h/2; 
  paddleSpeed = 3;
  paddleSpeedBot = 3.5;
}function DiffHardcore(){
  pongSpeedX = 5; pongSpeedY = 5;
  pongX = w/2; pongY = h/2; 
  paddleSpeed = 4;
  paddleSpeedBot = 4.5;
}
//Difficuilties_End------------------------------//


function draw() {
  
  
  
  background(0); //backgroundColor
  fill(255); //itemsColor
  setLineDash([0]); //noDash
  
  rect(paddle1X, paddle1Y, 20,60); //paddle1
  rect(paddle2X, paddle2Y, 20,60); //paddle2
  ellipse(pongX, pongY, 20,20); //pong
  pongX += pongSpeedX; pongY += pongSpeedY; //pongMove
  if(pongX+10 > w || pongX-10 < 0){pongSpeedX = pongSpeedX *-1} //pongbounceX
  if(pongY+10 > h || pongY-10 < 0){pongSpeedY = pongSpeedY*-1;} //pongbounceY
  
  if(pongX-10 < paddle1X+20 && pongX+10 > paddle1X+20 && pongY+10 > paddle1Y && pongY-10 < paddle1Y +60){pongSpeedX = pongSpeedX *-1;} //pongbouncePaddle1
  if(pongX+10 > paddle2X && pongX-10 < paddle2X && pongY+10 > paddle2Y && pongY-10 < paddle2Y +60){pongSpeedX = pongSpeedX *-1;} //pongbouncePaddle2
  if(pongX > w-30 ){pongX = w/2; pongY = h/2; score1 = score1 + 1;} //pongOutOfGame
  if(pongX < 30){pongX = w/2; pongY = h/2; score2 = score2 + 1;} //pongOutOfGame

  if (keyIsDown(UP_ARROW) && paddle2Y > 0){paddle2Y -= paddleSpeed;} //paddle2MoveUp
  if (keyIsDown(DOWN_ARROW) && paddle2Y+60 < h){paddle2Y += paddleSpeed;} //paddle2MoveDown
  
  if (pongY > 150 && pongX > 300 && pongX < 500 && pongSpeedY > 0 && pongSpeedX < 0 && paddle1Y+60 > 200) {
    paddle1Y -= paddleSpeedBot;}
  if (pongY < 150 && pongX > 300 && pongX < 500 && pongSpeedY < 0 && pongSpeedX < 0 && paddle1Y < 200) {
    paddle1Y += paddleSpeedBot;}

  if (pongY < paddle1Y+20 && pongSpeedX < 0 && pongX < 300){paddle1Y -= paddleSpeedBot;} //paddleBotMoveUp
  if (pongY > paddle1Y+40 && pongSpeedX < 0 && pongX < 300){paddle1Y += paddleSpeedBot;} //paddleBotMoveDown

  textSize(40);
  text(score1, 150,100)
  text(score2, w-150,100)
  
  stroke(255);
  strokeWeight(2);
  noFill();
  setLineDash([5,10]); //dottedLineMaker
  line(w/2, 0, w/2, h); //line
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}