
function getInputValue (fieldId){
    const InputField = document.getElementById(fieldId);
          const valueInText =       InputField.value;
          const value = parseFloat (valueInText);
          InputField.value = '';
          return value;
}

function updateTotalValue(fieldId,amount){
    const totaltag = document.getElementById(fieldId);
    const totalTagValueText = totaltag.innerText;
    const totalTagValue = parseFloat (totalTagValueText);
    const currentTotal = totalTagValue + amount;
    totaltag.innerText = currentTotal;
} 

function updateBalance(amount,isAdd){
 const balanceTag = document.getElementById('balance-total');
 const balanceText = balanceTag.innerText
 const previousBalance = parseFloat(balanceText);
 let newBalance;
 if (isAdd==true){
  newBalance = previousBalance+amount;
 }
 else{
  newBalance = previousBalance-amount;
 }

balanceTag.innerHTML = newBalance;


}

document.getElementById('deposite-button').addEventListener('click',function(){
    const amount = getInputValue('deposit-input');
    updateTotalValue('deposit-total',amount);
    updateBalance(amount,true);
})

// withdraw button

document.getElementById('withdraw-button').addEventListener('click',function(){
    const amount = getInputValue("withdraw-input");
    updateTotalValue ('withdraw-total',amount);
    updateBalance(amount,false);
})