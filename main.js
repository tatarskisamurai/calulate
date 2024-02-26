let result = '1';
const nul = document.querySelector('div.nul');
const btn1 = document.querySelector('div.btn1');
const btn2 = document.querySelector('div.btn2');
const btn3 = document.querySelector('div.btn3');
const btn4 = document.querySelector('div.btn4');
const btn5 = document.querySelector('div.btn5');
const btn6 = document.querySelector('div.btn6');
const btn7 = document.querySelector('div.btn7');
const btn8 = document.querySelector('div.btn8');
const btn9 = document.querySelector('div.btn9');
const plus = document.querySelector('div.plus');
const proizv = document.querySelector('div.proizv');
const chast = document.querySelector('div.chast');
const proc = document.querySelector('div.proc');
const equal = document.querySelector('div.equal');
const element = document.querySelector('div.result');
const del = document.querySelector('div.del');

equal.addEventListener('click', function () {
   if(result=='0'){
      result=''
   }
   if (result.includes("+")){
      let array = result.split('+');
      result = +(array[0])+(+array[1]);
      element.textContent = +(array[0])+(+array[1]);
   }
   if (result.includes("*")){
      let array = result.split('*');
      result = +(array[0])*(+array[1]);
      element.textContent = +(array[0])*(+array[1]);
   }
   if (result.includes("/")){
      let array = result.split('/');
      result = +(array[0])/(+array[1]);
      element.textContent = +(array[0])/(+array[1]);
   }
   if (result.includes("%")){
      let array = result.split('%');
      result = +(array[0])%(+array[1]);
      element.textContent = +(array[0])%(+array[1]);
   }
});

btn1.addEventListener('click', function () {
   if(result=='0'){
      result=''
   }
   result += '1';
   element.textContent = result;
 });
btn2.addEventListener('click', function () {
   if(result=='0'){
      result=''
   }
   result += '2';
   element.textContent = result;
 });

btn3.addEventListener('click', function () {
   if(result=='0'){
      result=''
   }
   result += '3';
   element.textContent = result;
 });

btn4.addEventListener('click', function () {
   if(result=='0'){
      result=''
   }
   result += '4';
   element.textContent = result;
 });

btn5.addEventListener('click', function () {
   if(result=='0'){
      result=''
   }
   result += '5';
   element.textContent = result;
 });

btn6.addEventListener('click', function () {
   if(result=='0'){
      result=''
   }
   result += '6';
   element.textContent = result;
 });

btn7.addEventListener('click', function () {
   if(result=='0'){
      result=''
   }
   result += '7';
   element.textContent = result;
 });

btn8.addEventListener('click', function () {
   if(result=='0'){
      result=''
   }
   result += '8';
   element.textContent = result;
 });

btn9.addEventListener('click', function () {
   if(result=='0'){
      result=''
   }
   result += '9';
   element.textContent = result;
 });

plus.addEventListener('click', function () {
   if(result=='0'){
      result=''
   }
   result += '+';
   element.textContent = result;
 });

del.addEventListener('click', function () {
   result = '0';
   element.textContent = result;
 });

proizv.addEventListener('click', function () {
   if(result=='0'){
      result=''
   }
   result += '*';
   element.textContent = result;
 });

chast.addEventListener('click', function () {
   if(result=='0'){
      result=''
   }
   result += '/';
   element.textContent = result;
});
 
nul.addEventListener('click', function () {
   result += '0';
   element.textContent = result;
 });

proc.addEventListener('click', function () {
   if(result=='0'){
      result=''
   }
   result += '%';
   element.textContent = result;
});