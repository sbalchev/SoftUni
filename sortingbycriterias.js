function solve(input) {

    console.log(input.sort(sortProducts)
        .join('\n'))

    function sortProducts(a,b) {
        let aLength = a.length;
        let bLength = b.length;
        let result = aLength - bLength;

        if (result ===0){
            return a.localeCompare(b);

        }
        return result;
    }

}