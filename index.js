// document.querySelector("h1").style.color = "red";

let gameStatus = 0;

// add event listener to document that listens for key presses to start the game
$(document).keypress((e) => {
  console.log(e.key);
  // start game
  if (gameStatus !== 1) {
    gameStatus = 1;
    gameStatus = startGame();    // DOES THIS WORK?
  }
  // else the game is still going; don't start a game
});

function startGame() {
  console.log("Game start!");
  
  let currColor = 0; // 0: no color assigned
  let currSequence = []; // current sequence to match to
  let colorMap = {
    1: "green",
    2: "red",
    3: "yellow",
    4: "blue",
  }

  // genereate a random number between 1 and 4; assign numbers to colors via a map?
  currColor = Math.floor(Math.random() * 4) + 1;

  // store sequence in a running array
  currSequence.push(currColor);

  // change title of game
  $("h1").text(`Level ${currSequence.length}`);

  // show first color in the sequence
  // COLOR ANIMATION AND SOUND HERE
  console.log(colorMap[currColor]);
  let btnSound = new Audio('');


  switch (colorMap[currColor]) {
    case "green":
      console.log("switch case green");
      btnSound = new Audio("sounds/green.mp3");
      btnSound.play();
      // $(".green")
      break;
    case "red":
      console.log("switch case red");
      btnSound = new Audio("sounds/red.mp3");
      btnSound.play();
      // $(".red")
      break;
    case "yellow":
      console.log("switch case yellow");
      btnSound = new Audio("sounds/yellow.mp3");
      btnSound.play();
      // $(".yellow")
      break;
    case "blue":
      console.log("switch case blue");
      btnSound = new Audio("sounds/blue.mp3");
      btnSound.play();
      // $(".blue")
      break;
  
    default:
      break;
  }

  // check user input against running array of colors (i.e. listen for user input)
  function checkSequence(currSequence, currIdx, currBtnColor) {


    while (currIdx < currSequence.length) {
      // check current btn button color against current index of color sequence
      if (currBtnColor === currSequence[currIdx]) {
        // sequence is correct so far
        console.log("good so far!");
        // loop will end automatically when currIdx equals the length of the sequence
      }
      else {
        console.log("wrong color. game over!");
        return -1;
      }
      currIdx++;
    }

    return currIdx;
  }

    let sequenceIdx = 0;
    // add click listener to buttons
    $(".btn").click((e) => {
      console.log(e.target.id);
      let currBtnColor = e.target.id;

      let newIdx = checkSequence(currSequence, sequenceIdx, currBtnColor);
      console.log("newIdx:", newIdx);
      // if newIdx is -1, game is over
      if (newIdx === -1) {
        console.log("game over!");
        return -1;
      }
      // else if newIdx is equal to sequence length, we have completed the sequence so far! time to add a new color (how do I do that? lol)
    });

  // while () {
    // continue while user's color matches the current value in the squence; otherwise, wrong color; stop checking and end the game
  // }
}