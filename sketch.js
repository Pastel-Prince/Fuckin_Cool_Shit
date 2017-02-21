var s;
var scl = 20;
var food;

function setup() {
    createCanvas(900, 600);
    s = new Snake();
    pickLocation();
    colorMode(HSL);
}

function draw() {
    background(51);
    s.death();
    s.update();
    s.show();
    frameRate(s.speed);

    if (s.eat(food)) {
      pickLocation();
    };

    fill(s.randCol,100,s.light);
    rect(food.x, food.y , scl, scl);
    fill(255)
}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        s.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        s.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        s.dir(1, 0)
    } else if (keyCode === LEFT_ARROW) {
        s.dir(-1, 0);
    }
}
forceEat = function(){
  if (keyCode === UP_ARROW){
    s.total++;
    s.speed += 1;
    console.log(this.speed);
    s.randCol = Math.floor((Math.random()*360)+1);
    return true;
  }
}
