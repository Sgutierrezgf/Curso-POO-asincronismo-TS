export class myDate {

  constructor(
    public year: number = 1988,
    public month: number = 8,
    private _day: number = 24
  ) { }

  printFormat(): string {
    const day = this.addPadding(this._day)
    const month = this.addPadding(this.month)
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
      this.month += amount
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
}

const mydate = new myDate(1993, 7, 10);
console.log(mydate.printFormat());
// console.log(mydate.getDay());
console.log('day', mydate.day)
console.log('isLeapYear', mydate.isLeapYear)

const mydate2 = new myDate(2000, 12, 8)
console.log('2000', mydate2.isLeapYear)

const mydate3 = new myDate(2054, 12, 8)
console.log('2054', mydate3.isLeapYear)


const mydate4 = new myDate(1968, 12, 8)
console.log('1968', mydate4.isLeapYear)


