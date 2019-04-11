console.log("it connected")
function partyBG(){
  if (theSwitch == true){
  for(i=0;i<7;i++){
    wiggleGroup[i].display()
    wiggleGroup[i].move()
    drawRestart()
  }

  for(var z=0;z<10;z++){
   eyeGroup[z].display()
    eyeGroup[z].move()
  }
  }
}


function drawRestart(){
  fill(255,255,255,1);
  noStroke()
  rect(0,0,160,50);
  strokeWeight(1)
  textFont("Megrim")
  textSize(40)
  stroke(255,194,193);
  fill(70,70,70);
  text("RESTART",0,40)
}

function clickRestart(){
 if(mouseX<160 && mouseX>0 && mouseY>0 && mouseY<50 && theSwitch == true){
   return true
 }
  else{
    return false
  }
}

class Eye{
 constructor(){
  this.angle = 0.0
  this.placeX = random(50,windowWidth-50);
  this.placeY = random(50,windowWidth-50);
  this.gap = 2
  this.speed = 0.05
  this.x = this.place
  this.y = this.place
  this.colorOption = [color(179,119,118,10),color(255,255,219,10),color(255,194,193,10),color(135,175,204,10),color(127,157,179,10)]
  this.colorChoice = int(random(0,this.colorOption.length))
 }

  display(){
    stroke(0,0,0,20)
    noFill();
      ellipse(this.x, this.y, 2, 2);
  }

  move(){
   this.x = this.placeX + sin(this.angle)*this.gap
   this.y = this.placeY + cos(this.angle)*10
   this.angle+=this.speed
   this.gap+=this.speed
  }
}

function onName(){
  if(mouseX>windowWidth/2-100 && mouseX<windowWidth/2+100 && mouseY>0 && mouseY<100){
   return true
  }
  else {
    return false
  }
}


class Wiggle{
 constructor(){
  this.angle = 0.0
  this.place = random(50,windowWidth-50);
  this.gap = 2
  this.speed = 0.05
  this.x = this.place
  this.y = 0
  this.colorOption = [color(179,119,118,10),color(255,255,219,10),color(255,194,193,10),color(135,175,204,10),color(127,157,179,10)]
  this.colorChoice = int(random(0,this.colorOption.length))
 }

  display(){
  fill(this.colorOption[this.colorChoice]);
  stroke(0,0,0,25);
  ellipse(this.x,this.y,50);
  this.x += cos(this.angle) * this.gap
  }

  move(){
      this.angle += this.speed
   this.gap += this.speed
    this.y++
  }


}
