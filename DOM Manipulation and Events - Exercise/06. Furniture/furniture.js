document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let [generateBtn, buyBtn] = Array.from(document.querySelectorAll('[type="submit"]'));
    generateBtn.addEventListener('click', onGenerate);
    buyBtn.addEventListener('click', onBuy);

    function onGenerate(ev) {
        ev.preventDefault();
        recValue = document.querySelector('textarea').value;
        const data = JSON.parse(recValue);
        const tbody = document.querySelector('tbody');

        for (let item of data) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
        <td><img src="${item.img}"></td>
        <td><p>${item.name}</p></td>
        <td><p>${item.price}</p></td>
        <td><p>${item.decFactor}</p></td>
        <td><input type="checkbox"></td>
        `;
            tbody.appendChild(tr)
        }


    }

    function onBuy(ev) {
        ev.preventDefault();
        textAreaOutput = document.getElementsByTagName('textarea');
        let output = textAreaOutput[1];
        const tbody = document.querySelector('tbody');
        const rows = tbody.getElementsByTagName('tr');
        let boughtList = [];
        let totalPrice = 0;
        let factors = [];

        for (let item of rows) {
            const columns = item.getElementsByTagName('td');

            if (columns[4].querySelector('input').checked) {
                const name = columns[1].textContent;
                const price = columns[2].textContent;
                const decFactor = columns[3].textContent;
                boughtList.push(name)
                totalPrice += Number(price);
                factors.push(Number(decFactor))
            }


        }

        let sum = 0;
        for (let num of factors) sum += num;
        let average = sum / factors.length;

        output.value +=  `Bought furniture: ${boughtList.join(', ')}`
        output.value += `\nTotal price: ${totalPrice}`
        output.value += `\nAverage decoration factor: ${average}`

    }
}

