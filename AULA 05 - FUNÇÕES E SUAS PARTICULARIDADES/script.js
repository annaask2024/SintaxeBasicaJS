// Funções:
// São blocos de comandos e instruções para a execução de tarefas específicas.

// EXEMPLO:
function funcao(){ // Declara uma função
    console.log("Olá, mundo!"); // Imprime a mensagem "Olá, mundo!" no console
}

funcao(); // Chama a função

// Como declarar uma função:
// Geralmente se utiliza a palavra reservada "function" seguida do nome da função e a lista de parâmetros entre parênteses "()", e o corpo da função entre chaves "{}".
// (): Indica que é um objeto do tipo function;
// {}: Indica que é um bloco de instruções;

// Funções com parâmetros:
// As funções podem receber em sua declaração, parâmetros, que servem como variáveis, onde sua atribuição pode ser feita durante a chamada da função:

// EXEMPLO:
function mensagem(primeiro, segundo){ // Declara uma função
    console.log(primeiro + ', ' + segundo); // Imprime a mensagem "Olá, mundo!" no console
}
mensagem("Ola", "Mundo!"); // Chama a função