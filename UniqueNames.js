function solve(input) {
    let set = new Set();

    for (let el of input){
        set.add(el);

    }

    let sortedSet = [...set.keys()]
        .sort((a,b)=>{
            return a.length - b.length || a.localeCompare(b);
        });
    
    for (let el of sortedSet){
        console.log(el);

    }
}