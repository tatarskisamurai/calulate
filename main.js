let result = '';
const nul = document.querySelector('div.nul');
const num = document.querySelectorAll('div.num');
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
num.forEach(item => {
   item.addEventListener('click', () => {
      if(result=='0'){
         result=''
         console.log(0);
      }else if(result==''){
         result=''
         console.log(1);
      }
      result += item.textContent;
      element.textContent = result;
   })
})

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
