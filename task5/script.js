function add(){
    var x = Number( document.getElementById("numb").value);
    var y = Number(document.getElementById("number").value);
    var z = x + y; 
   document.getElementById("result").innerHTML= z;
    
}
function multi(){
    var x = document.getElementById("numb").value;
    var y = document.getElementById("number").value;
    var z = x * y;
   document.getElementById("result").innerHTML= z;
    
}
function sub(){
    var x = document.getElementById("numb").value;
    var y = document.getElementById("number").value;
    var z = x - y;
    document.getElementById("result").innerHTML= z;
    
}
function fah(){
    var fT = Number(document.getElementById("temp").value);
    var f = fT * 9/5 + 32;
    document.getElementById("results").innerHTML= fT +' temp is ' + f+ '\xB0F.';

}
function cel(){
    var cT = Number(document.getElementById("temp").value);
    var C = (cT - 32) * 5 / 9;
    document.getElementById("results").innerHTML= cT+' temp is ' + C + '\xB0C.';
}