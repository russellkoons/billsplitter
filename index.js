function calculate(e) {
  e.preventDefault();

  const bill = $('#bill').val();

  if (isNaN(bill)) {
    $('#errorcontainer').empty().append(
      '<p id="error">Please enter a valid number</p>'
    );
    return;
  }

  const party = $('#party').val();
  const tip = $('#tip').val() / 100;

  const splitBill = Math.round(bill / party * 100) / 100;
  const splitTip = Math.round(bill * tip / party * 100) / 100;

  if (splitTip === 0) {
    $('#errorcontainer').empty();
    $('#result').empty().append(
      `<p>Your split bill for ${party} people is...</p>
      <p id="splitbill">$${splitBill.toFixed(2)}</p>`
    );
  } else {
    $('#errorcontainer').empty();
    $('#result').empty().append(
      `<p>Your split bill for ${party} people is...</p>
      <p id="splitbill">$${splitBill.toFixed(2)}</p>
      <p>Your tip is...</p>
      <p id="splittip">$${splitTip.toFixed(2)}</p>`
    );
  }
}