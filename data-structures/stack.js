//HELPER METHODS
//PUSH
function handlePush(value) {
  // const objectLength = Object.keys(this.storage).length;
  if (this.quantity < this.maxSize) {
    this.storage[this.quantity + 1] = value;
    this.quantity++;
  }
}

//POP
function handlePop() {
  // const objectLength = Object.keys(this.storage).length;
  // const lastInKey = Object.keys(this.storage)[objectLength - 1];
  // const lastInValue = Object.values(this.storage)[objectLength - 1];
  const lastInValue = this.storage[this.quantity];

  if (this.quantity > 0) {
    delete this.storage[this.quantity];
    this.quantity--;
    return lastInValue;
  }
}

//isEmpty
function handleIsEmpty() {
  const objectLength = Object.keys(this.storage).length;
  return this.quantity === 0 && objectLength === 0 ? true : false;
}

//isFull
function handleIsFull() {
  return this.quantity >= this.maxSize ? true : false;
}

//peek

function handlePeek() {
  // const objectLength = Object.keys(this.storage).length;
  // const lastInValue = Object.values(this.storage)[objectLength - 1];
  // return lastInValue;

  return this.storage[this.quantity];
}

function createStack(maxSize = 5) {
  // build your stack object inside this factory function
  const newStack = {
    quantity: 0,
    storage: {},
    maxSize: maxSize,
    handlePush: handlePush,
    handlePop: handlePop,
    handleIsEmpty: handleIsEmpty,
    handleIsFull: handleIsFull,
    handlePeek: handlePeek,
  };

  return newStack;
}

module.exports = createStack;
