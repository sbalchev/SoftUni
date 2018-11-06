function solve(n){
    let fact = 1;
    for (let i=1; i<= n; i+=1){
        fact *=i;
    }
    return fact;
}
console.log(solve(10));



