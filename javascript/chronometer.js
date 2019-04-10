class Chronometer {
  constructor() {
    // ... your code goes here
    // `currentTime` will store the total elapsed seconds
    this.currentTime = 0;
    // `intervalId` will hold the identifier returned by setInterval
    // so we can clear it later when stopping the chronometer
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
    // Start counting time by setting up a 1 second interval
    this.intervalId = setInterval(() => {
      // Increase the elapsed time
      this.currentTime++;
      // Execute the callback every tick if one was provided
      if (callback) callback();
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    // Return how many whole minutes have passed
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    // Return the remaining seconds after removing the minutes
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    // Ensure numbers are always represented with at least two digits
    return value.toString().padStart(2, '0');
  }

  stop() {
    // ... your code goes here
    // Stop the interval using the stored id
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    // Reset the elapsed time to zero
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    // Compose a string with the current minutes and seconds in MM:SS format
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}