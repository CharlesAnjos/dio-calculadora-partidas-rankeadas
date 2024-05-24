let derrotas = 0; //entre com o número de derrotas aqui
let vitorias = 0; //entre com o número de vitórias aqui
let saldoVitorias;
let nivel;

function calculaSaldoVitorias(vitorias, derrotas) {
  return vitorias - derrotas;
}

function calculaRanking(saldoVitorias){
  let nivel;
  if(saldoVitorias <= 10){
    nivel = "Ferro"
  } else if(saldoVitorias > 10 && saldoVitorias <= 20) {
    nivel = "Bronze"
  } else if(saldoVitorias > 20 && saldoVitorias <= 50) {
    nivel = "Prata"
  } else if(saldoVitorias > 50 && saldoVitorias <= 80) {
    nivel = "Ouro"
  } else if(saldoVitorias > 80 && saldoVitorias <= 90) {
    nivel = "Diamante"
  } else if(saldoVitorias > 90 && saldoVitorias <= 100) {
    nivel = "Lendário"
  } else if(saldoVitorias > 100) {
    nivel = "Imortal"
  }
  return nivel
}

function imprimeMensagem(saldoVitorias, nivel){
  console.log(`O Herói tem de saldo de ${saldoVitorias} vitórias e está no nível de ${nivel}`);
}

saldoVitorias = calculaSaldoVitorias(vitorias, derrotas);
nivel = calculaRanking(saldoVitorias);
imprimeMensagem(saldoVitorias,nivel);
