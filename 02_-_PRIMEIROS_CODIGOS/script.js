//USANDO JAVASCRIPT
let btn_somarjs = document.getElementById("btn_somarjs").addEventListener("click",()=>{
    let res = document.getElementById("res").value = parseInt(document.getElementById("v1").value) + parseInt(document.getElementById("v2").value);
})

//USANDO JQUERY ($ = apontar para ...)
$("#btn_somarjq").click(()=>{
    let v1 = parseInt($("#v1").val());
    let v2 = parseInt($("#v2").val());
    let soma = v1 + v2;
    $("#res").val(soma);
})