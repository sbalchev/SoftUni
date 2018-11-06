function solve(nums, params) {

    let [ take, deleteCount, searched ] = params;

    let sliced = nums.slice(0, take);
    sliced.splice(0, deleteCount);

    let counter = 0;

    for (let i=0; i < sliced.length; i ++){
        if (sliced[i]=== searched) {
counter++
    }
}
    console.log(`Number ${searched} occurs ${counter} time.`);

}