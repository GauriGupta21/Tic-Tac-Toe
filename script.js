// console.log("Welcome to tic tac toe");
// let music = new Audio("music.mp3");
// let turn1 = new Audio("ting.mp3");

// let gameover = new Audio("gameover.mp3");
// let turn = "X";
// //function to change the turn
// const changeTurn = () => {
//   return turn === "X" ? "O" : "X";
// };
// //function to check  for a win
// const checkWin = () => {
//   boxTexts = document.getElementsByClassName("boxText");

//   let wins = [
//     [0, 1, 2, 5, 5, 0],
//     [3, 4, 5, 5, 15, 0],
//     [6, 7, 8, 5, 25, 0],
//     [0, 3, 6, -5, 5, 90],
//     [1, 4, 7, 5, 15, 90],
//     [2, 5, 8, 15, 15, 90],
//     [0, 4, 8, 5, 5, 45],
//     [2, 4, 6, 5, 5, 45],
//   ];
//   wins.forEach((e) => {
//     if (
//       boxTexts[e[0]].innerText === boxTexts[e[1]].innerText &&
//       boxTexts[e[2]].innerText === boxTexts[e[1]].innerText &&
//       boxTexts[e[0]].innerText !== ""
//     )
//       document.querySelector(".info").innerText =
//         boxTexts[e[0]].innerText + "Won";
//     gameovers = true;
//     // gameover.play();
//     document
//       .querySelector(".imgbox")
//       .getElementsByTagName("img")[0].style.width = "200px";
//     document.querySelector(
//       ".line"
//     ).style.tranform = `translate(${e[3]}vw,${e[4]}vw)rotate(${e[5]}deg)`;
//     document.querySelector(".line").style.width = "20vw";
//   });
// };

// //Game logic
// // music.play();
// let boxes = document.getElementsByClassName("box");
// Array.from(boxes).forEach((element) => {
//   let boxText = element.querySelector(".boxText");
//   element.addEventListener("click", () => {
//     if (boxText.innerText === "") {
//       boxText.innerText = turn;
//       turn = changeTurn();
//       // turn1.play();
//       checkWin();
//       if (!gameovers) {
//         document.getElementsByClassName("info")[0].innerText =
//           "Turn for " + turn;
//       }
//     }
//   });
// });

// //addd on click listener on reset
// reset.addEventListener("click", (e) => {
//   let boxTexts = document.querySelectorAll(".boxText");
//   Array.from(boxTexts).forEach((element) => {
//     element.innerText = "";
//   });
//   turn = "X";
//   gameovers = false;
//   document.querySelector(".line").style.width = "20vw";

//   document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
//   document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
//     "0px";
// });
let music = new Audio("music.mp3");
let turn1 = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");

const checkWin = () => {
  let boxesText = document.getElementsByClassName("box");
  let wins = [
    [0, 1, 2, 0, 5, 0],
    [3, 4, 5, 0, 15, 0],
    [6, 7, 8, 0, 25, 0],
    [0, 3, 6, -10, 15, 90],
    [1, 4, 7, 0, 15, 90],
    [2, 5, 8, 10, 15, 90],
    [0, 4, 8, 0, 15, 45],
    [2, 4, 6, 0, 15, -45],
  ];
  wins.forEach((e) => {
    if (
      boxesText[e[0]].innerText === boxesText[e[1]].innerText &&
      boxesText[e[2]].innerText === boxesText[e[1]].innerText &&
      boxesText[e[0]].innerText !== ""
    ) {
      music.pause();
      gameover.play();
      if (turn === "X") turn = "O";
      else turn = "X";
      document.getElementsByClassName("info")[0].innerText =
        turn + " has won the game";
      document.getElementsByClassName(
        "line"
      )[0].style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      document.getElementsByClassName("line")[0].style.width = "100%";
      document
        .getElementsByClassName("imgbox")[0]
        .getElementsByTagName("img")[0].style.width = "50%";
      over = true;
    }
  });
};

let turn = "X";
let over = false;
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((e) => {
  e.addEventListener("click", (el) => {
    if (el.target.innerText == "" && over === false) {
      turn1.play();
      music.play();
      el.target.innerText = turn;

      if (turn === "X") turn = "O";
      else turn = "X";
      document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
      checkWin();
    }
  });
});
reset.addEventListener("click", (resetBtn) => {
  Array.from(boxes).forEach((e) => {
    music.pause();
    e.innerText = "";
    turn = "X";
    over = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.getElementsByClassName("line")[0].style.width = "0%";
    document
      .getElementsByClassName("imgbox")[0]
      .getElementsByTagName("img")[0].style.width = "0%";
  });
});
