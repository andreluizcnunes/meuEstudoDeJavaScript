// Variaveis

//Regras para variaveis

/* 
(var) é a versão mais antiga de variavel, ela era unica até ES2015 (ES é abreviação de ecmascript - Assim,
   em poucas palavras, podemos dizer que ECMAScript é uma especificação de linguagem, ou seja, ela define 
   os padrões para uma linguagem de programação, e o JavaScript é a implementação desses padrões.),
   bom voltando a variavel (var) ela tem algumas regras:
*/

//1- Se você esquecer de adicionar (var), estará atribuindo um valor a uma variável não declarada e os resultados é (undefined).

var nome; // exemplo de variavel var não declarada que gera o resultado (undefined).
// para ver o reultado dessa variavel usamos o comando a baixo
console.log(typeof nome);
// para ver o resultado desse comando abra o arquivo var.html e siga os passos que ele pede

//Você pode redeclarar a variável várias vezes, substituindo-a:
var variavel1 = 13; // aqui foi declarado a varivel
var variavel1 = 15; // aqui foi declarada a mesma varivel mas com valor diferente, assim alterando o valor da variavel
console.log(variavel1);

// Podemos declarar várias variáveis ​​de uma só vez na mesma instrução:
var nome = 'Andre', idade = 32, altura = 1.80; 
// Desta forma, mas a maioria das consulta que faço, os prefessores nao indicam.

/*
  O escopo é a parte do código onde a variável é visível.

Uma variável inicializada (var) fora de qualquer função é atribuída ao objeto global, tem um escopo global e é visível em todos os lugares. Uma variável inicializada com (var) dentro de uma função é atribuída a essa função, é local e é visível apenas dentro dela, assim como um parâmetro de função.

Qualquer variável definida em uma função com o mesmo nome de uma variável global tem precedência sobre a variável global, ocultando-a.

É importante entender que um bloco (identificado por um par de chaves) não define um novo escopo. Um novo escopo só é criado quando uma função é criada, pois (var) não possui escopo de bloco, mas escopo de função.

Dentro de uma função, qualquer variável definida nela é visível em todo o código da função, mesmo que a variável seja declarada no final da função, ela ainda pode ser referenciada no início, porque o JavaScript antes de executar o código realmente move todas as variáveis ​​para cima (algo que é chamado de içamento ). Para evitar confusão, sempre declare variáveis ​​no início de uma função.
*/

//exemplo de escopo

var varForaDaFuncao = 'Fora da Função';
console.log(varForaDaFuncao);

function funcaoDaVariavel() {
  var varDentroDaFuncao = 'Dentro da Função';
    return varDentroDaFuncao;
}

console.log(funcaoDaVariavel);
console.log(varDentroDaFuncao); 
/*aqui vai dar um erro pois quando a (var) esta declarado dentro de uma
 função ele só tem acesso dentro da função. Com isso vai dar um erro de variavel não definida ou em inglês 
 (is not difined)

ERRO QUE APREDENTA
Uncaught ReferenceError: varDentroDaFuncao is not defined
    at var.js:51:13
(anonymous) @ var.js:51

*/