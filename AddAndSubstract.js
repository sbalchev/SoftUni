function solve(original) {
    let modified = [];

    for (let i=0; i < original.length; i++){
        let curremt = original[i];
        if (curremt % 2===0){
            modified.push(curremt+i);
        } else  {
            modified.push(curremt-i);
        }
    }

    console.log(modified);

    let originalSum=0;
    let modifiedSum=0;
    for (let i=0; i<original.length; i++ ){
        originalSum+=original[i];
        modifiedSum+=modified[i];

    }
    console.log(originalSum);
    console.log(modifiedSum);;

}