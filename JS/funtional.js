
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

document.getElementById('deposite-button').addEventListener('click',function(){
    const amount = getInputValue('deposit-input');
    updateTotalValue('deposit-total',amount);
})
