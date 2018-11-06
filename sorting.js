function solve(input) {
    input.sort((a,b) => b - a);
    let length = input.length;
    let mergeArray = [];

    for (let i=0; i < length; i++){
        if ( i%2 === 0) {
            mergeArray.push(input.shift());
        }else{
            mergeArray.push(input.pop());

        }
    }
    console.log(mergeArray.join(' '));
}