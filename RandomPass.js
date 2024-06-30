let capital = 'QWERTYUIOPASDFGHJKLZXCVBNM';
let small = "qwertyuiopasdfghjklzxcvbnm";
let nums = '1234567890';
let symbsols = "!@#$%^&*()_+{}|~`";

let btn = document.getElementsByTagName('button');
let uppercase = document.getElementById('uppercase');
let lowercase = document.getElementById('lowercase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let input = document.getElementById('input');
let range = document.getElementById('range');

function generator (value){
    let random = Math.floor(Math.random() * value.length);
    return value[random];
}
btn[0].addEventListener('click',()=>{
    input.value = "";
    result(input.value)
    btn[0].style.scale = '.9';
    setTimeout(()=>{btn[0].style.scale = '1'},100)
})


const result = (pass = '')=>{
    if(!symbols.checked && !numbers.checked && !uppercase.checked && !lowercase.checked ){
        alert('Please check atleast one box.')
        return
    }
    if(uppercase.checked)pass += generator(capital);
    if(lowercase.checked)pass += generator(small);
    if(numbers.checked)pass += generator(nums);
    if(symbols.checked)pass += generator(symbsols);
    if(pass.length < range.value){
        result(pass)
    }
    else if(pass.length > range.value){
        input.value = pass.substring(0,range.value);
    }
    else {
        input.value = pass;
    }
}