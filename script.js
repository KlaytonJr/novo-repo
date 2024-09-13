// comnetário simples

/**
 * 
 * 
 * 
 * */

/*
Comentário de multiplas linhas


comentando

*/

var cliente
console.log("Cliente -> ", cliente);

cliente = "Klayton";
console.log("Cliente -> ", cliente);

var cliente2 = "Karoline"
console.log("Cliente novo -> ", cliente2);

var dataDeNascimento = "13/12/1999"
var data_de_nascimento = "13/12/1999"

var peso = 50.6

var num1 = 3;
var num2 = 6;
var num3 = 10;

var banana = num1 + num2;
console.log(banana);
console.log(num1 - num2 * num3);

console.log(num2 / num1);
console.log(num2 % num3);

console.log(num1 ** num1);

console.log('👉 --------------');

console.log('👉 cliente + cliente2 => ', cliente + " " + cliente2);
console.log('👉 cliente + num2 => ', cliente + num2);

console.log('👉 num1 + num2 => ', num1 + num2); // 9

var numeroDoPrompt = prompt("Digite um número");

console.log('👉 num1 + num2 => ', Number(numeroDoPrompt) + num2); // 36

var mensagem = "Número digitado " + parseFloat(numeroDoPrompt) + " número"
alert(mensagem)

mensagem = "Número digitado " + parseInt(numeroDoPrompt) + " número"
alert(mensagem)