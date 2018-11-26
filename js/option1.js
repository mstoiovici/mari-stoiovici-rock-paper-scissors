var choices = ["rock", "paper", "scissors"];
var played = 0;
var won = 0;
var lost = 0;
var draw = 0;
var computer="";
var you="";

$('#rock').click(function(event) {
  var play_you = this.getAttribute("value");
  console.log(play_you);
  var play_machine = computer_move();
  console.log(play_machine);
  compare(play_you, play_machine);
  displayYourChoice(play_you);
  displayMachineChoice(play_machine);

});

$('#paper').click(function(event) {
  var play_you = this.getAttribute("value");
  console.log(play_you);
  var play_machine = computer_move();
  compare(play_you, play_machine);
  displayYourChoice(play_you);
  displayMachineChoice(play_machine);
});

$('#scissors').click(function(event) {
  var play_you = this.getAttribute("value");
  console.log(play_you);
  var play_machine = computer_move();
  compare(play_you, play_machine);
  displayYourChoice(play_you);
  displayMachineChoice(play_machine);
});

/*......../listen to the clicks.................................*/

function computer_move() {
  var play_machine = Math.floor(Math.random() * (3 - 0)) + 0;
  /*console.log("move: " + play_machine);*/
  play_machine = choices[play_machine];
  /*console.log("move: " + play_machine);*/

  return play_machine;

}
/*......../computer moves.........................................*/

function compare(you, machine) {
  verdict = "lose";
  if (you == machine) {
    verdict = "draw";
  }
  if (((you == "rock") && (machine == "scissors")) || ((you == "paper") && (machine == "rock")) || ((you == "scissors") && (machine == "paper"))) {
    verdict = "win";
  }
  /*console.log("move: " + verdict);*/
  /*......../compare moves...........................................*/
  switch (verdict) {
    case 'win':
      won++;
      $("#game_won").text(won);
      break;

    case 'lose':
      lost++;
      $("#game_lost").text(lost);
      break;

    case 'draw':
      draw++;
      $("#game_draw").text(draw);
      break;
  }
/*......../updates the wons, losts and draws ...........................................*/
$("#verdict").text(verdict);
  played++;
  $("#game_played").text(played);
  /*......../ returns the verdict andupdates the nr of played games ...........................................*/
}
  /*......../compare moves and updates variables...........................................*/
function displayMachineChoice(play_machine){

  computer=document.images.machineMove;
  if (play_machine=="rock"){
    computer.src="images/rock-img.jpg";
  }
  if (play_machine=="paper"){
    computer.src="images/paper-img.jpg";
  }
  if (play_machine=="scissors"){
    computer.src="images/scissors-img.jpg";
  }
}
/*....targets machineMove and changes the image displayed...........................................*/

function displayYourChoice(play_you){
  your=document.images.yourMove;
  if (play_you=="rock"){
  your.src="images/rock-img.jpg";
  }
  if (play_you=="paper"){
    your.src="images/paper-img.jpg";
  }
  if (play_you=="scissors"){
  your.src="images/scissors-img.jpg";
}
}
/*....targets yourMove and changes the image displayed...........................................*/
