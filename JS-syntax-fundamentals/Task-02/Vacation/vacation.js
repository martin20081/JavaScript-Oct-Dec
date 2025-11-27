function checkPrice ( people , groupType , day ) {
    let  price  = 0;


    switch (groupType) {
        case "Students":
            if (day === "Friday") {
                price = people * 8.45;
            } else if (day === "Saturday") {
                price = people * 9.80;
            } else if (day === "Sunday") {
                price = people * 10.46;
            }
            break;
        case "Business":
            if (day === "Friday") {
                price = people * 10.90;
            } else if (day === "Saturday") {
                price = people * 15.60;
            } else if (day === "Sunday") {
                price = people * 16;
            }
            break;
        case "Regular":
            if (day === "Friday") {
                price = people * 15;
            } else if (day === "Saturday") {
                price = people * 20;
            } else if (day === "Sunday") {
                price = people * 22.50;
            }
            break;
    }

    return price;

}

console.log(checkPrice(30, "Students", "Sunday"));