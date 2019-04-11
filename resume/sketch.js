let wiggleGroup = []
let eyeGroup = []

let theSwitch;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  theSwitch = false;

   for(var z=0;z<10;z++){
   wiggleGroup[z] = new Wiggle()
  }


  for(var z=0;z<10;z++){
   eyeGroup[z] = new Eye()
  }

}

function draw() {
  console.log(theSwitch)

  partyBG()
}

function mousePressed(){
  if (onName() == true && theSwitch == false){
    theSwitch = true
  }

  if(clickRestart()==true){
   theSwitch = false
   window.location.reload()
  }
}
