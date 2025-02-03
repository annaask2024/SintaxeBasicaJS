// Estruturas condicionais:
// São instruções para realizar determinadas tarefas a partir de uma condição, seja decisão ou repetição.
// Existem 3 tipos de estruturas condicionais: if, else e switch.
// if: é usado para realizar uma ação quando uma condição for verdadeira.
// else: é usado para realizar uma ação quando a condição for falsa.
// switch: é usado para realizar uma ação de acordo com o valor de uma variável.

let jogador1 = 1;
let jogador2 = 1;
let placar;

if (jogador1 > jogador2) { // Se jogador1 for maior que jogador2
    console.log('Jogador 1 venceu!'); // Imprime a mensagem "Jogador 1 venceu!" no console.
} else if (jogador1 < jogador2) { // Se jogador1 for menor que jogador2
    console.log('Jogador 2 venceu!'); // Imprime a mensagem "Jogador 2 venceu!" no console.
} else { // Se nenhuma das condições anteriores for verdadeira
    console.log('Empate!'); // Imprime a mensagem "Empate!" no console.
}

// Usando if dentro de if (aninhamentos de if):

let jog1 = 6;
let jog2 = 1;
let placar2;

if (jog1 != -1) { // Se jog1 for diferente de -1
    if (jog1 > jog2) { // Se jog1 for maior que jog2
        console.log('Jogador 1 venceu!'); // Imprime a mensagem "Jogador 1 venceu!" no console.
    } else if (jog1 < jog2) { // Se jog1 for menor que jog2
        console.log('Jogador 2 venceu!'); // Imprime a mensagem "Jogador 2 venceu!" no console.   
    } else {
        console.log('Empate!'); // Imprime a mensagem "Empate!" no console.
    }
}

// Usando if ternário:

jog1 != -1 && jog2 != -1 ? console.log("Os jogadores são válidos!"): // Se jog1 for diferente de -1 e jog2 for diferente de -1
console.log("Os jogadores não são válidos!"); // Imprime a mensagem "Os jogadores não são válidos!" no console.

if (jog1 != -1) { // Se jog1 for diferente de -1
    if (jog1 > 0 && jog2 == 0) { // Se jog1 for maior que 0 e jog2 for igual a 0
        console.log('Jogador 1 marcou ponto!'); // Imprime a mensagem "Jogador 1 marcou ponto!" no console.
        placar2 = jog1 > jog2; // placar2 recebe jog1 maior que jog2
    } else if (jog1 == 0 && jog2 > 0) { // Se jog1 for igual a 0 e jog2 for maior que 0
        console.log('Jogador 2 marcou ponto!'); // Imprime a mensagem "Jogador 2 marcou ponto!" no console.
        placar2 = jog2 > jog1; // placar2 recebe jog2 maior que jog1
    } else {
        console.log('Empate!'); // Imprime a mensagem "Empate!" no console.
    }
}

// Usando switch/ case:
// O switch/case funciona como uma estrutura condicional, mas em vez de usar uma condição, ele utiliza um valor de uma variável para decidir qual ação realizar.
// Lembre-se sempre de utilizar o break para parar o switch/case e não ficar em loop infinito.

switch (placar2) { // O switch/case utiliza a variável placar2 para decidir qual ação realizar
    case placar2 = jog1 > jog2: // Se placar2 for igual a jog1 maior que jog2
        console.log('Jogador 1 venceu!'); // Imprime a mensagem "Jogador 1 venceu!" no console.
        break; // Encerra o switch/case
    case placar2 = jog2 > jog1: // Se placar2 for igual a jog2 maior que jog1
        console.log('Jogador 2 venceu!'); // Imprime a mensagem "Jogador 2 venceu!" no console.
        break; // Encerra o switch/case
    default: // Se nenhuma das condições anteriores for verdadeira
        console.log('Empate!'); // Imprime a mensagem "Empate!" no console.
        break; // Encerra o switch/case
}

// Estrutura de repetição:
// For: Repetição de instruções ate que a condição seja falsa.

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5']; // Declara um array com 5 elementos
let object = {propiedade1: 'valor1', propiedade2: 'valor2', propiedade3: 'valor3' , };  // Declara um objeto com 3 propiedades

for(let indice = 0; indice < array.length ; indice++) { // Inicia o for com o índice 0 e continua até que o índice seja menor que o tamanho do array
    console.log(array[indice]); // Imprime cada elemento do array   
}

// For in: Repetição de instruções para cada propiedade de um objeto.

for (let i in array){ // Inicia o for com o índice 0 e continua até que o índice seja menor que o tamanho do array
    console.log(array[i]); // Imprime cada elemento do array
}

// Com object:

for (let i in object){ // Inicia o for com o índice 0 e continua até que o índice seja menor que o tamanho do array
    console.log(object[i]); // Imprime cada propiedade do objeto
}

// For of: Repetição a partir de um valor:

for(i of array){ // Inicia o for com o índice 0 e continua até que o índice seja menor que o tamanho do array
    console.log(i); // Imprime cada elemento do array
}

// Podemos usar com object porém, objetos não são iteráveis. As propiedades variam.

// Com objects:

for(i of object.propiedade1){ // Inicia o for com o índice 0 e continua até que o índic
    console.log(i); // Imprime cada propiedade do objeto
}

// While: Repetição de instruções enquanto uma condição for verdadeira. Verificação feita antes da execução.

let a = 0; // Declara a variável a com o valor 0

while(a < 10){ // Enquanto a for menor que 10
    a++; // Incrementa a em 1
    console.log(a); // Imprime o valor de a
}

// Do while: Repetição de instruções "até que" determinada condição seja falsa, a verificação é feita depois da execução.

let b = 0; // Declara a variável b com o valor 0

do {
    b++; // Incrementa a em 1
    console.log(a); // Imprime o valor de a
} while(b < 10); // Enquanto b for menor que 10
