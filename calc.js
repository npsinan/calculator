function clic(val){
document.getElementById("screen").value=document.getElementById("screen").value+val;
}
function vipe(){
    document.getElementById("screen").value='';
}
function eqlclic(){
    let text=document.getElementById("screen").value;
    let result=eval(text);
    document.getElementById("screen").value=result;
}
