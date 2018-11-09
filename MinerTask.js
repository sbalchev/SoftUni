function solve(arr) {
    let resourcesObj = {};

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            if (arr[i] in resourcesObj) {
                resourcesObj[arr[i]] += Number(arr[i + 1]);
            } else {
                resourcesObj[arr[i]] = Number(arr[i + 1]);
            }
        }
    }

    for (let resource in resourcesObj) {
        console.log(`${resource} -> ${resourcesObj[resource]}`)
    }
}

