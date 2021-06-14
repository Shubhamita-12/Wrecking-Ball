class Ball {
  constructor(){
    var options = {
      density : 1,
      frictionAir : 0.005,
    }

    this.body = Bodies.rectangle(200,200,100,100,options);
    World.add(world,this.body);
  }

  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipse(0,0,100,100);
    pop();
  }
}
