# Resposta ao teste técnico para concorrer uma bolsa no Programa de Formação em Elixir 

Instruções:

1) A função que faz o relatorio esta localizada na para geraRelatorio.
2) Array com a lista de email esta na pasta listaEmail Ex.:['email@email.com', 'outroemail@email.com', ...]
3) array de item esta na pasta listaCompras, em cada objeto dentro do array deve-se declara
Ex.:[ {item: "Arroz", quantidade: 1, preço: 750}, {item: "feijão", quantidade: 1, preço: 800}, ,...] 

4) Para gerar o relatorio basta chamar a função fazRelatorio e passar como paramentro a listaDeCompras
e a listaEmail, no aruivo raiz app.js.o retorno da função e um objeto contendo todos os email da lista como chave do objeto e seus respectivo valor.
5) Para imprimir o retorno basta utiliza o console.log(fazRelatorio(listaCompras, listaEmail)) na função, ou
atribuir a função a uma variavel e imprimi-la.
Obs.:caso queria, e possivel passar a lista de compras e email por meio de outro arquivo, desde que esteja alocada
a uma variavel e esta seja passada como paramento para função.
