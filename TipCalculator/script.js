
const bill = document.getElementById("bill_value");
const tip = document.getElementById("tip_value");
const people = document.getElementById("people_count");
const total = document.getElementById("total");
const totalPerPerson = document.getElementById("totalPerPerson");
const peopTip = document.getElementById("tipPerPerson");

changeTotal()

bill.addEventListener("change", function() {changeTotal()});
tip.addEventListener("change",  function() {changeTotal()});
people.addEventListener("change", function(){changeTotal()});




function changeTotal()
{
    total.value = `${parseInt(bill.value) + Math.ceil(bill.value * (tip.value / 100))}`
    total.textContent = `[$${total.value}]`
    totalPerPerson.value = `${Math.ceil(total.value / people.value)}`
    totalPerPerson.textContent = `[$${totalPerPerson.value}]`;
    peopTip.value = `${Math.ceil(totalPerPerson.value * (tip.value / 100))}`;
    peopTip.textContent = `[$${peopTip.value}]`
}  