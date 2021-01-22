// A função que faz o relatorio esta localizada na para geraRelatorio.
// array com a lista de email esta na pasta listaEmail
//['email@email.com', 'outroemail@email.com',...]
// array de item esta na pasta listaCompras, em cada objeto dentro do array deve-se declara
//[{item: "Arroz", quantidade: 1, preço: 7.54},{item: "Arroz", quantidade: 1, preço: 7.54},...] 

//Para gerar o relatorio basta chamar a função fazRelatorio e passar como paramentro a listaDeCompras
//e a listaEmail.
// o retorno da função e um objeto contendo todos os email da lista como chave do objeto e seus respectivo valor.
// para imprimir o retorno basta utiliza o console.log(funcao(parm1, parm2)) na função, ou
// atribuir a função a uma variavel e imprimi-la.
//caso queria, e possivel passar a lista de compras e email por meio de outro arquivo, desde que esteja alocada
//a uma variavel e esta seja passada como paramento para função.
const listaCompras = require('./listaCompras')
const listaEmail = require('./listaEmail')
const fazRelatorio = require('./geraRelatorio')
console.log(fazRelatorio(listaCompras, listaEmail))
