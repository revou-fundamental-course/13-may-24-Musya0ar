var seg = document.getElementById('Segitiga');
var jar = document.getElementById('Jajargenjang')
var display = 0;

function segitiga()
{
    if(display == 0){
        seg.style.display = 'block';
        jar.style.display = 'none';
    display = 1;}
    else if (jar.style.display = 'none') {
        seg.style.display = 'block';
    } else {
        seg.style.display = 'none';
        display = 0;
    }
}
function jajargenjang()
{
    if(display == 1){
        jar.style.display = 'block';
        seg.style.display = 'none';
    display = 0;}
    else if (seg.style.display = 'none') {
        jar.style.display = 'block';
    } else {
        jar.style.display = 'none';
        display = 1;
    }
}

function subseg(){
    var tinggi = parseInt(document.getElementById('tinggi').value);
    var panjang = parseInt(document.getElementById('panjang').value);
    var Segresult = document.getElementById('segresult');
    Segresult = Segresult.innerText = (tinggi*panjang)/2;
}
function subjar(){
    var alasjar = parseInt(document.getElementById('alasjar').value);
    var tinggijar = parseInt(document.getElementById('tinggijar').value);
    var Jarresult = document.getElementById('jarresult');
    Jarresult = Jarresult.innerText = alasjar*tinggijar;
}

function clearfield(){
    document.getElementById('tinggi').value='';
    document.getElementById('panjang').value='';
    document.getElementById('alasjar').value='';
    document.getElementById('tinggijar').value='';
}


