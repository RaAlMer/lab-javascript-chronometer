const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  minDecElement.innerHTML = minutes[0];
  minUniElement.innerHTML = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  secDecElement.innerHTML = seconds[0];
  secUniElement.innerHTML = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  let milliseconds = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())
  milDecElement.innerHTML = milliseconds[0];
  milUniElement.innerHTML = milliseconds[1];
}

function printSplit(time) {
  let uls = document.getElementById('splits');
  let lis = document.createElement('li');
  let text = document.createTextNode(time);
  lis.appendChild(text);
  uls.appendChild(lis);
}

function clearSplits() {
  let uls = document.getElementById('splits');
  uls.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.innerHTML = 'STOP';
  btnLeftElement.setAttribute('class', 'btn stop');
}

function setSplitBtn() {
  btnRightElement.innerHTML = 'SPLIT';
  btnRightElement.setAttribute('class', 'btn split');
}

function setStartBtn() {
  btnLeftElement.innerHTML = 'START';
  btnLeftElement.setAttribute('class', 'btn start');
}

function setResetBtn() {
  btnRightElement.innerHTML = 'RESET';
  btnRightElement.setAttribute('class', 'btn reset');
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerHTML === 'START'){
    chronometer.start(printTime, printMilliseconds);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML === 'RESET'){
    chronometer.reset();
    clearSplits();
    minDecElement.innerHTML = 0;
    minUniElement.innerHTML = 0;
    secDecElement.innerHTML = 0;
    secUniElement.innerHTML = 0;
    milDecElement.innerHTML = 0;
    milUniElement.innerHTML = 0;
  } else {
    printSplit(chronometer.split());
  }
});