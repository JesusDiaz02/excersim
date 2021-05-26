export class Clock {
  constructor(hh, mm) {
    let time = new Date(); time.setMinutes(0); time.setHours(0);  time.setSeconds(0);
       if (hh) {
      time.setHours(hh);
    }
    if (mm) {
      time.setMinutes(mm);
    }

    
    this.time = time;
    this.hh = hh 
    this.mm = mm;
  }

  formatTime(t) {
    return t < 10 ? '0' + t : t;
  }

  toString() {
    return this.formatTime(this.time.getHours()) + ":" + this.formatTime(this.time.getMinutes()); 
  }

  plus(mins) {
    this.time.setMinutes(this.time.getMinutes() + mins);
    return this.toString();
  }

  minus(mins) {
    this.time.setMinutes(this.time.getMinutes() - mins);
    return this.toString();
  }

  equals(t1) {
    return this.time.getHours() === t1.time.getHours() && this.time.getMinutes() === t1.time.getMinutes();
  }
}