class StaffList {
  /**
   * @type {Array<{ name: string }>}
   */
  list = [];

  constructor() {}

  /**
   * @param {string} name
   * @param {number} age
   */
  add(name, age) {
    if (this.list.find((mem) => mem.name === name)) {
      return;
    }

    if (age <= 20) {
      throw new Error("Staff member age must be greater than 20");
    }

    this.list.push({ name });
  }

  /**
   * @param {string} name
   */
  remove(name) {
    const toRemoveIndex = this.list.findIndex((mem) => mem.name === name);

    if (toRemoveIndex > -1) {
      this.list = this.list.filter((mem) => mem.name !== name);
      return true;
    }

    return false;
  }

  /**
   * @returns {number}
   */
  getSize() {
    return this.list.length;
  }
}
