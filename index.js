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
  const total = splitBill + splitTip;

  if (splitTip === 0) {
    $('#errorcontainer').empty();
    $('#result').empty().append(
      `<p>Your split bill for ${party} people is...</p>
      <p class="split">$${splitBill.toFixed(2)}</p>`
    );
  } else {
    $('#errorcontainer').empty();
    $('#result').empty().append(
      `<p>Your split bill for ${party} people is...</p>
      <p class="split">$${splitBill.toFixed(2)}</p>
      <p>And your tip is...</p>
      <p class="split">$${splitTip.toFixed(2)}</p>
      <p>For a total of...</p>
      <p class="split">$${total.toFixed(2)}</p>`
    );
  }
}