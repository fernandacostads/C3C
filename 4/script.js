function countValues() {
    number = parseInt(document.getElementById("number").value);
    valueArray = [];

    for (let i = 1; i <= number; i++) {
        value = i;
        if ((i % 5 == 0) && (i % 9 == 0)) value = 'LuidyMoura';
        else if (i % 5 == 0) value = 'Luidy';
        else if (i % 9 == 0) value = 'Moura';

        valueArray.push(value)
    }

    document.getElementById('result').innerHTML = valueArray;
    console.log(valueArray);
}