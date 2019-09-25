
class BubBub{
 constructor(x,y){
   this.x = x;
   this.y = y;
   this.ySpeed = random(-2,2);
   this.xSpeed = random(-2,2);
   this.col = color(255, 100);
   this.diameter = 100
 }

  display(){
    stroke(255);
    fill(this.col);
    strokeWeight(3);
    ellipse(this.x,this.y,this.diameter)
    // scribble.scribbleEllipse(this.x, this.y, this.diameter,this.diameter);
  }

  move(){
      this.x = this.x + this.xSpeed
    this.y = this.y + this.ySpeed

    if (this.x > width || this.x < 0){
      this.xSpeed=this.xSpeed*-1
    }

    if (this.y > height || this.y < 0){
      this.ySpeed=this.ySpeed*-1
    }
  }

  bubClick(){
   let bubDist = dist(mouseX,mouseY,this.x,this.y)

   if(bubDist<this.diameter/2){
    console.log("clicky")
    multiBubs.push(new BubBub(random(200,400),random(200,400)));
   }
  }

}

class interestingBub extends BubBub{
 constructor(x,y,ySpeed,xSpeed,col,diameter){
   super(x,y,ySpeed,xSpeed,col,diameter)
   this.col = color(255,0,0,100);
 }

  resumeText(bubNum){
    if (bubNum==1){
    fill(0)
    textFont("Economica")
    textSize(16)
    text("a resumé \n thing", this.x-20,this.y)
    }
  }

  funText(bubNum){
    if (bubNum==2){
      fill(0)
    textFont("Economica")
    textSize(16)
     text("a fun \n thing", this.x-20,this.y)
    }
  }

  usefulText(bubNum){
   if (bubNum==3){
     fill(0)
    textFont("Economica")
    textSize(16)
    text("a useful \n thing", this.x-20,this.y)
   }

   mysticText(bubNum){
    if (bubNum==4){
      fill(0)
     textFont("Economica")
     textSize(16)
     text("a mystic \n thing", this.x-20,this.y)
    }
  }

  resumeClick(bubNum){
    let bubDist = dist(mouseX,mouseY,this.x,this.y)
   if (bubNum==1 && bubDist<this.diameter){
    console.log("resume click")
    window.open("https://cmorgantywls.github.io/resume/resume.html")
    }
  }

  funClick(bubNum){
    let bubDist = dist(mouseX,mouseY,this.x,this.y)
    if (bubNum==2 && bubDist<this.diameter){
    console.log("fun click")
    window.open("https://cmorgantywls.github.io/p5/tomagotchi/index.html")
    }
  }

  usefulClick(bubNum){
    let bubDist = dist(mouseX,mouseY,this.x,this.y)
    if (bubNum==3 && bubDist<this.diameter){
    console.log("useful click")
    window.open("https://github.com/nycdoe-cs4all/icm")
    }

  }

  mysticClick(bubNum){
    let bubDist = dist(mouseX,mouseY,this.x,this.y)
    if (bubNum==4 && bubDist<this.diameter){
    console.log("mystic click")
    window.open("https://zodiacflaskproject.herokuapp.com/")
    }

  }
}
