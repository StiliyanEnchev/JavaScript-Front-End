document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let [generateBtn, buyBtn] = Array.from(document.querySelectorAll('[type="submit"]'));
    generateBtn.addEventListener('click', onGenerate);
    buyBtn.addEventListener('click', onBuy);

    function onGenerate(ev) {
        ev.preventDefault();
        recValue = document.querySelector('textarea');
        console.log(typeof(recValue))

    }

    function onBuy(ev) {
        ev.preventDefault();
    }
}

