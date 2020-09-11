const eight = document.getElementById('eight');
const seven = document.getElementById('seven');
const six = document.getElementById('six');
const five = document.getElementById('five');
const four = document.getElementById('four');
const three = document.getElementById('three');
const two = document.getElementById('two');
const one = document.getElementById('one');
const number = document.getElementById('number');

const btn1 = document.getElementById('btn');
const btn2 = document.getElementById('btn2');

var counter = 0b0;

var bin = [one, two, three, four, five, six, seven, eight];

function update() {
  number.innerHTML =  formatTime(counter);
  for (var i = 0; i < bin.length; i++) {
    var d = bin[i];
    var n = Math.pow(2, i);
    n & counter ? d.innerHTML = 1 : d.innerHTML = 0;

  }
  counter++;

  if (counter >= Math.pow(2, bin.length))
    counter = 0;
}

update();

function formatTime(time) {
  if (time < 10) {
    return `00${time}`;
  } else if (time < 100) {
    return `0${time}`;
  } else {
    return time;
  }

}

function calculate() {
  counter = document.getElementById('Value').value;
  counter <= 255 ? update() : alert('Inserta un numero menor o igual a 255'), clean();
}

function isEmpty() {
  if (isNaN(this.value + String.fromCharCode(event.keyCode))) return false;
}

function enableButtons() {
  if (document.getElementById('Value').value === "") { 
    btn1.disabled = true;
    btn2.disabled = true;
  } else {
    btn1.disabled = false;
    btn2.disabled = false; 
  }

}

function clean() {
  eight.innerHTML = 0;
  seven.innerHTML = 0;
  six.innerHTML = 0;
  five.innerHTML = 0;
  four.innerHTML = 0;
  three.innerHTML = 0;
  two.innerHTML = 0;
  one.innerHTML = 0;
  number.innerHTML = '000';
  document.getElementById('Value').value = '';
  enableButtons();
}

/* Para contador automático descomentar las línea 80*/

//setInterval(update, 1000);