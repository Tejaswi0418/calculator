function add()
{
let a=parseInt(document.getElementById("value1").value);
let b=parseInt(document.getElementById("value2").value);
let c=a+b;
document.getElementById("answer1").innerHTML="Addition is "+c;
}
function substract()
{
let a=parseInt(document.getElementById("value1").value);
let b=parseInt(document.getElementById("value2").value);
let c=a-b;
if(c>0)
{
    document.getElementById("answer1").innerHTML="substraction is "+c; 
}
if(c<0)
{
    document.getElementById("answer1").innerHTML="The number is negative";
}
if(c==0)
{
    document.getElementById("answer1").innerHTML="The number is 0"
}

}
function multiply()
{
let a=parseInt(document.getElementById("value1").value);
let b=parseInt(document.getElementById("value2").value);
let c=a*b;
document.getElementById("answer1").innerHTML="Multiply is "+c;
}
function division()
{
let a=parseInt(document.getElementById("value1").value);
let b=parseInt(document.getElementById("value2").value);
let c=a/b;
document.getElementById("answer1").innerHTML="Division is "+c;
}
function modulo()
{
let a=parseInt(document.getElementById("value1").value);
let b=parseInt(document.getElementById("value2").value);
let c=a%b;
document.getElementById("answer1").innerHTML="Modulation is "+c;
}