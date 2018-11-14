class Vechicle {

    constructor(type, model, parts, fuel){
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.parts.quality
            = this.parts['engine'] * this.parts['power'];
        this.fuel = fuel;
    }

    drive ( fuelLoss ){
        this.fuel -= fuelLoss;

    }

}

let bmw = new Vechicle('BMW', 'X5', {engine: 6, power: 100}, 200);

bmw.drive(100);