function solve(groupSize, type, day) {

    let price =0;
        
    switch (type) {
        case "Students":
            if (day === "Friday") {
                price += groupSize * 8.45;
            }else if (day === "Saturday") {
                    price += groupSize * 9.8;
                } else {
                    price += groupSize * 10.46;
                }
                if (groupSize >= 30) {
                    price -= price * 0.15;
                }
            break;
        case "Business":
            if (groupSize >= 100) {
                groupSize -= 10;
            }
            if (day === "Friday") {
                price += groupSize * 10.9;
            }else if (day === "Saturday") {
                    price += groupSize * 15.6;
                } else {
                    price += groupSize * 16;
                }
                break;
            case"Regular":
                if (day === "Friday") {
                    price += groupSize * 15;
                } else if (day === "Saturday") {
                        price += groupSize * 20;
                    } else {
                        price += groupSize * 22.5;
                    }
                    if (groupSize >= 10 && groupSize <=20) {
                    price *= 0.95;
                    }
                    break;

                }
                console.log(`Total price: ${price.toFixed(2)}`);
    }

    solve(30, "Students", "Sunday")