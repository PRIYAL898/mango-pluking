class Mango{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
        }

        this.mango=loadImage("images/Priyal-mangoes-main/mango.png");
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
        
    }

    display(){
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.mango,pos.x,pos.y,80,60);
        //var pos=this.body.position;
        //rectMode(CENTER);
        //rect(pos.x,pos.y,this.width,this.height);
    }


}
