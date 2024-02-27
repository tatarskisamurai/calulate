let result = '';
const num = document.querySelectorAll('div.num');
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
   if (result.includes("-)){
      let array = result.split('-');
      result = +(array[0])-(+array[1]);
      element.textContent = +(array[0])-(+array[1]);
   }
});

num.forEach(item => {
   item.addEventListener('click', () => {
      if(result=='0'){
         result=''
      }
      result += item.textContent;
      element.textContent = result;
   })
})

del.addEventListener('click', function () {
   result = '0';
   element.textContent = result;
 });
