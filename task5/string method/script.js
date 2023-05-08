
function func() {
    var arr = ["shift", "splice", "filter", "pop"];
    document.getElementById("in").innerHTML= "Input array: "+arr;
    var popped = arr.pop();
    document.getElementById("res").innerHTML= "Removed element: " + popped +" <br>"+"Remaining elements: " + arr;
}
func();
function func1() {
    var x = "dharani raja";
    document.getElementById("in1").innerHTML= "Input array: "+x;
    var popped = x.length;
    document.getElementById("res1").innerHTML= "length: " + popped ;
    
}
func1();
function func2() {
    var a = "dharani, raja,family,text";
    document.getElementById("in2").innerHTML= "Input array: "+a;
    var popped = a.slice(8,20);
    document.getElementById("res2").innerHTML= "slice text: " + popped ;
}
func2();
function func3() {
    var b = "dharani,raja,text";
    document.getElementById("in3").innerHTML= "Input array: "+b;
    var popped = b.substring(0,7);
    document.getElementById("res3").innerHTML= "substring text: " + popped ;
}
func3();
function func4() {
    var u = "dharani,raja,text";
    document.getElementById("in4").innerHTML= "Input array: "+u;
    var popped = u.substr(0,4);//c.slice(3,4);
    document.getElementById("res4").innerHTML= "substr text: " + popped ;
}
func4();
function func5() {
    var c = "dharani,raja,text";
    document.getElementById("in5").innerHTML= "Input array: "+c;
    var popped = c.replace("raja","edhaya");//c.slice(3,4);
    document.getElementById("res5").innerHTML= "replace text: " + popped ;
}
func5();

function func6() {
    var c = "cat is a rat rat is cat";
    document.getElementById("in6").innerHTML= "Input array: "+c;
    var popped = c.replaceAll("cat","rat");
    document.getElementById("res6").innerHTML= "replaceAll text: " + popped ;
}
func6();
function func7() {
    var c = "dharaniraja";
    document.getElementById("in7").innerHTML= "Input array: "+c;
    var popped = c.toUpperCase();
    document.getElementById("res7").innerHTML= "toUpperCase text: " + popped ;
}
func7();
function func8() {
    var c = "DHARANI RAJA";
    document.getElementById("in8").innerHTML= "Input array: "+c;
    var popped = c.toLowerCase();
    document.getElementById("res8").innerHTML= "toLowerCase text: " + popped ;
}
func8();
function func9() {
    var c = "DHARANI ";
    var d="raja";
    document.getElementById("in9").innerHTML= "Input array 1: "+c;
    document.getElementById("int9").innerHTML= "Input array 1: "+d;
    var popped = c.concat(d);
    document.getElementById("res9").innerHTML= "concat text: " + popped ;
}
func9();
function func10() {
    var c = "DHARANI ";
    var d="raja";
    document.getElementById("in9").innerHTML= "Input array 1: "+c;
    document.getElementById("int9").innerHTML= "Input array 1: "+d;
    var popped = c.concat(d);
    document.getElementById("res9").innerHTML= "concat text: " + popped ;
}
func10();
function func15() {
    var c = "  DHARANI   RAJA  ";
    document.getElementById("in15").innerHTML= "Input array: "+c;
    document.getElementById("int15").innerHTML= "length array: "+c.length;

    var popped = c.trim();
    document.getElementById("res15").innerHTML= "trim text: " + popped ;
    document.getElementById("inp15").innerHTML= "length text: " + popped.length;
}
func15();

function func11() {
    var c = "8";
    document.getElementById("in11").innerHTML= "Input array: "+c;
    var popped = c.padStart(9,"x");
    document.getElementById("res11").innerHTML= "padStart text: " + popped ;
    // let numb = 5;
    //   let text = numb.toString();
    //    document.getElementById("rest11").innerHTML = text.padStart(4,0);
}
func11();
function func16() {
    var c = "8";
    document.getElementById("in16").innerHTML= "Input array: "+c;
    var popped = c.padEnd(9,"x");
    document.getElementById("res16").innerHTML= "padend text: " + popped ;
    
}
func16();
function func12() {
    var c = "Dharani";
    document.getElementById("in12").innerHTML= "Input array: "+c;
    var popped = c.charAt(3);
    document.getElementById("res12").innerHTML= "charAt text: " + popped ;
    
}
func12();
function func13() {
    var c = "Dharani";
    document.getElementById("in13").innerHTML= "Input array: "+c;
    var popped = c.charCodeAt(3);//returns the unicode of the character at a given position 
    document.getElementById("res13").innerHTML= "charCodeAt text: " + popped ;
    
}
func13();
function func14() {
    var c = "cat is eating";
    document.getElementById("in14").innerHTML= "Input array: "+c;
    var popped = c.split(""); //char split
    document.getElementById("res14").innerHTML= " char split text: " + popped[2] ;

    var popped = c.split(" "); //words split
    document.getElementById("rest14").innerHTML= " words split text: " + popped[2] ;

}
func14();


function demo() {
    var c = "i am using wifi connection dfg";
    document.getElementById("char").innerHTML= "Input array: "+c;
    var res = c.indexOf("wifi");
    document.getElementById("out").innerHTML= "indexOf text: " + res ;   
}
demo();

function demo2() {
    var b = "my cat is runing in ground";
    document.getElementById("char2").innerHTML= "Input array: "+b;
    var res = b.lastIndexOf("is");
    document.getElementById("out2").innerHTML= "lastIndexOf text: " + res ;   
}
demo2();

function demo3() {
    var b = "i am dharani raja";
    document.getElementById("char3").innerHTML= "Input array: "+b;
    var res = b.search("dharani");
    document.getElementById("out3").innerHTML= "search text: " + res ;   
}
demo3();
function demo4() {
    var b = "i am using wifi connection fghjvgh";
    document.getElementById("char4").innerHTML= "Input array: "+b;
    var res = b.match("fi");
    document.getElementById("out4").innerHTML= "match text: "+ res.length+" "+ res ;   
}
demo4();
function demo5() {
    var b = "cat is runing in cat place";
    document.getElementById("char5").innerHTML= "Input array: "+b;
    var res = b.matchAll("cat");
    document.getElementById("out5").innerHTML= "matchAll text: " + res;   
}
demo5();
function demo6() {
    var b = "i am using wifi connection fghjvgh";
    document.getElementById("char6").innerHTML= "Input array: "+b;
    var res = b.includes("wifi");//checking the text is there or not
    document.getElementById("out6").innerHTML= "includes text: " + res ;   
}
demo6();
function demo7() {
    var b = "i am using wifi connection fghjvgh";
    document.getElementById("char7").innerHTML= "Input array: "+b;
    var res = b.startsWith("wifi",11);
    document.getElementById("out7").innerHTML= "startsWith text: " + res ;   
}
demo7();
function demo8() {
    var b = "i am using wifi connection";
    document.getElementById("char8").innerHTML= "Input array: "+b;
    var res = b.endsWith("connection");
    document.getElementById("out8").innerHTML= "endsWith text: " + res ;   
}
demo8();
