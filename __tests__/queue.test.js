const createQueue = require("../data-structures/queue");

describe("createQueue tests", () => {
  // ARRANGE ACT ASSERT
  test("check for front property", () => {
    const queueInstance = createQueue();
    expect(queueInstance.front).toBe(0);
  });

  test("check for back property", () => {
    const queueInstance = createQueue();
    expect(queueInstance.back).toBe(1);
  });

  test("check for storage property", () => {
    const queueInstance = createQueue();
    expect(queueInstance.storage).toEqual({});
  });

  test("check for maxsize property", () => {
    const queueInstance = createQueue();
    expect(queueInstance.maxSize).toEqual(5);
  });

  test("`enQueue` method that adds items to the **back** of the queue.  Items can only be added if the queue isn't full", () => {
    //Arrange
    const queueInstance = createQueue();
    //ACT
    queueInstance.enQueue("first-item");
    queueInstance.enQueue("second-item");
    queueInstance.enQueue("third-item");
    //ASSERT
    expect(queueInstance.storage).toEqual({
      1: "first-item",
      2: "second-item",
      3: "third-item",
    });
  });

  test("`deQueue` method that removes items from the **front** of the queue, provided the queue isn't already empty", () => {
    //Arrange
    const queueInstance = createQueue();
    queueInstance.enQueue("first-item");
    queueInstance.enQueue("second-item");
    queueInstance.enQueue("third-item");
    queueInstance.enQueue("fourth-item");
    queueInstance.enQueue("fifth-item");
    //ACT
    queueInstance.deQueue();
    queueInstance.deQueue();
    queueInstance.deQueue();
    //ASSERT
    expect(queueInstance.storage).toEqual({
      4: "fourth-item",
      5: "fifth-item",
    });
  });

  test("getQuantity method returns number of items in queue", () => {
    //Arrange
    const queueInstance = createQueue();
    queueInstance.enQueue("first-item");
    queueInstance.enQueue("second-item");
    queueInstance.enQueue("third-item");
    queueInstance.enQueue("fourth-item");
    queueInstance.enQueue("fifth-item");
    //ACT
    const quantity = queueInstance.getQuanity();
    //ASSERT
    expect(quantity).toEqual(5);
  });

  test("return boolean if empty or not", () => {
    //Arrange
    const queueInstance = createQueue();
    queueInstance.enQueue("first-item");
    queueInstance.enQueue("second-item");
    queueInstance.enQueue("third-item");
    queueInstance.enQueue("fourth-item");
    queueInstance.enQueue("fifth-item");
    //ACT
    const emptyOrNot = queueInstance.isEmpty();
    //ASSERT
    expect(emptyOrNot).toEqual(false);
  });

  test("return boolean if empty or not", () => {
    //Arrange
    const queueInstance = createQueue();
    //ACT
    const emptyOrNot = queueInstance.isEmpty();
    //ASSERT
    expect(emptyOrNot).toEqual(true);
  });
});
