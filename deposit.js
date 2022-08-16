
// step number 1 add event litener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step 2  get the deposit  amount from diposit inpot fild
    // for input fild use .value inside the input fild
    const depositField = document.getElementById('Deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);


    // steap 3 get the current deposir total
    // for non input (element other then input, textarea) use inner text to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //  4  add number to set total deposit 
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set  the depot total 
    depositTotalElement.innerText = currentDepositTotal;

    // step num 5 get total balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    //  step 6 : calculate current  total  balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total 
    balanceTotalElement.innerText = currentBalanceTotal;


    //    step -7 clear the deposit field
    depositField.value = '';
})