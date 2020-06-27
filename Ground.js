class ground{
constructor(x,y,width,height){
var ground_options={
isStatic:true
}

this.gr=Bodies.rectangle(x,y,width,height,ground_options)
this.height=height
this.width=width
World.add(world,this.gr)

}
display(){
rectMode(CENTER)
fill(255)
rect (this.gr.position.x,this.gr.position.y,this.width,this.height)
pop ();
}
}
