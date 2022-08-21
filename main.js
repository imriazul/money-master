let returnabileableBalanse = 0;
document.getElementById('calculate-btn').addEventListener('click', function () {

    // getting monthly selary by input field
    const selaryString = document.getElementById('income').value;
    const selarInNumber = parseInt(selaryString);

    // getting expenses like food, rent and marker and conver it number 
    const foodCostTxt = document.getElementById('food-exp').value;
    const foodCostNumber = parseInt(foodCostTxt);

    const rentCostTxt = document.getElementById('rent-exp').value;
    const rentCostNumber = parseInt(rentCostTxt);

    const marketTxt = document.getElementById('market-exp').value;
    const marketNumber = parseInt(marketTxt);

    // calculate total expenses
    const totalExpenses = foodCostNumber + rentCostNumber + marketNumber;

    // set toral expense in html 
    const totalExpanseText = document.getElementById('total-expenses');
    totalExpanseText.innerText = totalExpenses;

    // set abileable balanse in html 
    const abileableBalanse = document.getElementById('abaile-blns');
    abileableBalanse.innerText = selarInNumber - totalExpenses;

    // savings condition check 
    if ((selarInNumber - totalExpenses) > 0) {
        returnabileableBalanse = parseInt(abileableBalanse.innerText);
    }
    else{
        alert('You Cant Save This Month')
    }
})

// const results = calculation();
// console.log(results);

document.getElementById('save-btn').addEventListener('click', function () {

    const savingText = document.getElementById('save-persent-input').value;
    const savingPersent = parseFloat(savingText);
    const savings = returnabileableBalanse * savingPersent / 100;

    // apply input condition 
    if (savingPersent >= 0 && savingPersent <= 100) {
        // savings calculation
        const totalSavingText = document.getElementById('saving-amount');
        totalSavingText.innerText = savings;

        // remaining calculation
        const remainBalans = document.getElementById('remain-blns');
        remainBalans.innerText = returnabileableBalanse - savings;
    }
    else {
        alert('Something went wrong')
    }

})