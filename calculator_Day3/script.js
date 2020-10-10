
var visor = document.querySelector('input[name=result]');
var result;

function Value(number){
    visor.value += number;
}

function Sum(){
    result = eval(visor.value);
    visor.value = result.toLocaleString('pt-BR');
}

function Clear(){
    visor.value = "";
}


