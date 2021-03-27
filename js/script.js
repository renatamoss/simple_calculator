/*inserção*/
function insert(num) {
    var number = document.getElementById('result').value;
    document.getElementById('result').value = number + num;
}

/*limpar*/
function clean() {
    document.getElementById('result').value = '';
}

/*del*/
function del() {
    var result = document.getElementById('result').value;
    document.getElementById('result').value = result.substring(0, result.length - 1);
    //substring() extrai caracteres desde indexStart até, mas não incluindo, indexEnd
}

/*calcular*/
function calculate() {
    var result = document.getElementById('result').value;
    if (result) {
        document.getElementById('result').value = eval(result);
        //função eval() Converte uma string em código JavaScript e executa.
    } else {
        document.getElementById('result').value = '';
    }
}



