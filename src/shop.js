var Part = require("./part");

class Shop {
  constructor({name}) {
    this.name = name;
    this.inventory = {};
  }

  addInventory(part) {
    this.inventory[part.type] = part;

  }

  outfitShip(ship, part) {
  // console.log(this.inventory[part]);
  var addedPart = this.inventory[part];
    if (!ship.captain) {
      return "Cannot outfit a ship without a captain"
    }
    if (ship.captain.credits < addedPart.value) {
      return "You require 200 more credits to make this purchase"
    }

  }

}


module.exports = Shop
