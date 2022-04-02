// Variaveis

//Regras para variaveis

/* 
(var) é a versão mais antiga de variavel, ela era unica até ES2015 (ES é abreviação de ecmascript - Assim,
   em poucas palavras, podemos dizer que ECMAScript é uma especificação de linguagem, ou seja, ela define 
   os padrões para uma linguagem de programação, e o JavaScript é a implementação desses padrões.),
   bom voltando a variavel (var) ela tem algumas regras:

   1- Se você esquecer de adicionar (var), estará atribuindo um valor a uma variável não declarada e os resultados é (undefined).
*/

// exemplo de variavel var não declarada.

var nome;

var nomeVar = "André";
  console.log("Usando o var: ",  nomeVar);

let nomeLet = "André";
  console.log("Usando o let: ", nomeLet);

const nomeConst = "André";
  console.log("Usando o const: ", nomeConst);