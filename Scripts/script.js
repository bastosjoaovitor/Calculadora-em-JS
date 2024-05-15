function insert_number(num) {
    var response = document.getElementById("response-text");
    response.innerText += num;
}

function insert_sinal(sinal) {
    var response = document.getElementById("response-text");
    response.innerText += sinal;
}

function insert_ponto() {
    var response = document.getElementById("response-text");
    response.innerText += '.';
}

function clean() {
    var response = document.getElementById('response-text');
    response.innerText = '';
}

function calculate() {
    var response = document.getElementById("response-text");
    var expression = response.innerText;
    var expression = validate_calculation(expression)
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