//STACKPROTOTYPE
const stackPrototype = {
  handlePush: function (value) {
    if (this.quantity < this.maxSize) {
      this.storage[this.quantity + 1] = value;
      this.quantity++;
    }
  },
  handlePop: function () {
    const lastInValue = this.storage[this.quantity];
    if (this.quantity > 0) {
      delete this.storage[this.quantity];
      this.quantity--;
      return lastInValue;
    }
  },
  handleIsEmpty: function () {
    const objectLength = Object.keys(this.storage).length;
    return this.quantity === 0 && objectLength === 0 ? true : false;
  },
  handleIsFull: function () {
    return this.quantity >= this.maxSize ? true : false;
  },
  handlePeek: function () {
    return this.storage[this.quantity];
  },
};

function createStack(maxSize = 5) {
  // build your stack object inside this factory function

  //OBJECT INSTANTIATION/CREATION
  //ATTACHING METHODS FROM THE STACKPROTOTYPE
  const newStack = Object.create(stackPrototype);

  //OBJECT DECORATION
  newStack.quantity = 0;
  newStack.storage = {};
  newStack.maxSize = maxSize;

  //RETURN OBJECT
  return newStack;
}

module.exports = createStack;
