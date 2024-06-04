const testingArr = [1, 2, 3, 4, 5];
console.log("Testing Array:", testingArr);

// filter
Array.prototype.myFilter = function (cb) {
  let filteredArr = [];

  // this: the array on which myFilter is called.
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      filteredArr.push(this[i]);
    }
  }

  return filteredArr;
};

// test
const isEven = testingArr.myFilter((num) => num % 2 === 0);
console.log("\nFilter (even number) :", isEven);

// map
Array.prototype.myMap = function (cb) {
  let mappedArr = [];

  for (let i = 0; i < this.length; i++) {
    let tmp = cb(this[i], i, this);
    mappedArr.push(tmp);
  }

  return mappedArr;
};

// test
const squared = testingArr.myMap((num) => num ** 2);
console.log("\nMap (squared number) :", squared);

// includes
Array.prototype.myIncludes = function (value) {
  for (let ele of this) {
    if (ele === value) return true;
  }
  return false;
};

// test
console.log("\nIncludes (5) :", testingArr.myIncludes(5)); // true
console.log("Includes (20) :", testingArr.myIncludes(20)); // false

// indexOf
Array.prototype.myIndexOf = function (value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === value) {
      return i;
    }
  }
  return -1;
};

// test
console.log("\nIndexOf (3) :", testingArr.myIndexOf(3));
console.log("IndexOf (20) :", testingArr.myIndexOf(20));

// reduce
Array.prototype.myReduce = function (cb, init) {
  let acc = init;
  for (let i = 0; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }
  return acc;
};

// test
console.log(
  "\nReduce (sum) :",
  testingArr.myReduce((acc, num) => acc + num, 0)
);

// slice
Array.prototype.mySlice = function (start, end) {
  let filteredArr = [];
  start = start || 0;
  end = end || this.length;
  for (let i = start; i < end; i++) {
    filteredArr.push(this[i]);
  }
  return filteredArr;
};

// test
console.log("\nSlice (1, 3) :", testingArr.mySlice(1, 3));

// splice
Array.prototype.mySplice = function (start, count, ...items) {
  let removed = [];
  let len = this.length;

  for (let i = 0; i < count; i++) {
    if (start + i < len) {
      removed.push(this[start + i]);
    }
  }

  let newArr = [];
  for (let i = 0; i < start; i++) {
    newArr.push(this[i]);
  }
  for (let item of items) {
    newArr.push(item);
  }
  for (let i = start + count; i < len; i++) {
    newArr.push(this[i]);
  }

  this.length = newArr.length;
  for (let i = 0; i < newArr.length; i++) {
    this[i] = newArr[i];
  }

  return removed;
};

// test
console.log("\nSplice (removed 3, 4) :", testingArr.mySplice(3, 4));
