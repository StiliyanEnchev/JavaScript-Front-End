
function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', (ev) => {
        let target = ev.target;
        let value = Math.floor(ev.offsetX / target.clientWidth * 100);
        document.getElementById('result').textContent = value + '%';

    });
}