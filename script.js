/*
Escreva um programa que solicita ao usuário um número inteiro e verifica se esse número atende aos seguintes critérios, sem nenhuma exceção:

É um número par.
É um número positivo (maior que zero).
É um número menor que 100.

O programa deve imprimir a mensagem "O número atende aos critérios.", se o número atender a todos os critérios acima, caso contrário, deve imprimir a mensagem "O número não atende aos critérios.".
*/

var number = parseInt(prompt(`Olá! vamos ao jogo de adivinhação. 
Digite um número inteiro, e veja se você é bom nisso: `));
  if (number % 2 === 0 && number > 0 && number < 100) {
    alert( `O número atende aos critérios! 
  Você é bom no game!`);
  } else {
    alert(`O número não atende aos critérios!
  Tente outra vez!`);
  }