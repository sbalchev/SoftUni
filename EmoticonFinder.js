function solve(text) {
    let words = text.split(' ');

    for (let w of words){
        if (w.startsWith(':') && w.length === 2){
            console.log(w);
        }
    }
}