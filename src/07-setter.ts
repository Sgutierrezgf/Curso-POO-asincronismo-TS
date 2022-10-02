export class myDate {

  constructor(
    public year: number = 1988,
    public _month: number = 8,
    private _day: number = 24
  ) { }

  printFormat(): string {
    const day = this.addPadding(this._day)
    const month = this.addPadding(this._month)
    return `${day}/${month}/${this.year}`
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`
    }
    return `${value}`
  }


  add(amount: number, type: 'days' | 'month' | 'years') {
    if (type === 'days') {
      this._day += amount
    }
    if (type === 'month') {
      this._month += amount
    }
    if (type === 'years') {
      this.year += amount
    }
  }

  get day() {
    return this._day
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  get myReturn() {
    return ''
  }

  get month() {
    return this._month
  }

  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      // throw new Error('month out of range');
    }
  }
}

const mydate = new myDate(1993, 7, 10);
console.log(mydate.printFormat());
mydate.month = 4;
console.log('run', mydate.month);
mydate.month = 78;
console.log('esto no debe aparecer', 'month out of range');
