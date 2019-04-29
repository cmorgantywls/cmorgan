console.log("I'm baby.")

let theButton = document.querySelector(`#playButton`)
let theBody = document.querySelector(`body`)
console.log(theBody)
let cashOut = document.querySelector(`#cashout`)
let lEmpty = document.querySelector(`#empty1`)
let rEmpty = document.querySelector(`#empty2`)
let first = document.querySelector(`#first`)
let second = document.querySelector(`#second`)
let third = document.querySelector(`#third`)
let total = 0

theButton.addEventListener("click", e=>{
  console.log("button clicked")
  let num1 = getRandomNum(0,animalList.length)
  let num2 = getRandomNum(0,animalList.length)
  let num3 = getRandomNum(0,animalList.length)
  console.log(num1,num2,num3)

 let theStatus = checkWin(num1,num2,num3)

 updateGame(theStatus,total)

  getGiphyData(first,num1)
  getGiphyData(second,num2)
  getGiphyData(third,num3)
})

cashOut.addEventListener("click", e=>{
  theEnd();
})
