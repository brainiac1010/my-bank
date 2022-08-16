/*
1.add event handeler  with the withdraw button
2.get the withdraw ammount from the withdraw inpust field 
2.5.also makesure  to convert the input into a number by using parseFloat
3. get previous withdraw total 
4.clacultae total withdraw ammount
4.5.set total withdraw amount
5. get the privious total
6. set the new balance total
7. clear the input field
*/

// step 1

document.getElementById('btn-withdraw').addEventListener('click', function () {

    //    step 2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmoutString = withdrawField.value;
    const newWithdrawAmout = parseFloat(newWithdrawAmoutString);
    // step 3
    const WithdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = WithdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // step 4

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmout;
    WithdrawTotalElement.innerText = currentWithdrawTotal;
    // step 5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmout;
    balanceTotalElement.innerText = newBalanceTotal;
    // step7
    withdrawField.value = '';

})