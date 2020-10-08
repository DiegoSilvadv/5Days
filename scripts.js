
//botoes menu
var btnCloseLathe = document.querySelector('button#close-lathe');
var btnCloseCutter = document.querySelector('button#close-cutter');

//lathe
var btnPrimaryLathe = document.querySelector('button#lathe-button');
var btnClearLathe =  document.querySelector('button#btn-clear-lathe');
var btnElementLathe = document.querySelector('button#btn-somar');
var inputElementDiameter = document.querySelector('input[name=diameter]');
var inputElementVC = document.querySelector('input[name=VC]');
var inputElementRPM = document.querySelector('input[name=rpm-result]');

// fresa
var btnPrimaryCutter = document.querySelector('button#cutter-button');
var btnClearCutter =  document.querySelector('button#btn-clear-cutter');
var btnElementCutter = document.querySelector('button#btn-somar-cutter');
var inputElementDiameterCutter = document.querySelector('input[name=diameter-cutter]');
var inputElementVCCutter = document.querySelector('input[name=VC-cutter]');
var inputElementRPMCutter = document.querySelector('input[name=rpm-cutter-result]');

//funções dos botoes
btnPrimaryLathe.onclick = function(){
    OpenLathe();
}

btnPrimaryCutter.onclick = function() {
    OpenCutter();
}

btnCloseLathe.onclick = function(){
    CloseLathe();
}

btnCloseCutter.onclick =function(){
    CloseCutter();
}

btnClearLathe.onclick = function() {
    ClearInputLathe();
}

btnClearCutter.onclick = function() {
    ClearInputCutter();
}

//logica
btnElementLathe.onclick = function() {
    var diameter = inputElementDiameter.value;
    var VC = inputElementVC.value;

    var rpm = (VC*1000)/(3.14*diameter);
    inputElementRPM.value = rpm.toFixed(0);
}

btnElementCutter.onclick = function() {
    var diameter = inputElementDiameterCutter.value;
    var VC = inputElementVCCutter.value;

    var rpm = (VC*1000)/(3.14*diameter);
    inputElementRPMCutter.value = rpm.toFixed(0);
}

//functions
function OpenLathe(){
    document.querySelector('div#lathe').style.display = "block"; 
    document.querySelector('div#cutter').style.display = "none";
}

function CloseLathe(){
    document.querySelector('div#lathe').style.display = "none";
}

function OpenCutter() {
    document.querySelector('div#cutter').style.display = "block"; 
    document.querySelector('div#lathe').style.display = "none";
}

function CloseCutter() {
    document.querySelector('div#cutter').style.display = "none";
}

function ClearInputLathe(){
    inputElementDiameter.value = "";
    inputElementVC.value = "";
    inputElementRPM.value = "";
}

function ClearInputCutter() {
    inputElementDiameterCutter.value = "";
    inputElementVCCutter.value = "";
    inputElementRPMCutter.value = "";
}

document.querySelector('div#cutter').style.display = "none";
document.querySelector('div#lathe').style.display = "none";
