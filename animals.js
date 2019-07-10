class Animal {
    constructor(age) {
        this.age = age;
    }
    getValueInEuros(){
        return this.getWeightInKg() * this.price;
    }
}

class Pig  extends Animal {
    constructor(age) {
        super(age);
        this.price = 4;
    }
    getWeightInKg(){
        return this.age *2.3
    }
}

class Cow extends Animal {
    constructor(age) {
        super(age);
        this.price = 5;
    }
    getWeightInKg(){
        return this.age * 1.5
    }
}

class Horse extends Animal {
    constructor(age) {
        super(age);
        this.price = 10;
    }
    getWeightInKg(){
        return this.age * 1.7
    }
}

module.exports = { Animal ,Pig , Cow, Horse }