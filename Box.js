class Box{
  constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':0.4
      }
      this.body = Bodies.rectangle(x, y, 70, 70, options);
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      fill("brown");
      rect(0, 0, 70, 70);
      pop();
    }
}
