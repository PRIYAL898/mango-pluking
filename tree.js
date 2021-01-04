class Tree{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
        }

    this.tree=loadImage("images/Priyal-mangoes-main/tree.png");
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    
    }
  
    display(){
        imageMode(CENTER);
        image(this.tree,650,300,300,600);
        //var pos=this.body.position;
        //rectMode(CENTER);
       // rect(pos.x,pos.y,this.width,this.height);
        //fill("brown");
    }
}