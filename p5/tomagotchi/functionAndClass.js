function createTimer(){
  var secs = int(millis()/1000)
  return secs
}

//Tomagotchi function

class Tomagotchi{
 constructor(){
   this.x = 200
   this.y = 200
   this.xSpeed = random(-2,2)
   this.ySpeed = random(-2,2)
   this.col = color(255,255,255)
   this.faceDiameter = 200
   this.fun=1000
   this.hunger=1000
   this.dirt=1000
 }

  display(){
  text("Hunger: "+this.hunger,20,20)
  text("Fun: "+this.fun,20,30)

    if(this.fun>900 && this.hunger>500){
      //content pet
      strokeWeight(0);
      fill(this.col)
      ellipse(this.x,this.y,this.faceDiameter);
      strokeWeight(3);
      noFill(0)
      arc(this.x,this.y,50,30,180,0);
      arc(this.x+80,this.y,30,30,180,0);
      arc(this.x+50,this.y+25,30,30,0,180);
    }

    if(this.fun<900 && this.hunger>500){
      //bored pet
      this.col = color(111,106,255);
      strokeWeight(0);
      fill(this.col)
      ellipse(this.x,this.y,this.faceDiameter);
      strokeWeight(3);
      noFill(0)
      arc(this.x,this.y,50,30,0,180);
      arc(this.x+80,this.y,30,30,0,180);
      arc(this.x+50,this.y+25,30,30,180,0);
    }

    if(this.hunger<500){
      this.col = color(255,0,0);
      strokeWeight(0);
      fill(this.col)
      ellipse(this.x,this.y,this.faceDiameter);
      strokeWeight(3);
      fill(255)
      ellipse(this.x,this.y,50,30);
      ellipse(this.x+80,this.y,30);
      fill(0)
      ellipse(this.x,this.y,10);
      ellipse(this.x+80,this.y,10)
      arc(this.x+50,this.y+25,30,30,180,0);

    }

  }

  move(){
    this.x = this.x + this.xSpeed
    this.y = this.y + this.ySpeed

    if (this.x > width-50 || this.x < 50){
      this.xSpeed=this.xSpeed*-1
    }

    if (this.y > height/2 || this.y < 50){
      this.ySpeed=this.ySpeed*-1
    }
  }

  funChange(seconds){
    if(seconds%10==0){
      this.fun -= 1
      console.log(this.fun)
    }
  }

  hungerChange(seconds){
    if(seconds%5==0){
      this.hunger-=1
    }
  }

  makeButtons(){
  	strokeWeight(0)
    fill(173,106,255,100)
    ellipse(width/4,height/2+125,75)
    fill(0)
    textFont("Economica")
    textSize(18)
    text("PLAY!",width/4-13,height/2+125)

    strokeWeight(0)
    fill(255,155,13,100)
    ellipse((width/4)*2,height/2+125,75)
    fill(0)
    textFont("Economica")
    textSize(18)
    text("FEED!",(width/4-8)*2,height/2+125)

    strokeWeight(0)
    fill(112,169,255,100)
    ellipse((width/4)*3,height/2+125,75)
    fill(0)
    textFont("Economica")
    textSize(18)
    text("DRESS!",(width/4-8)*3,height/2+125)
  }

  onClick(){
    let playDist = dist(mouseX,mouseY,width/4,height/2+125)
    let feedDist = dist(mouseX,mouseY,(width/4-8)*2,height/2+125)
    let dressDist = dist(mouseX,mouseY,(width/4-8)*3, height/2+125)

    if (playDist<75/2){
     this.fun++
      console.log(this.fun)
    }

    if (feedDist<75/2){
     this.hunger+=5
    }

    if(dressDist<75/2){
     this.col = color(random(255),random(255),random(255));
    }
  }
}
