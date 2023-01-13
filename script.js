const firstCh = document.querySelector('#num1'),
      secondCh = document.querySelector('#num2'),
      addBtn = document.querySelector('#add'),
      subBtn = document.querySelector('#sub'),
      output = document.querySelector('#output');

function getValue(){
   const value1 = +firstCh.value;
   const value2 = +secondCh.value;
   return [value1, value2]
};

function displayResult(sum){
   output.closest('.card').style.display = 'block';
   output.innerHTML = `Ваша сумма равна ${sum}`;
};

function addHandler(){
const values = getValue();
const sum = values[0] + values[1];
displayResult(sum);
};

function subHandler(){
   debugger
   const values = getValue();
   const sum = values[0] - values[1];
   displayResult(sum);
};

addBtn.addEventListener('click', addHandler);
subBtn.addEventListener('click', subHandler);


