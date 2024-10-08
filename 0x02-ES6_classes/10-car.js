export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Modify cloneCar to use Symbol.species
  cloneCar() {
    const Species = this.constructor[Symbol.species] || this.constructor;
    return new Species(this._brand, this._motor, this._color);
  }
}
