var Text = document.getElementById('textarea');
var SaveData = document.getElementById('saveData');
var deleteData = document.getElementById('deleteData');
var DateStrong = document.getElementById('strong');

var data = new Date();
var dia     = data.getDate();                  
var mes     = data.getMonth();               
var ano    = data.getFullYear();  
var hora    = data.getHours();          // 0-23
var min     = data.getMinutes();        // 0-59    
var dias = new Array(
    'domingo','segunda','terça','quarta','quinta','sexta','sábado'
);
var html;
var content;

GetAllSAtorage();

SaveData.onclick = function() {
    AddStorage();
    GetAllSAtorage();
}

deleteData.onclick = () => {
    DeleteStorage();
}

function AddStorage (){

    html = `${dias[data.getDay()]} ${dia }/${mes+1}/${ano} as ${hora}:${0+min}`;
    content = document.getElementById('content-strong').innerHTML = `<strong id="strong">${localStorage.getItem('data')}</strong>`;

    localStorage.setItem('text', Text.value);
    localStorage.setItem('data', html.toString());

    
    alert("Gravado com sucesso!");
}

function DeleteStorage(){
    localStorage.removeItem('text'); 
    localStorage.removeItem('data');
    document.getElementById('strong').remove();
    Text.value = "";
    alert("Excluido com sucesso!");
}
function GetAllSAtorage(){
    Text.value =  localStorage.getItem('text');
content = document.getElementById('content-strong').innerHTML = `<strong id="strong"> Atualizado: ${localStorage.getItem('data')}</strong>`;
}



