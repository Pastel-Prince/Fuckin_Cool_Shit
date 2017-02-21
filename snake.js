function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.speed = 10;
    this.total = 0;
    this.tail = [];
    this.tailCol= [];
    this.light = 60;

    this.dir = function(x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    this.eat = function(pos) {
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
            this.total++;
            this.speed += 1;
            console.log(this.speed);
            this.randCol = Math.floor((Math.random()*360)+1);
            return true;
        } else {
            return false;
        }
    }

    this.death = function() {
      for (var i = 0; i < this.tail.length; i++){
        var pos = this.tail[i];
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
          this.total = 0;
          this.tail = [];
          this.tailCol= [];
          this.speed = 10;
        }
      }
    }
//
    this.update = function() {
        if (this.total === this.tail.length) {
            for (var i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1];
                this.tailCol[i] = this.tailCol[i+1]
            }
        }
        this.tail[this.total - 1] = createVector(this.x, this.y);
        this.tailCol[this.total] = color(this.randCol, 100, this.light);

        this.x = this.x + this.xspeed * scl;
        this.y = this.y + this.yspeed * scl;

        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);
    }

    this.show = function() {
        //this.light = 60;

        for (var i = 0; i < this.total; i++) {

          //this.light -= 10;
            rect(this.tail[i].x, this.tail[i].y, scl, scl)
            fill(this.tailCol[i]);
            //fill(color(Math.floor((Math.random()*360)+1),100,this.light));
        }
        fill(255);
        rect(this.x, this.y, scl, scl)
    }
}
