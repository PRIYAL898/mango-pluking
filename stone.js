class Stone{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0,
            density:1.2,
            friction:1,
        }

        this.stone=loadImage("images/Priyal-mangoes-main/stone.png");
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.stone,pos.x,pos.y,90,90)
       // this.body.position.x=mouseX;
        //this.body.position.y=mouseY;
        //var pos=this.body.position;
        //rectMode(CENTER);
        //rect(pos.x,pos.y,this.width,this.height);
        //fill("black");
    }
}