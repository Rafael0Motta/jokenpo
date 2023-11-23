function main(resultPlayer) {
  let resultBot = botGame();
  let result = checkResult(resultBot, resultPlayer);
  showPoint(result);
}

function botGame() {
  let min = Math.ceil(0);
  let max = Math.floor(2);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkResult(bot, player) {
  let infoResult = document.querySelector(".result");
  let result = [];

  if (bot === player) {
    infoResult.innerHTML = "Deu empate!";
  } else if (
    (player === 0 && bot === 1) ||
    (player === 1 && bot === 2) ||
    (player === 2 && bot === 0)
  ) {
    infoResult.innerHTML = "Player Ganhou!";
    result.push(1);
  } else {
    infoResult.innerHTML = "Maquina Ganhou!";
    result.push(0);
  }
  return result;
}

function showPoint(result) {
  if (result[0] === 0) {
    let botPoint = document.querySelector("#spanBot").innerHTML++;
    botPoint = botPoint;
  } else if (result[0] === 1) {
    let playerPoint = document.querySelector("#spanPlayer").innerHTML++;
    playerPoint = playerPoint;
  }
}

function reset() {
  document.querySelector("#spanBot").innerHTML = 0;
  document.querySelector(".result").innerHTML = "Escolha novamente";
  document.querySelector("#spanPlayer").innerHTML = 0;
}
