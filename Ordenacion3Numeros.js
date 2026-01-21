function analizarNumeros() {

    let val1 = document.getElementById('num1').value;
    let val2 = document.getElementById('num2').value;

    let val3 = document.getElementById('num3').value;

    let divResultado = document.getElementById('resultado');


    divResultado.style.display = "block";


    if (val1 === null || val2 === null || val3 === null) {
        divResultado.innerHTML = "<p style='color: #ff6b6b; text-align: center;'> Debes ingresar por lo menos tres números.</p>";
        divResultado.style.border = "1px solid #ff6b6b";
        return;
    } else {
        divResultado.style.border = "1px dashed red";
    }

    let n1 = Number(val1);
    let n2 = Number(val2);
    let n3 = Number(val3);
    let mensaje = "";


    if (n1 === n2 && n2 === n3) {
        mensaje = `<p style="text-align: center; color: red; font-weight: bold; font-size: 1.1rem;">
                   ¡Los 3 números son iguales!</p>
                   <p style="text-align: center;">Valor: ${n1}</p>`;
    } else {
        let numeros = [n1, n2, n3];
        let mayorAMenor = [...numeros].sort((a, b) => b - a);
        let menorAMayor = [...numeros].sort((a, b) => a - b);

        mensaje = `
            <p><strong>Mayor a menor:</strong> <span style="color:red">${mayorAMenor.join(", ")}</span></p>
            <p><strong>Menor a mayor:</strong> <span style="color:red">${menorAMayor.join(", ")}</span></p>
            <hr>
            <p>Mayor: <strong>${mayorAMenor[0]}</strong></p>
            <p>Centro: <strong>${mayorAMenor[1]}</strong></p>
            <p>Menor: <strong>${mayorAMenor[2]}</strong></p>
        `;
    }

    divResultado.innerHTML = mensaje;
}
