// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
//module.exports = { sum };
// we include fromEuroToDollar here as well because it needs to be exported

// one euro is:
let oneEuroIs = {
    "JPY": 133.25, // japan yen
    "USD": 1.2195, // us dollar
    "GBP": 0.85965, // british pound
}



const fromEuroToDollar = function(valueInEuro){   
    let valueInDollar = valueInEuro * oneEuroIs.USD;    
    return parseInt((valueInDollar * 10)) / 10;
}

const fromDollarToYen = function(valueInDollar){
    
    let valueInEuro = valueInDollar / oneEuroIs.USD
    var valeuInYen = valueInEuro * oneEuroIs.JPY;
    
    return parseInt((valeuInYen * 100)) / 100;
}

const fromYenToPound = function(valeuInYen){
    
    let valueInEuro = valeuInYen / oneEuroIs.JPY       
    var valeuInPound = valueInEuro * oneEuroIs.GBP;
    
    return parseInt((valeuInPound * 100000)) / 100000;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }