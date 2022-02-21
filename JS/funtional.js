
function getInputValue (fieldId){
    const InputField = document.getElementById(fieldId);
          const valueInText =       InputField.value;
          const value = parseFloat (valueInText);
          InputField.value = '';
          return value;
}

function updateTotalValue(fieldId,amount){
    // const totaltag = document.getElementById(fieldId);
    // const totalTagValueText = totaltag.innerText;
    // const totalTagValue = parseFloat (totalTagValueText);
    const previousTotal = getInnerTextValue(fieldId);
    const currentTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = currentTotal;
} 
function getInnerTextValue(fieldId){
    const fieldTag = document.getElementById(fieldId);
    const fieldValueText = fieldTag.innerText;
    const value = parseFloat (fieldValueText);
    return value;
}

function updateBalance(amount,isAdd){
//  const balanceTag = document.getElementById('balance-total');
//  const balanceText = balanceTag.innerText
//  const previousBalance = parseFloat(balanceText);
const previousBalance = getInnerTextValue('balance-total');
 let newBalance;
 if (isAdd==true){
  newBalance = previousBalance+amount;
 }
 else{
  newBalance = previousBalance-amount;
 }

 document.getElementById('balance-total').innerText = newBalance;


}

document.getElementById('deposite-button').addEventListener('click',function(){
    const amount = getInputValue('deposit-input');

    if (amount>0){
        updateTotalValue('deposit-total',amount);
        updateBalance(amount,true);
    }
    
})

// withdraw button

document.getElementById('withdraw-button').addEventListener('click',function(){
    const amount = getInputValue("withdraw-input");
    const balance = getInnerTextValue('balance-total');
    if (amount>0 && amount<=balance){
        updateTotalValue ('withdraw-total',amount);
        updateBalance(amount,false);
    }
   
})