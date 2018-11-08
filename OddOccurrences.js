function solve(input) {

    let words = input
        .toLowerCase()
        .split(' ');

    let map = new Map();

    for (let word of words){
        if (!map.has(word)){
            map.set(word, 0);

        }

        let oldCount = map.get(word);
        map.set(word, oldCount +1);

    }

    let keys = [...map]
        .filter((kvp) => kvp[1] % 2 === 1)
        .map((kvp) => kvp[0])
        .join(' ');
    console.log(keys);

}