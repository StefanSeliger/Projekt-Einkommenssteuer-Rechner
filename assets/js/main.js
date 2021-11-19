let taxcalculator = function() {
    let zwanzigneunzehn = document.getElementById("zwanzigneunzehn")
    let zwanzigzwanzig = document.getElementById("zwanzigzwanzig")
    let zwanzigeinundzwanzig = document.getElementById("zwanzigeinundzwanzig")
    let single = document.getElementById("single")
    let split = document.getElementById("split")
    let income = document.getElementById("income")
    let anualIncome = document.getElementById("anualIncome")
    let incomeTax = document.getElementById("incomeTax")
    let taxyear = document.getElementById("taxyear")

    if (zwanzigeinundzwanzig.checked && single.checked) {
        if (income.value <= 9744) {
            incomeTax.innerHTML = "es muss keine Einkommenssteuer bezahlt werden"
        } else if (9745 <= income.value && income.value <= 14753) {
            incomeTax.innerHTML = ((995.21*((income.value-9744)/10000)+1400)*((income.value-9744)/10000)).toFixed(2) +" €"
        } else if (14754 <= income.value && income.value <= 57918) {
            incomeTax.innerHTML = (((208.85*((income.value-14753)/10000)+2397)*((income.value-9744)/10000))+950.96).toFixed(2) +" €"
        } else if (57919 <= income.value && income.value <= 274612) {
            incomeTax.innerHTML = ((0.42*income.value)-9136.63).toFixed(2) +" €"
        } else if (income.value >= 274613) {
            incomeTax.innerHTML = ((0.45*income.value)-17374.99).toFixed(2) +" €"
        }   
        anualIncome.innerHTML = income.value +" €"
        taxyear.innerHTML = "2021"
    } else if (zwanzigeinundzwanzig.checked && split.checked) {
        if ((income.value/2) <= 9744) {
            incomeTax.innerHTML = "es muss keine Einkommenssteuer bezahlt werden"
        } else if (9745 <= (income.value/2) && (income.value/2) <= 14753) {
            incomeTax.innerHTML = ((995.21*((income.value-9744)/10000)+1400)*(((income.value/2)-9744)/10000)).toFixed(2) +" €"
        } else if (14754 <= (income.value/2) && (income.value/2) <= 57918) {
            incomeTax.innerHTML = (((208.85*(((income.value/2)-14753)/10000)+2397)*(((income.value/2)-9744)/10000))+950.96).toFixed(2) +" €"
        } else if (57919 <= (income.value/2) && (income.value/2) <= 274612) {
            incomeTax.innerHTML = ((0.42*(income.value/2))-9136.63).toFixed(2) +" €"
        } else if (income.value >= 274613) {
            incomeTax.innerHTML = ((0.45*(income.value/2))-17374.99).toFixed(2) +" €"
        }   
        anualIncome.innerHTML = (income.value/2) +" € pro Person"
        taxyear.innerHTML = "2021"
    } else if (zwanzigzwanzig.checked && single.checked) {
        if (income.value <= 9408) {
            incomeTax.innerHTML = "es muss keine Einkommenssteuer bezahlt werden"
        } else if (9409 <= income.value && income.value <= 14532) {
            incomeTax.innerHTML = ((972.87*((income.value-9408)/10000)+1400)*((income.value-9408)/10000)).toFixed(2) +" €"
        } else if (14533 <= income.value && income.value <= 57051) {
            incomeTax.innerHTML = (((212.02*((income.value-14532)/10000)+2397)*((income.value-14532)/10000))+972.79).toFixed(2) +" €"
        } else if (57052 <= income.value && income.value <= 270500) {
            incomeTax.innerHTML = ((0.42*income.value)-8963.74).toFixed(2) +" €"
        } else if (income.value >= 270501) {
            incomeTax.innerHTML = ((0.45*income.value)-17078.74).toFixed(2) +" €"
        }   
        anualIncome.innerHTML = income.value +" €"
        taxyear.innerHTML = "2020"
    } else if (zwanzigzwanzig.checked && split.checked) {
        if ((income.value/2) <= 9408) {
            incomeTax.innerHTML = "es muss keine Einkommenssteuer bezahlt werden"
        } else if (9409 <= (income.value/2) && (income.value/2) <= 14532) {
            incomeTax.innerHTML = ((972.87*((income.value-9408)/10000)+1400)*(((income.value/2)-9408)/10000)).toFixed(2) +" €"
        } else if (14533 <= (income.value/2) && (income.value/2) <= 57051) {
            incomeTax.innerHTML = (((212.02*(((income.value/2)-14532)/10000)+2397)*(((income.value/2)-14532)/10000))+972.79).toFixed(2) +" €"
        } else if (57052 <= (income.value/2) && (income.value/2) <= 270500) {
            incomeTax.innerHTML = ((0.42*(income.value/2))-8963.74).toFixed(2) +" €"
        } else if (income.value >= 270501) {
            incomeTax.innerHTML = ((0.45*(income.value/2))-17078.74).toFixed(2) +" €"
        }   
        anualIncome.innerHTML = (income.value/2) +" € pro Person"
        taxyear.innerHTML = "2020" 
    } else if (zwanzigneunzehn.checked && single.checked) {
        if (income.value <= 9168) {
            incomeTax.innerHTML = "es muss keine Einkommenssteuer bezahlt werden"
        } else if (9169 <= income.value && income.value <= 14254) {
            incomeTax.innerHTML = ((980.14*((income.value-9168)/10000)+1400)*((income.value-9168)/10000)).toFixed(2) +" €"
        } else if (14255 <= income.value && income.value <= 55960) {
            incomeTax.innerHTML = (((216.16*((income.value-14254)/10000)+2397)*((income.value-14532)/10000))+965.58).toFixed(2) +" €"
        } else if (55961 <= income.value && income.value <= 265326) {
            incomeTax.innerHTML = ((0.42*income.value)-8780.90).toFixed(2) +" €"
        } else if (income.value >= 265327) {
            incomeTax.innerHTML = ((0.45*income.value)-16740.68).toFixed(2) +" €"
        }
        anualIncome.innerHTML = income.value +" €"
        taxyear.innerHTML = "2019"
    } else if (zwanzigneunzehn.checked && split.checked) {
        if ((income.value/2) <= 9168) {
            incomeTax.innerHTML = "es muss keine Einkommenssteuer bezahlt werden"
        } else if (9169 <= (income.value/2) && (income.value/2) <= 14254) {
            incomeTax.innerHTML = ((980.14*((income.value-9168)/10000)+1400)*(((income.value/2)-9168)/10000)).toFixed(2) +" €"
        } else if (14255 <= (income.value/2) && (income.value/2) <= 55960) {
            incomeTax.innerHTML = (((216.16*(((income.value/2)-14254)/10000)+2397)*(((income.value/2)-14254)/10000))+965.58).toFixed(2) +" €"
        } else if (55961 <= (income.value/2) && (income.value/2) <= 265326) {
            incomeTax.innerHTML = ((0.42*(income.value/2))-8780.90).toFixed(2) +" €"
        } else if (income.value >= 265327) {
            incomeTax.innerHTML = ((0.45*(income.value/2))-16740.68).toFixed(2) +" €"
        }
        anualIncome.innerHTML = (income.value/2) +" € pro Person"
        taxyear.innerHTML = "2019"
    } else {
        incomeTax.innerHTML = "0.00 €"
        anualIncome.innerHTML = "0.00 €"
        taxyear.innerHTML = "Ihrer Wahl"
    } 
}
taxcalculator()
    