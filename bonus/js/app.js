const km = parseInt(prompt(`Inserisci il numero dei km che devi percorrere`));
const age = parseInt(prompt(`Inserisci la tua età`));

const totalPrice = km * 0.21;
const discountUnder18 = totalPrice * 0.2;
const discountOver65 = totalPrice * 0.4;
const ticketPrice = document.getElementById(`ticket-price`);

if (!isNaN(age) && !isNaN(km)) {
  if (age < 18) {
    const discountedTicket = totalPrice - discountUnder18;
    ticketPrice.innerHTML = `${Math.round(discountedTicket * 100) / 100} €`;
  } else if (age > 65) {
    const discountedTicket = totalPrice - discountOver65;
    ticketPrice.innerHTML = `${Math.round(discountedTicket * 100) / 100} €`;
  } else {
    ticketPrice.innerHTML = `${Math.round(totalPrice * 100) / 100} €`;
  }
} else {
  alert(`I dati inseriti devono essere numeri`);
}
