function solve(input) {
    let farmers = {};
    let n = Number(input.shift());
    for (let i = 0; i < n; i++) {
        let [name, area, tasksAsString] = input[i].split(' ');
        let tasks = tasksAsString.split(',');
        if (!farmers[name]) {
            farmers[name] = {};
        }
        farmers[name][area] = tasks;
    }
    for (let i = n; i < input.length; i++) {
        let line = input[i];
        if (line === 'End') break;
        let lineSplit = line.split(' / ');
        let action = lineSplit[0];
        let name = lineSplit[1];
        if (action === 'Execute') {
            let area = lineSplit[2];
            let task = lineSplit[3];
            if (farmers[name] && farmers[name][area] && farmers[name][area].includes(task)) {
                console.log(`${name} has executed the task: ${task}!`);
            } else {
                console.log(`${name} cannot execute the task: ${task}.`);
            }
        } else if (action === 'Learn Task') {
            let newTask = lineSplit[2];
            if (farmers[name]) {
                let areas = Object.keys(farmers[name]);
                if (areas.length > 0) {
                    let area = areas[0];
                    if (!farmers[name][area].includes(newTask)) {
                        farmers[name][area].unshift(newTask);
                        console.log(`${name} has learned a new task: ${newTask}.`);
                    } else {
                        console.log(`${name} already knows how to perform ${newTask}.`);
                    }
                } else {
                    console.log(`${name} does not have any areas to learn tasks.`);
                }
            } else {
                console.log(`${name} does not exist.`);
            }
        } else if (action === 'Change Area') {
            let newArea = lineSplit[2];
            if (farmers[name]) {
                let oldArea = Object.keys(farmers[name])[0];
                let tasks = farmers[name][oldArea].slice().reverse();
                delete farmers[name][oldArea];
                farmers[name][newArea] = tasks;
                console.log(`${name} has changed their work area to: ${newArea}`);
            }
        }
    }
    for (let farmer in farmers) {
        let areas = Object.keys(farmers[farmer]);
        let area = areas[0];
        let tasks = farmers[farmer][area].slice().sort((a, b) => a.localeCompare(b));
        console.log(`Farmer: ${farmer}, Area: ${area}, Tasks: ${tasks.join(', ')}`);
    }
}

solve([
    "2",
    "John garden watering,weeding",
    "Mary barn feeding,cleaning",
    "Execute / John / garden / watering",
    "Execute / Mary / garden / feeding",
    "Learn Task / John / planting",
    "Execute / John / garden / planting",
    "Change Area / Mary / garden",
    "Execute / Mary / garden / cleaning",
    "End"
]);
