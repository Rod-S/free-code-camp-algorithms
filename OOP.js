let dog = {
    name: "spot",
    numLegs: 4,
    sayLegs: function() {
        return "This dog has " + this.numLegs+ " legs.";
    }
};
console.log(dog.name);
console.log(dog.numLegs);

// function Dog() {
//     this.name = "Spot";
//     this.color = "brown";
//     this.numLegs = 4;
// }

// let hound = new Dog();

function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog("Spot", "black");

