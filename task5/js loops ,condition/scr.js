function number(){
    var x = document.getElementById("pos").value;
    if(x>0){
        document.getElementById("result").innerHTML="the number is positive"
    }
    else if(x==0){
        document.getElementById("result").innerHTML="the number is zero"
    }else{
        document.getElementById("result").innerHTML="the number is negative"
    }
}
function odd(){
    var y = document.getElementById("text").value;
    if(y %2 == 0){
        document.getElementById("dem").innerHTML="the number is even"
}else{
    document.getElementById("dem").innerHTML="the number is odd"
}
}

function big(){
    var a = document.getElementById("text1").value;
    var b = document.getElementById("text2").value;
    var c = document.getElementById("text3").value;
    let big;
    if(a>=b && a>=c ){
        big= a;
}else if (b>=a && b>=c ){
    big=b;
}
else{
    big=c;
}
document.getElementById("out").innerHTML="the number is larger"+ "  "+ big
}
function replace(){
    var String = 'i am dharani raja';
     var res =  String.replace('dharani','raja');
     document.getElementById("outs").innerHTML="i am dharani raja"+ "  "+" replace text"+" "+ res;
}
