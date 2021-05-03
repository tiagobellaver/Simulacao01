function calcTemp() {

    let cenario = document.querySelector('#cenario tbody');

    let timeS = parseInt(document.querySelector('#time').value);
    let cars = parseInt(document.querySelector('#cars').value);

    let arriveA = parseInt(document.querySelector('#arriveA').value);
    let arriveB = parseInt(document.querySelector('#arriveB').value);
    let arriveC = parseInt(document.querySelector('#arriveC').value);

    let serviceA = parseInt(document.querySelector('#serviceA').value);
    let serviceB = parseInt(document.querySelector('#serviceB').value);
    let serviceC = parseInt(document.querySelector('#serviceC').value);

    var resultadoA = timeS / arriveA;
    var resultadoAA = timeS / serviceA;
    var resultadoB = timeS / arriveB;
    var resultadoBB = timeS / serviceB;
    var resultadoC = timeS / arriveC;
    var resultadoCC = timeS / serviceC

    document.getElementById("resultadoA").value = resultadoA.toFixed(2);
    document.getElementById("resultadoB").value = resultadoB.toFixed(2);
    document.getElementById("resultadoC").value = resultadoC.toFixed(2);

    document.getElementById("resultadoAA").value = resultadoAA.toFixed(2);
    document.getElementById("resultadoBB").value = resultadoBB.toFixed(2);
    document.getElementById("resultadoCC").value = resultadoCC.toFixed(2);

    var LA = resultadoA / (resultadoAA - resultadoA);
    var LB = resultadoB / (resultadoBB - resultadoB);
    var LC = resultadoC / (resultadoCC - resultadoC);

    var WA = 1 / (resultadoAA - resultadoA);
    var WB = 1 / (resultadoBB - resultadoB);
    var WC = 1 / (resultadoCC - resultadoC);

    var pA = resultadoA / resultadoAA;
    var pB = resultadoB / resultadoBB;
    var pC = resultadoC / resultadoCC;

    document.getElementById("LA").value = LA.toFixed(2);
    document.getElementById("LB").value = LB.toFixed(2);
    document.getElementById("LC").value = LC.toFixed(2);

    document.getElementById("WA").value = WA.toFixed(2);
    document.getElementById("WB").value = WB.toFixed(2);
    document.getElementById("WC").value = WC.toFixed(2);

    document.getElementById("pA").value = pA.toFixed(2);
    document.getElementById("pB").value = pB.toFixed(2);
    document.getElementById("pC").value = pC.toFixed(2);

    cenario.innerHTML = '';

    for (var valorB = 0; valorB <= cars; valorB++) {
        
        var resultA = (1 - (resultadoA / resultadoAA)) * Math.pow((resultadoA / resultadoAA), valorB);
        var resultB = (1 - (resultadoB / resultadoBB)) * Math.pow((resultadoB / resultadoBB), valorB);
        var resultC = (1 - (resultadoC / resultadoCC)) * Math.pow((resultadoC / resultadoCC), valorB);

        let template = `
                <td>${valorB}</td>
                <td>P(${valorB})</td>
                <td>${resultA.toFixed(2)}</td>
                <td>${resultB.toFixed(2)}</td>
                <td>${resultC.toFixed(2)}</td>
            `;

        let tr = document.createElement('tr');

        tr.innerHTML = template;

        cenario.append(tr);

    }

}

calcTemp();

document.querySelector('#cars').addEventListener('change', calcTemp);