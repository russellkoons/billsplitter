function calculate(e) {
  e.preventDefault();

  const bill = document.getElementById('bill').value;

  if (isNaN(bill)) {
    console.log('Not a number');
    return;
  }

  const party = document.getElementById('party').value;
  const tip = document.getElementById('tip').value / 100;

  console.log(bill, party, tip);

  const splitBill = Math.round(bill / party * 100) / 100;
  const splitTip = Math.round(bill * tip / party * 100) / 100;

  console.log(splitBill, splitTip);
}