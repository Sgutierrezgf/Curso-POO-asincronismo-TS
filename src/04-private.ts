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
    const day = this.addPadding(this.day)
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
      this.day += amount
    }
    if (type === 'month') {
      this.month += amount
    }
    if (type === 'years') {
      this.year += amount
    }
  }

  getDay() {
    return this.day
  }
}

const mydate = new myDate(1988, 8, 10)
console.log('myDate', mydate.printFormat())
console.log('myDate', mydate.getDay())



