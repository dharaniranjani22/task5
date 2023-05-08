
function additem(){
    var x=["car","mat","sat","rat"];
    document.getElementById("input").innerHTML= x;
    var z= x.length;
    document.getElementById("output").innerHTML= z;
}
additem();
function additem1(){
    var x=["car","mat","sat","rat"];
    document.getElementById("input1").innerHTML= x;
    for(i=0;i<x.length;i++){
    document.getElementById("output1").innerHTML= x[i];
    }
}
additem1();
function additem2(){
    var x=["car","mat","sat","rat"];
    document.getElementById("input2").innerHTML= x;
     x.length=2;
    document.getElementById("output2").innerHTML= x;
    }

additem2();
function additem3(){
    var x=["car","mat","sat","rat"];
    var z=["war","car","boat"];
    document.getElementById("input3").innerHTML= x +"<br>"+z;
    var res = x.concat(z);
    var res2 =z.concat("drama",x);
    document.getElementById("output3").innerHTML= res +"<br>"+res2;
    }

additem3();

function additem4(){
    var x=["car","mat","sat","rat"];
    document.getElementById("input4").innerHTML= x;
     var z = x.constructor;
    document.getElementById("output4").innerHTML= z;
    }
additem4();
function additem5(){
    var x=["car","mat","sat","rat"];
    var a=[1,3,6,78,9];
    document.getElementById("input5").innerHTML= x;
     var z = x.copyWithin(1,3);
     var y = a.copyWithin(0,1);
    document.getElementById("output5").innerHTML= z+"<br>"+y;
    }
additem5();
function additem6(){
    var x=["@","%","*","$"];
    document.getElementById("input6").innerHTML= x;
     let iterator = x.entries();
     for(let entry of iterator){
        //console.log(entry);
    document.getElementById("output6").innerHTML= entry;
     }
    }
additem6();
