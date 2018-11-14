function solve(input) {

    input.shift();
    let jsonTown = [];

    for (let inputRow of input){
             let [ town, lat, long ]
                = inputRow.split('|')
                 .filter(Boolean)
                 .map(el => el.trim());

    lat = +Number(lat).toFixed(2);
    long = +Number(long).toFixed(2);

    jsonTown.push(JSON.stringify({
        Town: town,
        Latitude: lat,
        Longitude: long
    }));

    }

    console.log(`[${jsonTown.join(',')}]`);
}