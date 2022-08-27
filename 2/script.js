function calculateBhaskara() {
    ax2 = parseInt(document.getElementById("ax2").value);
    bx = parseInt(document.getElementById("bx").value);
    c = parseInt(document.getElementById("c").value);
    let results = [];
    let delta = (bx ** 2) - (4 * ax2 * c);

    if (delta < 0) {
        return "Delta é negativo";

    } else {

        let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
        let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2);
        results.push((x1).toFixed(2));
        results.push((x2).toFixed(2));
        document.getElementById('result').innerHTML = results;
    }
}