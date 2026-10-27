alert('Olá, Boas-vindas ao Jogo Matemático!');
let pronto = prompt('Você está pronto? ("Sim" ou "Não")');
if (pronto == 'Sim') {
  let nome = prompt('Antes de tudo, qual o seu nome?');
  alert('Muito bem, ' + nome + '. Vamos lá');
  let pontuacao = 0;
  let primeiraPergunta = Number(prompt('Quanto é 10 + 10?'));
  if (primeiraPergunta === 20) {
    alert('Você acertou! Vamos para a próxima... +30');
    pontuacao += 30;
  } else {
    alert('Puts você errou... Mas não desanime! (Resposta correta: 20.)');
  }
  let segundaPergunta = Number(prompt('Quanto é 50 - 20?'));
  if (segundaPergunta === 30) {
    alert('Você acertou! Vamos para a próxima... +30');
    pontuacao += 30;
  } else {
    alert('Puts você errou... Mas não desanime! (Resposta correta: 30.)');
  }
  let terceiraPergunta = Number(prompt('Quanto é 6 x 5?'));
  if (terceiraPergunta === 30) {
    alert('Você acertou! Vamos para a próxima... +30');
    pontuacao += 30;
  } else {
    alert('Puts você errou... Mas não desanime! (Resposta correta: 30.)');
  }
  let quartaPergunta = Number(prompt('Quanto é 100 : 5?'));
  if (quartaPergunta === 20) {
    alert('Você acertou! +30');
    pontuacao += 30;
  } else {
    alert('Puts você errou... Mas não desanime! (Resposta correta: 20.)');
  }
  alert('Fim de Jogo!');
  alert(nome + ', Sua pontuação foi de: ' + pontuacao + '.');
  if (pontuacao >= 100) {
    alert('Parabéns! ' + nome + ', você ganhou.');
  } else {
    alert(
      'Poxa... Não foi dessa vez, ' +
        nome +
        '. A pontuação necessária era 100 pontos, você fez: ' +
        pontuacao +
        '. Mas não desanime! Tente outra vez, eu acredito em você. Boa Sorte!'
    );
  }
} else {
  alert('Tudo bem. Até a próxima!');
}
