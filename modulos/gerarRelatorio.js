const relatorio = (arrListaCompra, arrEmail) => {

  if(arrListaCompra.length === 0 || arrEmail.length===0 ){
    return ("Lista de compra ou email está vazia")
  }else{

  
  const resultados={}
    let totalLista = arrListaCompra.reduce((acc, valor) => {
      acc += valor.preco * valor.quantidade;
      return acc;
    }, 0)/100;
  
    let totalIndividual = Math.floor((totalLista / arrEmail.length) * 100) / 100;
    let centavoMais = ( totalLista - (totalIndividual * arrEmail.length) ).toFixed(2).toString();
  
    let quantoRetirar = (srt) => {
      let centavos = "";
      for (letra of srt) {
        letra !== "0" && letra !== "." ? (centavos += letra) : " ";
      }
      return centavos;
    };
  
    let centavoRetirar = quantoRetirar(centavoMais);
    for (let i = 0; i < arrEmail.length; i++) {
      
      if (centavoRetirar > i) {
        let sub = 0.01;
        let corrigindo = totalIndividual + sub;
        resultados[arrEmail[i]] = Number(((corrigindo)*100).toFixed(0))
       } else {
        resultados[arrEmail[i]] = Number((totalIndividual*100).toFixed(0))
       }
     }
     
    return resultados;
  }
  };

  module.exports = relatorio