// tipos primitivos

// boolean
var VouF = false;
console.log(typeof(VouF)); 

// number
var N = 1;
console.log(typeof(N));

// string
var Nome = "Carolina";
console.log(typeof(Nome));

// como declarar uma variável
var variavel = "Carolina";
variavel = "Ana";
console.log(variavel);

// let
let variavel2 = "Carolina";
variavel2 = "Ana";
console.log(variavel2);

// const
const variavel3 = "Carolina";
variavel3 = "Ana";
console.log(variavel3);

// escopo de variável
// global: variavel declarada fora de qualquer bloco, sua visibilidade fica disponivel em todo código.
// local: variavel declarada dentro de um bloco, sua visibilidade pode ficar disponivel ou não.

var escopoGlobal = "Global";
console.log(escopoGlobal);

function escopoLocal() { // escopo local
    var escopoLocalInterno = "Local"; // escopo local
    console.log(escopoLocalInterno); // acessa a variavel local
}
escopoLocal();

// Atribuição
var Atribuição = "Carolina";

// comparação
var Comparação = "Carolina";
console.log("Carolina" == Comparação); // true

// comparação identica
var ComparaçãoIdentica = "0" === 0;
console.log(ComparaçãoIdentica); // false

// Operadores aritméticos
// +: adição;
var soma = 5 + 4;
console.log(soma);

// -: subtração;
var subtracao = 5 - 4;
console.log(subtracao);

// *: multiplicação;
var multiplicacao = 5 * 5;
console.log(multiplicacao);

// /: divisão;
var divisao = 5 / 5;
console.log(divisao);

// %: resto da divisão ou divisão inteira;
var resto = 8 % 2;
console.log(resto);

// **: potência;
var potencia = 8 ** 2;
console.log(potencia);

// Operadores relacionais
// <: menor que;
var menorQue = 5 < 4;
console.log(menorQue);

// >: maior que;
var maiorQue = 5 > 4;
console.log(maiorQue);

// <=: menor ou igual que;
var menorOuIgualQue = 5 <= 4;
console.log(menorOuIgualQue);

// >=: maior ou igual que;
var maiorOuIgualQue = 5 >= 4;
console.log(maiorOuIgualQue);

// ==: igual;
var igual = 5 == 4;
console.log(igual);

// !=: diferente;
var diferente = 5 != 4;
console.log(diferente);

// Operadores lógicos
// &&: e; (considera que todos os valores sejam verdadeiros)
var e = true && true;
console.log(e); // true

var e2 = true && false;
console.log(e2); // false

// ||: ou; (considera que pelo menos um dos valores seja verdadeiro)
var ou = true || false;
console.log(ou); // true

var ou2 = false || false;
console.log(ou2); // false

// !: negação; (inverte o valor de true para false e vice versa)
var negacao = !true;
console.log(negacao);

var negacao2 = !false;
console.log(negacao2);

