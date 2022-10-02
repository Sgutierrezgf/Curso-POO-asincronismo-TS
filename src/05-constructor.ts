export class myDate {

  constructor(
    public year: number = 1988,
    public month: number = 8,
    private day: number = 24
  ) { }

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

const mydate = new myDate(1993, 7, 10);
console.log(mydate.printFormat());
console.log(mydate.getDay());

const mydate2 = new myDate();
console.log('() =>', mydate2.printFormat());

const mydate3 = new myDate(2022);
console.log('(2022) =>', mydate3.printFormat());

const mydate4 = new myDate(2022, 3);
console.log('(2022, 3) =>', mydate4.printFormat());
