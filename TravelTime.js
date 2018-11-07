function solve(input) {

    let countries = new Map()

    for (let string of input){
        let parts = string.split(' > ')

        let country = parts[0]
        let town = parts[1]
        let price = +parts[2]

        if (countries.has(country)){
            let existingTowns = countries.get(country)

            if (existingTowns.has(town)){
                let existingPrice = existingTowns.get(town)
                if (price < existingPrice){
                    existingTowns.set(town, price)
                }
            }else  {
                existingTowns.set(town,price)
            }
        }else{
            let townsToPriceMap=new Map()
            townsToPriceMap.set(town, price)
            countries.set(country, townsToPriceMap)
        }
    }

    let sortedCountries = [...countries]
        .sort((a,b)=>a[0].localeCompare(b[0]))

    for (let [country, townsMap] of sortedCountries){
        let sortedTowns = [...townsMap]
            .sort((a,b,)=>a[1] - b[1])
            .map(a=>`${a[0]} -> ${a[1]}`)

        console.log(`${country} -> ${sortedTowns.join(' ')}`)
    }
}