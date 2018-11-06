function solve(distance, passengers, price) {
    let needFuel =(distance /100) *7;
    needFuel +=passengers *0.100;
    let money = needFuel * price;
    console.log(`Needed money for that trip is ${money} lv.`);

}
solve(260);