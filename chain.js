class Chain{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffnes:0.04,
            length:10
        }

         
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
        this.pointB=pointB;

    } 

    display(){
        if(this.chain.bodyA!=null){
            var pointA=this.chain.bodyA.position;
            var pointB=this.pointB;
            strokeWeight(7);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
     }

    fly(){
        this.chain.bodyA=null;
    }
}