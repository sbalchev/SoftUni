function solve(text) {
    let words = text.split(' ');

    for (let word of words) {
        if (word.startsWith('#') && word.length >1){
        let allLettersAreSymbols = true;
        let substring = word.substring(1);
            for (let symbol of substring){
                if (!isLetter(symbol)){
                    allLettersAreSymbols = false;
                    break;
                }
            }

            if (allLettersAreSymbols){
                console.log(substring);
        } 
    }
    
    function isLetter(symbol) {
        let asciiCode = symbol
            .toLowerCase()
            .charCodeAt(0);
        
        return asciiCode >= 97 && asciiCode <= 122;
        
        }

    }
}