class Ball {

    constructor(x,y,r)
    {
        var options = {

            'restitution' : 1.0 ,
            'isStatic' : false,

            'friction' : 0.5,
            'density' : 1.2
          }
 this.x = x
 this.y = y
 this.r = r
this.body = Bodies.circle(this.x,this.y,this.r/2,options)
World.add(world,this.body)
 


    }


display()
{
   var pos = this.body.position;
  pos.x = mouseX;
   pos.y = mouseY;

  
   push();

   translate(pos.x,pos.y);
   rectMode(CENTER);
   strokeWeight(3);
   fill("white")
   ellipse(0,0,this.r,this.r)

   pop();




}




}