// Variaveis

//Regras para variaveis

/* 
(var) é a versão mais antiga de variavel, ela era unica até ES2015 (ES é abreviação de ecmascript - Assim,
   em poucas palavras, podemos dizer que ECMAScript é uma especificação de linguagem, ou seja, ela define 
   os padrões para uma linguagem de programação, e o JavaScript é a implementação desses padrões.),
   bom voltando a variavel (var) ela tem algumas regras:

   1- Se você esquecer de adicionar (var), estará atribuindo um valor a uma variável não declarada e os resultados é (undefined).
*/

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