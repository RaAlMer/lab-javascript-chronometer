class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.milliCurrentTime = 0;
    this.milliIntervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (callback !== undefined) {
        callback();
      }
    }, 1000);

    this.milliIntervalId = setInterval(() => {
      this.milliCurrentTime += 1;
      if (this.milliCurrentTime === 99){
        this.milliCurrentTime = 0;
      }
      if (printMilliseconds) printMilliseconds();
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  getMilliseconds() {
    return parseInt(this.milliCurrentTime.toString().slice(-2));
  }

  computeTwoDigitNumber(value) {
    if (value.toString().length === 1){
      return `0${value}`;
    } else {
      return value.toString();
    }
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.milliIntervalId);
  }

  reset() {
    this.currentTime = 0;
    this.milliCurrentTime = 0;
  }

  split() {
    let timeMin = this.computeTwoDigitNumber(this.getMinutes());
    let timeSec = this.computeTwoDigitNumber(this.getSeconds());
    let timeMilli = this.computeTwoDigitNumber(this.getMilliseconds());
    return `${timeMin}:${timeSec}:${timeMilli}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
