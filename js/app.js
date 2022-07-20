const km = prompt(`Inserisci il numero dei km che devi percorrere`);
const eta = prompt(`Inserisci la tua età`);

const costoBiglietto = km * 0.21;
const scontoUnder18 = costoBiglietto * 0.2;
const scontoOver65 = costoBiglietto * 0.4;

if (eta < 18) {
  const bigliettoScontato = costoBiglietto - scontoUnder18;
  console.log(bigliettoScontato);
} else if (eta > 65) {
  const bigliettoScontato = costoBiglietto - scontoOver65;
  console.log(bigliettoScontato);
} else {
  console.log(costoBiglietto);
}
