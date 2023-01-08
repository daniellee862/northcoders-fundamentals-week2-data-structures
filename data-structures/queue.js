//HELPER METHODS
//returns index of last item added
function handleBack() {
  const backIndex = Object.values(this.storage).length + 1;
  this.back = backIndex;
}
//adds item to back of queue
function enQueue(value) {
  const objectLength = Object.keys(this.storage).length;
  if (objectLength < this.maxSize) {
    this.storage[this.back] = value;
    this.handleBack();
  }
  console.log(this.storage);
}
//removes items from front of queue
function deQueue() {
  const objectLength = Object.keys(this.storage).length;
  const firstInKey = Object.keys(this.storage)[this.front];
  if (objectLength > 0) {
    delete this.storage[firstInKey];
    this.handleBack();
  }
}

//return number of items in queue
function getQuanity() {
  const objectLength = Object.keys(this.storage).length;
  return objectLength;
}

//return boolean if empty or not
function isEmpty() {
  const objectLength = Object.keys(this.storage).length;
  return objectLength > 0 ? false : true;
}

//FACTORY FUNCTION
function createQueue(maxSize = 5) {
  const newQueue = {
    front: 0,
    back: 1,
    storage: {},
    maxSize: maxSize,
    handleBack: handleBack,
    enQueue: enQueue,
    deQueue: deQueue,
    getQuanity: getQuanity,
    isEmpty: isEmpty,
  };

  return newQueue;
}

module.exports = createQueue;
