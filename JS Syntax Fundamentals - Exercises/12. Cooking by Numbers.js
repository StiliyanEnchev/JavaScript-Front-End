function cooking_numbers(number, op1, op2, op3, op4, op5) {
    let operations = [op1, op2, op3, op4, op5];
    
    operations.forEach(op => {
        if (op == "chop") {
            number = number / 2;
        } else if (op == "dice") {
            number = Math.sqrt(number);
        } else if (op == "spice") {
            number = number + 1;
        } else if (op == "bake") {
            number = number * 3;
        } else if (op == "fillet") {
            number = number * 0.80;
        }

        console.log(number);
    });
}
cooking_numbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
