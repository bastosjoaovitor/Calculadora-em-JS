function insert_number(num) {
    var response = document.getElementById("response-text");
    var parts = response.innerText.split(/[\^÷×\-+]/);
    var lastPart = parts[parts.length - 1];
    if (num == 0) {
        if (response.innerText.length == 0 || lastPart.slice(-1) !== '0' || lastPart.includes('.')) {
            response.innerText += '0';
        }
    } else {
        if (!lastPart.includes('.') && lastPart[0] == '0') {
            response.innerText = response.innerText.slice(0, -1);
            response.innerText += num;
        } else {
            response.innerText += num;
        }
    }
}

function insert_sinal(sinal) {
    var response = document.getElementById("response-text");
    if (sinal == '-' && response.innerText.length == 0) {
        response.innerText += '-';
    } else if (response.innerText.length > 0) {
        if (['^', '÷', '×', '-', '+'].includes(response.innerText.slice(-1))) {
            response.innerText = response.innerText.slice(0, -1);
            response.innerText += sinal;
        } else {
            response.innerText += sinal;
        }
    }
}

function insert_ponto() {
    var response = document.getElementById("response-text");
    var parts = response.innerText.split(/[\^÷×\-+]/);
    var lastPart = parts[parts.length - 1];
    if (lastPart == '') {
        response.innerText += '0.';
    } else if (!response.innerText.includes('.')) {
        response.innerText += '.';
    }

    if (!response.innerText.includes('.')) {
        response.innerText += '.';
    }
}

function clean() {
    var response = document.getElementById('response-text');
    response.innerText = '';
}

function calculate() {
    var response = document.getElementById("response-text");
    var expression = response.innerText;
    var expression = validate_calculation(expression);
    var result;
    try {
        result = eval(expression);
        response.innerText = result;
    } catch (error) {

    }
}

function validate_calculation(calc) {
    var calculo = calc.replace(/\^/g, '**');
    calculo = calculo.replace(/÷/g, '/');
    calculo = calculo.replace(/×/g, '*');
    return calculo;
}