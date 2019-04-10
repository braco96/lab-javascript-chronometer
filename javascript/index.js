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
  // ... your code goes here
  // Update both minutes and seconds on the screen
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code goes here
  // Get the minutes as a two digit string and display each digit
  const minutes = chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  );
  minDecElement.innerHTML = minutes[0];
  minUniElement.innerHTML = minutes[1];
}

function printSeconds() {
  // ... your code goes here
  // Get the seconds as a two digit string and display each digit
  const seconds = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  );
  secDecElement.innerHTML = seconds[0];
  secUniElement.innerHTML = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  // For the basic iteration we keep milliseconds at 00
  milDecElement.innerHTML = '0';
  milUniElement.innerHTML = '0';
}

function printSplit() {
  // ... your code goes here
  // Create a list item showing the current split time
  const li = document.createElement('li');
  li.className = 'list-item';
  li.innerText = chronometer.split();
  splitsElement.appendChild(li);
}

function clearSplits() {
  // ... your code goes here
  // Remove all existing split entries from the list
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  // ... your code goes here
  // Change left button to STOP mode
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.className = 'btn stop';
}

function setSplitBtn() {
  // ... your code goes here
  // Change right button to SPLIT mode
  btnRightElement.innerText = 'SPLIT';
  btnRightElement.className = 'btn split';
}

function setStartBtn() {
  // ... your code goes here
  // Change left button back to START mode
  btnLeftElement.innerText = 'START';
  btnLeftElement.className = 'btn start';
}

function setResetBtn() {
  // ... your code goes here
  // Change right button back to RESET mode
  btnRightElement.innerText = 'RESET';
  btnRightElement.className = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  // Depending on current state, start or stop the chronometer
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime);
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
  // ... your code goes here
  // When running, record a split; otherwise reset the chronometer
  if (btnRightElement.classList.contains('split')) {
    printSplit();
  } else {
    chronometer.reset();
    clearSplits();
    printTime();
  }
});