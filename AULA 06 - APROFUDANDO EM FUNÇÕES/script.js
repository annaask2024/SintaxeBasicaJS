// Funções declarativas:
// São funções que possuem o uso mais comum, deve ser declaradas usando a palavra reservada "function" seguida do nome da função, parenteses "()", e o corpo da função entre chaves "{}".

function nomeDaFuncao(){ // Declara uma função
    console.log("Olá, mundo!"); // Imprime a mensagem "Olá, mundo!" no console
}

// Neste caso a função declarativa obrigatóriamente preisa ter o nome da função.

// Expressões de funções:
// São funções atribuídas à expressões. A nomeação das funções por expressão é opcional.

// Com nomeação:
var funcao = function nomeDaFuncao(){ // Declara uma função
    console.log("Olá, mundo! Sou uma função de expressão com nomeação"); // Imprime a mensagem "Olá, mundo!" no console
}
funcao(); // Chama a função

// Sem nomeação:
var funcao = function(){ // Declara uma função
    console.log("Olá, mundo! Sou uma função de expressão sem nomeação"); // Imprime a mensagem "Olá, mundo!" no console
}
funcao(); // Chama a função

// Arrow functions:
// São funções de expressão de sintaxe curta. Sempre serão anônimas, e portanto, não podem ser nomeadas.
// Declaradas com parenteses "()", seguido de "=>" e depois chaves "{}".

var funcao = () => { // Declara uma função
    console.log("Olá, mundo! Sou uma arrow function"); // Imprime a mensagem "Olá, mundo!" no console
}
funcao(); // Chama a função

// Funções aritméticas:
// Funções que realizam operações matemáticas, tais como soma, subtração, multiplicação, divisão e resto.
// Number(): Converte o parâmetro em um número;
// Prompt(): Permite a entrada de dados pelo usuário;
// Alert(): Exibe uma mensagem de alerta ao usuario;
// Template Strings: Para permitir o uso de Strings junto com expressões;
