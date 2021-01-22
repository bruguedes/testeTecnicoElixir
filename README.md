# Resposta ao teste técnico para concorrer uma bolsa no Programa de Formação em Elixir 

Informações:
1. A função que faz o relatório está localizada na pasta geraRelatorio.

2. O array com a lista de e-mails está na pasta listaEmail Ex.:['email@email.com', 'outroemail@email.com', ...]

3. O array de item está na pasta listaCompras, em cada objeto dentro do array deve-se declarar Ex.:[ {item: "Arroz", quantidade: 1, preço: 750}, {item: "feijão", quantidade: 1, preço: 800}, ,...]

4) Para gerar o relatório basta chamar a função fazRelatorio e passar como parâmetro: listaDeCompras , listaEmail.  No arquivo raiz app.js, o retorno da função é um objeto contendo todos os e-mails  da lista como chave do objeto e seus respectivos valores.

5) Em app.js a requisição da lista de compras e da lista de e-mails ficam alocadas nas constantes: listaCompras e listaEmail. Depois disso a função, relatório, localizada na pasta “./geraRelatorio/index.js” é alocada na constante fazRelatorio. Por último é utilizado o console.log(fazRelatorio(listaCompras, listaEmail)), dentro do arquivo app.js para imprimir no terminal .

Obs: Caso queira, é possível passar a lista de compras e e-mails por meio de outro arquivo, desde que esteja alocada a uma variável e está seja passada como parâmetro para função.


1) **app.js** requisita a lista de compras e lista de email respectivamente e aloca nas variaveis **const listaCompras**  e **const listaEmail**
2)  **app.js** requisita a função localizada na pasta **geraRelatorio** e aloca na variavel **const fazRelatorio**
