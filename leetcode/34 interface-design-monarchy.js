class Person {
  constructor(name) {
    this.name = name;
    this.isAlive = true;
    this.children = [];
  }
}

class Monarchy {
  constructor(king) {
    this.king = new Person(king);
    this._persons = {
      [this.king.name]: this.king,
    };
  }
  /**
   * add a king birth to the monarchi
   * @param {string} childName
   * @param {string} parentName
   */
  birth(childName, parentName) {
    const parent = this._persons[parentName];
    const child = new Person(childName);
    parent.children.push(child);
    this._persons[childName] = child;
  }
  /**
   * add a king death to the monarchi
   * @param {string} name
   * @returns {void}
   */
  death(name) {
    const person = this._persons[name];
    if (person === undefined) {
      return null;
    }
    person.isAlive = false;
  }
  /**
   * return the order of succession
   * @returns {string[]}
   */
  getOrderOfSuccession() {
    const order = [];
    this._dfs(this.king, order);
    return order;
  }

  /**
   *
   * @param {Person} currentPerson
   * @param {string[]} order
   */
  _dfs(currentPerson, order) {
    if (currentPerson.isAlive) {
      order.push(currentPerson.name);
    }
    for (let i = 0; i < currentPerson.children.length; i++) {
      this._dfs(currentPerson.children[i], order);
    }
  }
}

// o (n)
