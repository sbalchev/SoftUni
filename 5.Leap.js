function solve(year) {

    let isLeap = false;
    if (year % 4 === 0){
        isLeap = true;
    }
    if (year % 100 === 0) {
        isLeap = false;
    }
    if (year % 400 === 0){
        isLeap = true;
    }
    console.log(isLeap ? "yes" : "no");

}

solve(4);
