function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove', onMove);
    const output = document.getElementById('result');

    function onMove(event) {

        const offsetX = event.offsetX;


        const percent = Math.round(offsetX / event.target.clientWidth * 100)

        output.textContent = `${percent}%`;
    }
}