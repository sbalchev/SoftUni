function solve(searched, text) {
    let word = text
        .toLowerCase()
        .split(' ');
    if (word.includes(searched)) {
        console.log(searched);
    }else{
        console.log(`${searched} not found!`);
    }

}