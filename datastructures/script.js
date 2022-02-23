class Player{
  constructor(name, type){
    console.log('player', this);
    this.name = name;
    this.type = type;
  }

  intro(){
    console.log(`My name is ${this.name}, I am a ${this.type} type`);
  }
}

class Wizerd extends Player{
  constructor(name, type){
    super(name, type);
    console.log('wizerd', this)
  }

  powerType(){
    console.log(`I am a ${this.type} type`);
  }
}

const wizerd = new Wizerd('John', 'Healer');
//wizerd.intro();
//wizerd.powerType();