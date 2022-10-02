export class Animal {
  constructor(
    public name: string
  ) { }

  move() {
    console.log('Moving along')
  }

  gretting() {
    return `Hello, I'm ${this.name}`
  }
}

export class Dog extends Animal {


  constructor(
    name: string,
    public owner: string
  ) {
    super(name)
    this.name
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('Woof!')
    }
  }
}

const yin = new Animal('yin')
yin.move()
console.log(yin.gretting())

const pepo = new Dog('pepo', 'sebas')
pepo.move()
console.log(pepo.gretting())
pepo.woof(5)
console.log(pepo.owner)

