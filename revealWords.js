function solve(words, text) {
    words = words.split(', ');

    for (let w of words){
        text = text.replace('*'.repeat(w.length), w);

    }

    console.log(text);

}