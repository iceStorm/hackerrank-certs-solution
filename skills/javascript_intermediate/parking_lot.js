class ParkingLot {
  /**
   * @type {Record<number, string>}
   */
  slots;

  constructor(slots) {
    this.slots = {};

    for (let i = 1; i <= slots; ++i) {
      this.slots[i] = null;
    }

    console.log(this.slots);
  }

  park(carId) {
    for (const [index, parkedCar] of Object.entries(this.slots)) {
      if (parkedCar === null) {
        this.slots[index] = carId;
        return true;
      }
    }

    return false;
  }

  getSlots() {
    return Object.values(this.slots);
  }

  remove(carId) {
    for (const [index, parkedCar] of Object.entries(this.slots)) {
      if (parkedCar === carId) {
        this.slots[index] = null;
        return true;
      }
    }

    return false;
  }
}
