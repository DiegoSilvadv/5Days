

var borderValue =  document.querySelector('input[name=border-radio]');
var backgroundValue =  document.querySelector('input[name=background]');
var widthValue =  document.querySelector('input[name=width]');
var heightValue =  document.querySelector('input[name=height]');


borderValue.addEventListener('keyup', function(){
    AlterBorder();
});

backgroundValue.addEventListener('keyup', function(){
    AlterBackground();
});

widthValue.addEventListener('keyup', function(){
    AlterWidth();
});

heightValue.addEventListener('keyup', function(){
    AlterHeight();
});

function AlterBorder(){
    var Radius = borderValue.value;
    console.log(Radius);
    document.getElementById('model1').style.borderRadius = `${Radius}%`;
}

function AlterBackground(){
    var hex = backgroundValue.value;
    console.log(hex);
    document.getElementById('model1').style.backgroundColor = `#${hex}`;
}

function AlterWidth() {
    var porcent = widthValue.value;
    console.log(porcent);
    document.getElementById('model1').style.width = `${porcent}%`;
}

function AlterHeight() {
    var porcent = heightValue.value;
    console.log(porcent);
    document.getElementById('model1').style.height = `${porcent}%`;
}