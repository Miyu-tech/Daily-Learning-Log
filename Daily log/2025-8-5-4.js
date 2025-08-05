class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name}がご飯を食べている`;
    }
}
class Cat extends Pet {
    constructor(name, age, jumpHeight = 5) {
        super(name, age); //親クラスを参照できる（もしCatにだけjumpHeigtを追加したい場）
    }
    meow() {
        return = 'にゃー';
    }
}

class Dog extends Pet {
    bark() {
        return = 'わんわん';
    }
    eat() {
        return `${this.name}がご飯をもりもり食べている`; //Dogにeatを定義していない場合はPetの方が定義される
    }
}