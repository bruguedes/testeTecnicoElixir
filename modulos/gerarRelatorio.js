const relatorio = (arrListaCompra, arrEmail) => {
  //Faz a verificação se array de email ou litas estão vazias
  if (arrListaCompra.length === 0 || arrEmail.length === 0) {
    return "Lista de compra ou email está vazia";
  } else {
    const resultados = {};
    //recebe o valor em número inteiro, retorna os valores mutiplicados e somados da lista convertidos em float
    let totalLista =
      arrListaCompra.reduce((acc, valor) => {
        acc += valor.preco * valor.quantidade;
        return acc;
      }, 0) / 100;

    //Faz a divisão do valor total pelo numero de pessoas e arredonda o valor para baixo (float)
    let totalIndividual =
      Math.floor((totalLista / arrEmail.length) * 100) / 100;

    //retorna o valor dos centavos que faltam, compara os valores total da Lista, e os valores somados de cada pessoa(float)
    let centavoMais = (totalLista - totalIndividual * arrEmail.length)
      .toFixed(2)
      .toString();

    //function retorna numero inteiro refetente ao numero de vezes deve interagir no loop de repetição
    // adicionando cada centavo por vez aos participantes.
    let quantoRetirar = (srt) => {
      let centavos = "";
      for (letra of srt) {
        letra !== "0" && letra !== "." ? (centavos += letra) : " ";
      }
      return centavos;
    };
    // centavosRetirar recebe o numero de vezes que o laço if deverá interagir
    let centavoRetirar = quantoRetirar(centavoMais);
    for (let i = 0; i < arrEmail.length; i++) {
      //acrecenta centavo por centavo a cada pessoa, até que o número de pessoas seja maior que os centavos extras
      if (centavoRetirar > i) {
        let sub = 0.01;
        let corrigindo = totalIndividual + sub;
        //adiciona email como chave do objeto e converte o valor (float) para numero inteiro
        resultados[arrEmail[i]] = Number((corrigindo * 100).toFixed(0));
      } else {
        //adiciona email como chave do objeto e converte o valor (float) para numero inteiro
        resultados[arrEmail[i]] = Number((totalIndividual * 100).toFixed(0));
      }
    }

    return resultados;
  }
};

module.exports = relatorio;
