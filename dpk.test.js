const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given 0 as input", () => {
    const trivialKey = deterministicPartitionKey(0);
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal hashed when given 1 as input", () => {
    const trivialKey = deterministicPartitionKey(1);
    expect(trivialKey).toBe(
      "ca2c70bc13298c5109ee0cb342d014906e6365249005fd4beee6f01aee44edb531231e98b50bf6810de6cf687882b09320fdd5f6375d1f2debd966fbf8d03efa"
    );
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal hashed when given '1' as input", () => {
    const trivialKey = deterministicPartitionKey("1");
    expect(trivialKey).toBe(
      "a36531fc8e1c0156ab10a29e6aa53acb00083b1ce239dbcfc9a67f77e6f866059d25bb3e2d83fe542d8a8fd02ff22a0ee963fb6d321e0c48df00b44ec819da97"
    );
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal hashed when given key with 0 as input", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: 0 });
    expect(trivialKey).toBe(
      "e65a0cb83a95cae7eb0642da576cac881e397c0405c63577c977068f7892f69f1c315baa294124da2a67e0c486d340f9d357377f894d0c0fd850484f8984f2e7"
    );
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal hashed when given key with 1 as input", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: 1 });
    expect(trivialKey).toBe("1");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal hashed when given key with '1' as input", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "1" });
    expect(trivialKey).toBe("1");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal hashed when given key with obj as input", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: { num: 1 } });
    expect(trivialKey).toBe('{"num":1}');
  });
});
