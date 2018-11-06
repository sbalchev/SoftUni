function solve(arr) {

    arr = arr.filter((el, i, self)=>{
        return self.indexOf(el) === i;
    });
    console.log(arr.join(' '));
}