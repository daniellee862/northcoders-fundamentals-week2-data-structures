const createStack = require("../data-structures/stack");

describe("createStack tests", () => {
  // ARRANGE ACT ASSERT
  test("test for quantity property", () => {
    const stackInstance = createStack();
    expect(stackInstance.quantity).toBe(0);
  });

  test("test for storage property", () => {
    const stackInstance = createStack();
    expect(stackInstance.storage).toEqual({});
  });

  test("test for maxSize property", () => {
    const stackInstance = createStack();
    expect(stackInstance.maxSize).toBe(5);
  });
  test("test for maxSize property", () => {
    const stackInstance = createStack(10);
    expect(stackInstance.maxSize).toBe(10);
  });

  test("handlePush adds items to the stack storage, provided the stack is not already full.", () => {
    const stackInstance = createStack();
    stackInstance.handlePush("first-item");
    stackInstance.handlePush("second-item");
    stackInstance.handlePush("third-item");
    expect(stackInstance.storage).toEqual({
      1: "first-item",
      2: "second-item",
      3: "third-item",
    });
    expect(stackInstance.quantity).toBe(3);
  });

  test("handlePop can remove last item from the stack storage, provided the stack is not empty.  It will also return the item removed from the stack.", () => {
    //Arrange
    const stackInstance = createStack();
    stackInstance.handlePush("first-item");
    stackInstance.handlePush("second-item");
    stackInstance.handlePush("third-item");
    //Act
    const poppedValue = stackInstance.handlePop();
    const storage = stackInstance.storage;
    //ASSERT
    expect(poppedValue).toBe("third-item");
    expect(storage).toEqual({
      1: "first-item",
      2: "second-item",
    });
    expect(stackInstance.quantity).toBe(2);
  });

  test("handleIsEmpty returns a boolean. Should return `true` when the stack storage is empty and the current quantity is 0", () => {
    //ARRANGE
    const stackInstance = createStack();
    stackInstance.handlePush("first-item");
    stackInstance.handlePush("second-item");
    stackInstance.handlePush("third-item");
    stackInstance.handlePop();
    stackInstance.handlePop();
    stackInstance.handlePop();

    //ACT
    const isEmpty = stackInstance.handleIsEmpty();
    const quantity = stackInstance.quantity;
    //ASSERT
    expect(isEmpty).toBe(true);
    expect(quantity).toBe(0);
  });

  test("handleIsFull returns a boolean. Should return `true` when the storage is full, i.e. when the current quantity equals the maxSize", () => {
    //ARRANGE
    const stackInstance = createStack();
    stackInstance.handlePush("first-item");
    stackInstance.handlePush("second-item");
    stackInstance.handlePush("third-item");
    stackInstance.handlePush("fourth-item");
    stackInstance.handlePush("fifth-item");
    //ACT
    const isfull = stackInstance.handleIsFull();
    const quantity = stackInstance.quantity;
    //ASSERT
    expect(isfull).toBe(true);
    expect(quantity).toBe(5);
    expect(stackInstance.storage).toEqual({
      1: "first-item",
      2: "second-item",
      3: "third-item",
      4: "fourth-item",
      5: "fifth-item",
    });
  });

  test("handlepeak will show the item at the top of the stack storage", () => {
    //ARRANGE
    const stackInstance = createStack();
    stackInstance.handlePush("first-item");
    stackInstance.handlePush("second-item");
    stackInstance.handlePush("third-item");
    stackInstance.handlePush("fourth-item");
    //ACT
    const peek = stackInstance.handlePeek();
    const objectLength = Object.keys(stackInstance.storage).length;
    const lastInValue = Object.values(stackInstance.storage)[objectLength - 1];
    //ASSERT
    expect(peek).toBe("fourth-item");
    expect(lastInValue).toBe(peek);
  });
});
