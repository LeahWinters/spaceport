var Being = require("./being");
var Part = require("./part");

class Ship {
  constructor({name, type, odometer = 0, fuelCapacity = 10, captain, maxCrew = 2, parts}) {
    this.name = name;
    this.validTypes = ["military", "passenger", "cargo"];
    this.type = this.validTypes.includes(type) ? type : undefined;
    this.maxCrew = maxCrew;
    this.odometer = odometer;
    this.fuelCapacity = fuelCapacity;
    this.fuel = 0;
    this.captain = captain;
    this.crew = [];
    this.cargo = [];
    this.parts = parts || {};
  }

  addCrew(members) {
    for (var i = 0; i < members.length; i++) {
      if (this.crew.length < this.maxCrew && members[i] instanceof Being) {
        this.crew.push(members[i]);
      }
    }
  }

  loadCargo(cargo) {
    if (cargo instanceof Part) this.cargo.push(cargo);
  }

  updatePart(part) {
    if (this.parts[part.type]) {
      var oldTypeValue = this.parts[part.type].value;
    }
    if (part.type !== undefined) {
      this.parts[part.type] = part;
    }
    return oldTypeValue - part.value;
  }

  checkReadiness() {
    var status = {};
    if (!this.captain) {
      status.notes = "Cannot fly without a captain";
      status.readyToFly = false;
      return status;
    }
    if (!this.fuel) {
      status.notes = "Cannot fly without fuel";
      status.readyToFly = false;
      return status;
    }
    if (!Object.keys(this.parts).length) {
      status.notes = 'Cannot fly without all parts';
      status.readyToFly = false;
      return status;
    }
    if (this.captain && this.fuel && this.parts) {
      status.notes = "Good to go!";
      status.readyToFly = true;
      return status
    }
    // return status;
  }

}


module.exports = Ship
