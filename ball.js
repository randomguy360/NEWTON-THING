
class Ball {
    constructor(x, y,r) {
      var options = {
        isStatic:false,
        restitution:1,
          friction:0,     
          density:1.4
              
      }
      this.radius = r;
      this.body = Bodies.circle(x, y, 10, options);
      
      
      
      World.add(world, this.body);
    }
    display(){
      
       ellipseMode(RADIUS);
      ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);

      
    }
  };
  