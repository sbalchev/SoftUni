function amazingNumber(number) {
    let numberAsString=number.toString();
    let sumOfDigits=0;

    for (let i=0; i < numberAsString.length; i++){
        sumOfDigits+=Number (numberAsString[i]);
    }
    let sumOfDigitsAsStrings=sumOfDigits.toString();
    let finalResult=sumOfDigitsAsStrings.includes('9');

    if (finalResult){
        console.log(`${numberAsString} Amazing? True`);

    } else {
        console.log(`${numberAsString} Amazing? False`);

    }
}

amazingNumber(2278);
