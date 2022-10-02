export class myDate {
  year: number
  month: number
  day: number
  constructor(year: number, month: number, day: number) {
    this.year = year
    this.month = month
    this.day = day
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`
  }
  add(amount: number, type: 'days' | 'month' | 'years') {
    if (type === 'days') {
      this.day += amount
    }
    if (type === 'month') {
      this.month += amount
    }
    if (type === 'years') {
      this.year += amount
    }
  }
}

const mydate = new myDate(1988, 8, 24)
console.log('myDate', mydate.printFormat())
mydate.day = 12
console.log('myDate', mydate.printFormat())

