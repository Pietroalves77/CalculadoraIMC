function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
        document.getElementById('resultado').textContent = 'Preencha peso e altura válidos.';
        return;
    }

    const imc = peso / (altura * altura);
    const resultado = interpretarIMC(imc);
    document.getElementById('resultado').textContent = `Seu IMC é ${imc.toFixed(2)} - ${resultado}`;
}

function interpretarIMC(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc < 24.9) {
        return 'Peso normal';
    } else if (imc < 29.9) {
        return 'Sobrepeso';
    } else if (imc < 34.9) {
        return 'Obesidade Grau I';
    } else if (imc < 39.9) {
        return 'Obesidade Grau II';
    } else {
        return 'Obesidade Grau III';
    }
}
