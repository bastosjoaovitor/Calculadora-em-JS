function insert(num) {
    response = document.getElementById("response-text");
    response.innerText += num;
}

function clean() {
    response = document.getElementById('response-text');
    response.innerText = '';
}