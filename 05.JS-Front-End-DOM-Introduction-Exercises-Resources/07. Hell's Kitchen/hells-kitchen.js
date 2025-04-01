
function solve() {
    let input = JSON.parse(document.querySelector('#inputs textarea').value);
    let restaurants = {};

    input.forEach(entry => {
        let [restaurantName, workersData] = entry.split(' - ');
        let workers = workersData.split(', ').map(w => {
            let [name, salary] = w.split(' ');
            return { name, salary: Number(salary) };
        });

        if (!restaurants[restaurantName]) {
            restaurants[restaurantName] = { workers: [], avgSalary: 0, bestSalary: 0 };
        }

        restaurants[restaurantName].workers.push(...workers);

        let totalSalary = restaurants[restaurantName].workers.reduce((sum, w) => sum + w.salary, 0);
        let bestSalary = Math.max(...restaurants[restaurantName].workers.map(w => w.salary));
        let avgSalary = totalSalary / restaurants[restaurantName].workers.length;

        restaurants[restaurantName].avgSalary = avgSalary;
        restaurants[restaurantName].bestSalary = bestSalary;
    });

    let bestRestaurant = Object.entries(restaurants)
        .sort((a, b) => b[1].avgSalary - a[1].avgSalary)[0];

    let { workers, avgSalary, bestSalary } = bestRestaurant[1];
    workers.sort((a, b) => b.salary - a.salary);

    document.querySelector('#bestRestaurant p').textContent =
        `Name: ${bestRestaurant[0]} Average Salary: ${avgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;

    document.querySelector('#workers p').textContent =
        workers.map(w => `Name: ${w.name} With Salary: ${w.salary}`).join(' ');
}