class Cat {
  constructor(name, color, eat) {
    this.name = name;
    this.color = color;
    this.eat = eat;
  }
}

class Perciancat extends Cat {
  constructor(name, color, eat) {
    super(name, color, eat);
  }
}

let sc1 = new Perciancat("Kitty", "white", "Fish");

console.log(sc1);
