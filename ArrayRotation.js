function solve(arr,rotations) {

    for (let i=0; i<rotations; i++){
        let firstEl=arr[0];

        for (let j = 0; j < arr.length; j++){
            arr[j]=arr[j+1]
        }
        arr[arr.length -1] = firstEl;
    }
    console.log(arr.join(' '));
}