function calculateGrade() {
    let grade = parseInt(document.getElementById('grade').value);
    let newGrade;
    if (grade < 38) {
        console.log('entrou')
        document.getElementById('result').innerHTML = `Aluno foi reprovado com nota ${grade}`;
    } else if (grade % 5 >= 3) {
        grade = grade + (5 - (grade % 5))
        document.getElementById('result').innerHTML = `Aluno foi aprovado com nota ${grade}`;
    } else {
        newGrade = grade - (grade % 5)
        if (newGrade < 40) {
            document.getElementById('result').innerHTML = `Aluno foi reprovado com nota ${newGrade}`;
        } else {
            document.getElementById('result').innerHTML = `Aluno foi aprovado com nota ${newGrade}`;
        }
    }
}
