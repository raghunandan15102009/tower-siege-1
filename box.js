class Can {
    constructor(x,y,width,height) {
      var options = {
          isStatic:false,
          friction:2,
          density:0.3,
          stiffness:4
      }
      this.x=x;
      this.y=y;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
