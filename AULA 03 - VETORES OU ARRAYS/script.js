// ARRAYS são um tipo de lista, ou matriz de variáveis, onde cada variável possui um índice. Os valores podem ser de vários tipos.
// Ex: let array ['Carolina', 'João', 'Maria', 'Pedro', ['array1'], ['array2']...];
// O índice só é acessado por um número inteiro, onde 0 é o primeiro índice. Cada índice é separado por vírgula.


// Como declarar um array
let array = ['Carolina', 'João', 'Maria', 'Pedro', ['array1'], ['array2']];
console.log(array);

// Pode guardar vários tipos de dados
let array2 = ['string', 1, true, ['array1'], ['array2']];
console.log(array2);

// Acessando apenas um índice da array
let array3 = ['Carolina', 'João', 'Maria', 'Pedro', ['array1'], ['array2']];
console.log(array3[3]);

// Manipulando arrays:
// forEach() - itera um array;
array3.forEach(function(item, index){
    console.log(item, index);
});
// push() - adiciona um item ao final do array;
array3.push('Novo item');
console.log(array3);
// pop() - remove o último item do array;
array3.pop();
console.log(array3);
// shift() - remove o primeiro item do array;
array3.shift();
console.log(array3);
// unshift() - adiciona um item ao inicio do array;
array3.unshift('Novo item');
console.log(array3);
// indexOf() - retorna o índice de um valor;
console.log(array3.indexOf('Novo item'));
// splice() - remove ou substitui um item do array;
array3.splice(0, 4);
console.log(array3);
// slice() - retorna uma parte do array;
let novoArray = array3.slice(0, 2);
console.log(novoArray);

// Objetos:
// Dados que possuem propriedades e valores que definem suas características
// Deve ser declarado com chaves {};
// Imagine uma xícara azul. Ela tem cor, pode ter vários tamanhos e funções. Pode ser declarada assim:

    let xicara ={
        cor: 'azul',
        tamanho: 'grande',
        funcao: 'tomarCafe()'
    }

// Manipulando objetos:
// As propiedades de objetos podem ser atribuídas à variáveis, facilitando a manipulação do objeto. Isso chama-se desestruturação.

    let xicara2 = {cor: 'azul', tamanho: 'grande', funcao: 'tomarCafe()'};

    let cor = xicara2.cor;
    let tamanho = xicara2.tamanho;
    let funcao = tomarCafe();

// Exemplos de manipulação de objetos:

let object = {string: 'string', number: 1, boolean: true, array: ['array1', 'array2'], objectInterno: {object1: 'object1', object2: 'object2'}};
console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

// Outra mandeira de desestruturação:

var {string, number, boolean} = object;
console.log(string, number, boolean);