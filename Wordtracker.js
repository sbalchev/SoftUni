function solve(input) {

    let words = input
        .shift()
        .split(' ');

    let map = new Map();
    for (let i = 0; i < words.length; i++){
        map.set(words[i], 0);

    }
    for (let word of input){
        if (map.has(word)){
            let oldCount = map.get(word);
            map.set(word, oldCount +1);

        }
    }
    let sortedMap = [...map]
    .sort((a,b) =>{
        let aCount = a[1];
        let bCount = b[1];

        return bCount - aCount;

    });

    sortedMap.forEach((kvp) => {
        let [word, count] = kvp;

        console.log(`${word} - ${count}`);
    });
}