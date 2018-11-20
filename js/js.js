var choices = ["rock", "paper", "scissors"];
var played = 0;
var won = 0;
var lost = 0;
var draw = 0;



$('button').click(function(event) {
  var play_you = this.getAttribute("value");
  /*console.log(play_you);*/
  $("#play_you").text(play_you);
  var play_machine = computer_move();
  compare(play_you, play_machine);

});


function computer_move() {
  var play_machine = Math.floor(Math.random() * (3 - 0)) + 0;
  /*console.log("move: " + play_machine);*/
  play_machine = choices[play_machine];
  /*console.log("move: " + play_machine);*/
  $("#play_machine").text(play_machine);
  return play_machine;


}

function compare(you, machine) {
  verdict = "lose";
  if (you == machine) {
    verdict = "draw";
  }
  if (((you == "rock") && (machine == "scissors")) || ((you == "paper") && (machine == "rock")) || ((you == "scissors") && (machine == "paper"))) {
    verdict = "win";
  }

  /*console.log("move: " + verdict);*/





  switch (verdict) {
    case 'win':
      won++;
      console.log("move: " + won);
      $("#game_won").text(won);
      break;

    case 'lose':
      lost++;
      console.log("move: " + lost);
      $("#game_lost").text(lost);
      break;

    case 'draw':
      draw++;
      console.log("move: " + draw);
      $("#game_draw").text(draw);
      break;
  }
  /*if(verdict=="win"){
    won++;
    $("#game_won").text(won);
  }
  if(verdict=="lose"){
    lost++;
    $("#game_lost").text(lost);
  }
  if(verdict=="draw"){
    draw++;
    $("#game_draw").text(draw);
  }*/
$("#verdict").text(verdict);
  played++;
  $("#game_played").text(played);
}
