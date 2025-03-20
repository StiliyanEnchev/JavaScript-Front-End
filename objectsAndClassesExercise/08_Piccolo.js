function solve(commands) {
    let parkingLot = new Set();

    for (let row of commands) {
        let [command, number] = row.split(', ');
        if (command === 'IN') {
            parkingLot.add(number);
        } else if (command === 'OUT') {
            parkingLot.delete(number);
        }
    }

    if (parkingLot.size == 0) {
        console.log("Parking Lot is Empty");
    } else {
       
        let sortedPlates = [...parkingLot].sort()
        console.log(sortedPlates.join('\n'));

        };
    }




solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']

)

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
)