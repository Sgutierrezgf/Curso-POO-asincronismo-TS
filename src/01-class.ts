const date = new Date()
date.getHours()
date.getTime()
date.toISOString()

const date2 = new Date(1988, 7, 24)
date.getHours()
date.getTime()
date.toISOString()

console.log('date', date)
console.log('date2', date2)

let myVar

class myDate {
  year: number
  month: number
  day: number
  constructor(year: number, month: number, day: number) {
    this.year = year
    this.month = month
    this.day = day
  }
}

const mydate = new myDate(1988, 8, 24)
console.log('myDate', mydate)

