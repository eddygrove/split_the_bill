//******* VÅR FÖRSTA LÖSNING *******

//****  skapade variabel med TEXTvärdet i fältet med ID=sum:
// const sum = document.getElementById("sum");

//****  skapade variabel med TEXTvärdet i fältet med ID=numberOfFriends: 
// const numberOfFriends = document.getElementById("numberOfFriends");

//****  skapade variabel med TEXTvärdet i fältet med ID=tip:
// const tip = document.getElementById("tip");

//****  skapade variabel med frasen "Varje person ska betala:" hämtad från första h2 i hela html-dokumentet: /
// let prefix = document.querySelector("h2").textContent;

// function calculate() {
//****  gjorde om alla ovan variabler till nummer isf text:
//   let currentSum = Number(sum.value);
//   let currentFriends = Number(numberOfFriends.value);
//   let currentTip = Number(tip.value);
//   let each = (currentSum + currentTip) / currentFriends;

//****  tömde första h2 från gammalt värde: /
//   document.querySelector("h2").textContent = "";

//****  la in texten från variabeln prefix (dvs texten "Varje person ska betala:" plus uträkningen each i första h2: /
//   document.querySelector("h2").textContent = prefix + " " + each;
// }

//****  dvs ganska onödigt krångligt, vi missade att Sandra lagt till en färdig h3 "result" där uträkningen kunde hamna...

//******* EN BÄTTRE LÖSNING *******/
function calculate() {
  const sum = Number(document.querySelector("#sum").value);
  const friends = Number(document.querySelector("#numberOfFriends").value);
  const tip = Number(document.querySelector("#tip").value);
  const showSum = document.getElementById("showSum");
  let each = (sum + tip) / friends;
  let percent = (tip / sum) * 100;
  let display =
    +each.toFixed(2) + " (motsvarar " + +percent.toFixed(0) + "% i dricks)";
  showSum.classList.toggle("hide");
  result.innerHTML = display;
}

//****  bygger på att följande läggs in i css-filen:
// .hide {
//     display: none;
//   }
    