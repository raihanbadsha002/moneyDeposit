// login Button event handler
document.getElementById("loginBtn").addEventListener("click", () => {
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("transaction-area").style.display = "block";
});


// deposit button event handler
document.getElementById("DepositBtn").addEventListener("click", () => {
    if (document.getElementById("AddDepositAmount").value == "") {
        return alert("Please Deposit your money");
    }
    const depositNumber = inputValidNumber("AddDepositAmount");
    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);
    
   
})


// withdraw button event handler
document.getElementById("WithdrawBtn").addEventListener("click", () => { 
    if (document.getElementById("AddWithdrawAmount").value == "") {
        return alert("Please Withdraw your money");
    }
   const withdrawNumber = inputValidNumber("AddWithdrawAmount");
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1 * withdrawNumber);   

})


// All about function=======///

function inputValidNumber(id) {
    const inputAmount = document.getElementById(id).value;
    const inputNumber = parseFloat(inputAmount);
    document.getElementById(id).value = "";
    return inputNumber; 
     
}

function updateSpanText(id, inputNumber) {
    const current =  document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount =  inputNumber +  currentNumber;
    document.getElementById(id).innerText = totalAmount;
}