# Resposta ao teste técnico: Programa de Formação em Elixir 

Informações:

Aplicação desenvolvida utilizando Node.Js versão v14.15.4
Link download: https://nodejs.org/pt-br/download/
Link node.js Documentação: https://nodejs.org/pt-br/docs/

Para executar a função, estando dentro do pasta raiz do projeto por meio do terminal (cmd, power Shell ou integrado VsCode),
 utilizar o comando: node apps.js 

1. A função que faz o relatório está localizada na pasta modulos/gerarRelatorio.js

2. O array com a lista de e-mails está na pasta modulos/emailLista.js
 Ex.:['email@email.com', 'outroemail@email.com', ...]

3. O array de item está na pasta modulos/comprasLista.js, em cada objeto dentro do array deve-se declarar como descrito no exemplo a seguir.
 Ex.:[ {item: "Arroz", quantidade: 1, preco: 750}, {item: "feijão", quantidade: 1, preco: 800}, ,...]

4) Para gerar o relatório:
 No arquivo app.js, basta chamar a função fazRelatorio e passar como parâmetros compras e email. O retorno da função é um objeto contendo todos os e-mails da lista como chave e seus respectivos valores.

5) Em app.js a requisição da lista de compras e da lista de e-mails ficam alocadas nas constantes: compras e email. Depois disso a função, relatório, localizada na pasta “./modulos/gerarRelatorio.js” é alocada na constante fazRelatorio. Por último é utilizado o console.log(fazRelatorio(compras, email)), dentro do arquivo app.js para imprimir no terminal .

Obs: Caso queira, é possível passar a lista de compras e e-mails por meio de outro arquivo, desde que esteja alocada a uma variável e está seja passada como parâmetro para função.


1) **app.js** requisita a lista de compras e lista de email respectivamente e aloca nas variaveis **const compras**  e **const email**
2)  **app.js** requisita a função **gerarRelatorio** e aloca na variavel **const fazRelatorio**
