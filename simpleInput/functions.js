let animalList = ["red panda","penguin","golden retriever","shark","dolphin","duck","elephant","kiwi bird","french bulldog","cat"]

function theEnd(){
  alert(`Idk you get ${total} of something I guess?`)
  window.location.href = "https://en.wikipedia.org/wiki/Problem_gambling";
}

function getRandomNum(min,max){
  return Math.floor((Math.random() * max)+min);
}

function checkWin(num1,num2,num3){
  if(num1 == num2 && num2 == num3){
    //transitive property b
    console.log("win! :)")
    return "win"
  }
  else if(num1 == num2 && num1 != num3){
    console.log("kinda!")
    return "kinda"
  }
  else{
    console.log("lose. :(")
    return "lose"
  }
}

function updateGame(theStatus,total){
  if(theStatus=="win"){
    theBody.classList.add("bodyWin")
    theBody.classList.remove("kindaBody")
    theBody.classList.remove("loseBody")

    lEmpty.innerHTML=`<h1>🤩</h1>`
    rEmpty.innerHTML=`<h1>🤩</h1>`
    lEmpty.style.background = `#49D2FF`
    rEmpty.style.background = `#49D2FF`
    alert('Win! +25!')
    total+=25
  }
  else if(theStatus=="kinda"){
    theBody.classList.add("kindaBody")
    theBody.classList.remove("bodyWin")
    theBody.classList.remove("loseBody")

    lEmpty.innerHTML=`<h1>🙃</h1>`
    rEmpty.innerHTML=`<h1>🙃</h1>`
    lEmpty.style.background = `#8123E8`
    rEmpty.style.background = `#8123E8`
    alert('Little Win! +10!')
    total+=10
  }
  else{
    theBody.classList.remove("bodyWin")
    theBody.classList.remove("kindaBody")
    theBody.classList.add("loseBody")
    lEmpty.innerHTML=`<h1>😭</h1>`
    rEmpty.innerHTML=`<h1>😭</h1>`
    lEmpty.style.background = `#FF4733`
    rEmpty.style.background = `#FF4733`
    alert('LOSE! -10!')
    total-=10
  }
}

function getGiphyData(theDiv,num){
  //I need to:
  //fetch data from Giphy API
  //make a specific gif appear
  console.log(`prepare for ${animalList[num]}`)
  var url = `http://api.giphy.com/v1/gifs/search?api_key=6MOdM41myBUn72gaz2P4RGBTBrs5UFfZ&q=${animalList[num]}&limit=25&offset=0&rating=pg&lang=en`

  fetch(url)
  .then(data => data.json())
  .then(res => {
    console.log(res)
    //res currently holds results of your search as a json object
    //look in console to see what's there!
    var arrayOfGifs = res.data
    var firstGif = arrayOfGifs[1]
    var gifURL = firstGif.images.fixed_width.url

    theDiv.innerHTML = `<img src=${gifURL}>`
    console.log("image displayed")
  })
  .catch(error => console.log(error))
}
