class Paper{
    constructor(x,y,width,height,angle){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction:0,
            density:1.2
        }
        this.image = loadImage("paper.png");

        this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(50,50,50,50, options)
		World.add(world, this.body);
    }

    display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			rectMode(CENTER)
			rect(0,0,this.w, this.h);
			pop()
			
	}
}

