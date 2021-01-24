class Circle {
constructor(x, y, radius){
var options={
 restitution: 0.3,
 friction: 5,
 density: 1

}
this.body = Bodies.circle(x, y,radius, options);
this.width = width;
this.height = height;

World.add(world, this.body);

}
display(){

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("black")
    fill("blue");
    elipse(200,200, radius);
    pop();

}
}