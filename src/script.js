if (typeof window.alert === "undefined") {
    window.alert = () => {};
}
let totalBalance = 0;
const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");
const incomeBtn = document.getElementById("incomeBtn");
const expenseBtn = document.getElementById("expenseBtn");
const incomeList  = document.getElementById("incomeList");
const expenseList = document.getElementById("expenseList");
const balanceDisplay = document.getElementById("balance");


function addTransaction(type) { 
    const description = descInput.value;
    const amount = Number(amountInput.value);
   if (description !==""&& !isNaN(amount) && amount > 0) {
    const li = document.createElement("li");
    li.textContent = `${description} - ${amount} kr (Inkomst)`;
   if (type === "income") { 
    incomeList.appendChild(li);
    totalBalance += amount;
   } else {
    li.textContent = `${description} - ${amount} kr (Utgift)`;
    expenseList.appendChild(li);
    totalBalance -= amount;
   }
    balanceDisplay.textContent = totalBalance
 
descInput.value = "";
amountInput.value = "";
} else { 
alert("Vänligen fyll i både beskrivning och korrekt belopp.");
 }
}
incomeBtn.addEventListener("click", () => addTransaction("income"));
expenseBtn.addEventListener("click", () => addTransaction("expense"));
