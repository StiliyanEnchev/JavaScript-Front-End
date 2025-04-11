function solve(input) {
    let n = Number(input.shift());
    let chemicals = {};

    for (let i = 0; i < n; i++) {
        let [name, quantity] = input.shift().split(' # ');
        chemicals[name] = {
            quantity: Number(quantity),
            formula: null
        };
    }

    function handleMix([chem1, chem2, amountStr]) {
        let amount = Number(amountStr);
        if (chemicals[chem1] && chemicals[chem2]) {
            if (chemicals[chem1].quantity >= amount && chemicals[chem2].quantity >= amount) {
                chemicals[chem1].quantity -= amount;
                chemicals[chem2].quantity -= amount;
                console.log(`${chem1} and ${chem2} have been mixed. ${amount} units of each were used.`);
            } 
            else {
                console.log(`Insufficient quantity of ${chem1}/${chem2} to mix.`);
            }
        }
    }

    function handleReplenish([name, amountStr]) {
        let amount = Number(amountStr);
        if (!chemicals[name]) {
            console.log(`The Chemical ${name} is not available in the lab.`);
        } 
        else {
            let current = chemicals[name].quantity;
            let added = Math.min(amount, 500 - current);
            chemicals[name].quantity += added;
            if (current + amount > 500) {
                console.log(`${name} quantity increased by ${added} units, reaching maximum capacity of 500 units!`);
            } 
            else {
                console.log(`${name} quantity increased by ${amount} units!`);
            }
        }
    }

    function handleAddFormula([name, formula]) {
        if (!chemicals[name]) {
            console.log(`The Chemical ${name} is not available in the lab.`);
        } 
        else {
            chemicals[name].formula = formula;
            console.log(`${name} has been assigned the formula ${formula}.`);
        }
    }

    function printFinalChemicals() {
        for (let [name, data] of Object.entries(chemicals)) {
            let output = `Chemical: ${name}, Quantity: ${data.quantity}`;
            if (data.formula) {
                output += `, Formula: ${data.formula}`;
            }
            console.log(output);
        }
    }

    while (input.length > 0) {
        let line = input.shift();
        let parts = line.split(' # ');
        let action = parts.shift();
        if (action == 'End') {
            break;
        }
        if (action == 'Mix') {
            handleMix(parts);
        } 
        else if (action == 'Replenish') {
            handleReplenish(parts);
        } 
        else if (action == 'Add Formula') {
            handleAddFormula(parts);
        }
    }

    printFinalChemicals();
}


solve(['4',
    'Water # 200',
    'Salt # 100',
    'Acid # 50',
    'Base # 80',
    'Mix # Water # Salt # 50',
    'Replenish # Salt # 150',
    'Add Formula # Acid # H2SO4',
    'End']
)