//main page
//name, etc
//floatie bubs that bounce around - three of an
//extended class that inherits stuff from BubBub
//floaties should bounce on side of screen, interact on hover/click
//if you click -> bubbles disappear or multiply???
//if you click the 3, redirect to next sketch
//3 other sketches:
//resume (static)
//tomagotchi (fun object)
//math program??? (useful IDK)

//gonna push some BubBubs in here.
let floaties = []
let multiBubs = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  //create new scribble object to use l8r


    noStroke();
  for (var i = 0; i < 13; i++) {
    //makes sure to generate 10 bubbles
    var x = random(200,400);
    //sets a random location for x and y
    var y = random(20,180);

    if (i%3 == 0 && i != 0){
      floaties[i] = new interestingBub(x,y)
    }
    else{
    floaties[i] = new BubBub(x,y)
    }
    //adds a new bubble which is an OBJECT into my ARRAY.
  }


}

function draw() {
  background(220);
  let bubNum=0

  //add motion to floaty bubs
   for (var i = 0; i < floaties.length; i++) {
    floaties[i].move();
    floaties[i].display();

     if(i%3==0 && i != 0){
       bubNum++
      floaties[i].resumeText(bubNum)
       floaties[i].funText(bubNum)
       floaties[i].usefulText(bubNum)
       floaties[i].mysticText(bubNum)
       //console.log(bubNum)
     }

   }

  for(var z = 0;z<multiBubs.length;z++){
    multiBubs[z].move()
    multiBubs[z].display()
  }

  textFont("Megrim")
  textSize(36)
  fill(0);
  text("Courtney Morgan", width/4,height/2)

  textFont("Economica")
  textSize(18)
  text("Click interesting bubs. Don't miss.", width/4,height/2+25)

}

function mouseClicked(){
  let bubNum2 = 0

  for (var i = 0; i < floaties.length; i++) {

    if(i%3==0 && i != 0){
       bubNum2++
      floaties[i].resumeClick(bubNum2)
       floaties[i].funClick(bubNum2)
       floaties[i].usefulClick(bubNum2)
       floaties[i].mysticClick(bubNum2)
       //console.log(bubNum)
     }
    else{
      floaties[i].bubClick();
    }
   }
}
