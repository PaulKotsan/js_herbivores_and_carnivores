'use strict';

class Animal {
  // static array to store all animals created.
  static alive = [];

  constructor(name, health) {
    // Set name of the animal
    this.name = name;
    // set health to 100 by default if its not privided
    this.health = health || 100;
    // Add animal to list alive
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden) {
    // Use to assing name and health accordingly to parent class.
    super(name, health);
    // Should be false by default. (Inaction)
    this.hidden = hidden || false;
  }

  hide() {
    // Hide animal
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.health = health || 100;
  }

  // Method to bite animal.
  bite(animalToBite) {
    // Check if its Herbovire and is not hidden
    if (animalToBite instanceof Herbivore && animalToBite.hidden === false) {
      // Damage animal :(
      animalToBite.health -= 50;

      // Delete if health is 0
      if (animalToBite.health <= 0) {
        // delete animal
        Animal.alive.splice(Animal.alive.indexOf(animalToBite), 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
