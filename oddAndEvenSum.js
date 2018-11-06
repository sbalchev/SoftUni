function solve (n){

    let percents = '%'.repeat(n / 10);
    let dots = '.'.repeat(10 - (n /10));

    if(n === 100){
        console.log(`100% Complete!`);
        console.log(`[%%%%%%%%%%]`);
    } else {
        console.log(`${n} % [${percents}${dots}]`);
        console.log('Still loading...');
    }


}
solve(30);