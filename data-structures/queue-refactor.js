//QUEUE PROTOTYPE
// Queues have a FIFO (First In First Out)

//refactor = object length > this.storage.length

//in a future refactor I will add two new versions of enQueue and deQueue so that the FIFO pattern is reversed;
// Items will be added to the begginning of the object and removed from the end.

const queuePrototype = {
  handleBack: function () {
    const backIndex = Object.values(this.storage).length + 1;
    this.back = backIndex;
  },
  enQueue: function (value) {
    const objectLength = Object.keys(this.storage).length;
    if (objectLength < this.maxSize) {
      this.storage[this.back] = value;
      this.handleBack();
    }
  },
  reverseEnQueue: function (value) {
    const objectLength = Object.keys(this.storage).length;
    if (objectLength < this.maxSize) {
      this.storage[this.front] = value;
      this.handleBack();
    }
  },
  deQueue: function () {
    const objectLength = Object.keys(this.storage).length;
    const firstInKey = Object.keys(this.storage)[this.front];
    if (objectLength > 0) {
      delete this.storage[firstInKey];
      this.handleBack();
    }
  },
  reverseDeQueue: function () {},
  getQuanity: function () {
    const objectLength = Object.keys(this.storage).length;
    return objectLength;
  },
  isEmpty: function () {
    const objectLength = Object.keys(this.storage).length;
    return objectLength > 0 ? false : true;
  },
};

//FACTORY FUNCTION
function createQueue(maxSize = 5) {
  //OBJECT INSTANTIATION/CREATION
  //ATTACHING METHODS FROM THE STACKPROTOTYPE
  const newQueue = Object.create(queuePrototype);

  //OBJECT DECORATION
  newQueue.front = 0;
  newQueue.back = 1;
  newQueue.storage = {};
  newQueue.maxSize = maxSize;

  //RETURN OBJECT
  return newQueue;
}

module.exports = createQueue;

module.exports = createQueue;
