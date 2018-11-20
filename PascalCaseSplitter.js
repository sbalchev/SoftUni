function solve(text) {

    let pascalCaseWrrds = [];
    let currentWotd = text[0];

    for (let i = 1; i<text.length; i++){
        if (text[i].toUpperCase() !== text[i]){
            currentWotd = currentWotd.concat(text[i]);

        } else{
            pascalCaseWrrds.push(currentWotd);
            currentWotd = text[i];
        }
    }
    pascalCaseWrrds.push(currentWotd);
    console.log(pascalCaseWrrds.join(', '));
}