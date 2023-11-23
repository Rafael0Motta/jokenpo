# JOKENPO

Este projeto consiste em uma aplicação simples que permite jogar Pedra, Pepel e Tesoura com um "robo". Além disso é possivel acompanhar a pontuação de ambos e também reiniciar o jogo 

## Tecnologias Utilizadas

<img src = "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src = "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src = "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">

## Funcionalidades
#### Entrada de Dados:
- O usuário pode escolher 3 obejtos para que o jogo funcione, além disso a maquina gera aleatoriamente os resultados.

#### Sorteio de Números:
- Ao clicar em uma das opções, a aplicação realiza um sorteio aleatório entre as opções resultando em EMPATE, PLAYER GANHANDO OU MAQUINA GANHANDO.

#### Lógica de Implementação utilizando JavaScript:
- A função MAIN() é responsável por gerenciar as demais funções; 
- A função botGame() realiza o sorteio aleatóriamente dentro das opçoes retornando 0,1 ou 2.
- A função checkResult(bot, player) recebe as escolhas dos usuario e do bot, além de  checar quem venceu e retornar um arr com o resultado. 0 PARA BOT E 1 PARA PLAYER.
- A função showPoints() exibe o resultado do jogo, quem venceu e a pontuação de cada um.
- A função reset() reinicia a contagem de pontos de ambos. 

#### Utilização
- Acesse o link em seu navegador - [JOKENPO](https://jokenpodev.netlify.app/).
