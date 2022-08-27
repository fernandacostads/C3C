function calculateTriangle() {
  a = parseInt(document.getElementById("sideA").value);
  b = parseInt(document.getElementById("sideB").value);
  c = parseInt(document.getElementById("sideC").value);
  calculateValue = '';

  if (a < (b + c) && b < (a + c) && c < (a + b)) {

    if (a == b && b == c) {
      calculateValue = 'Triângulo Equilátero: Os três lados são iguais.';
    }
    else if (a == b || a == c || c == b) {
      calculateValue = 'Triângulo Isósceles: Dois lados iguais.';
    }
    else if (a !== b && a !== c && c !== b) {
      calculateValue = 'Triângulo Escaleno: Todos os lados são diferentes.';
    }
  }
  else {
    calculateValue = 'Insira valores válidos!';
  }
  document.getElementById('result').innerHTML = calculateValue;
}