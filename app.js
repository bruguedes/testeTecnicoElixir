//Infromações por favor, acessar README.md

const compras = require('./modulos/comprasLista')
const email = require('./modulos/emailLista')
const fazRelatorio = require('./modulos/gerarRelatorio')
console.log(fazRelatorio(compras, email))