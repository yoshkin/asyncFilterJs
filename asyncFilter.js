// @ts-check

// BEGIN (write your solution here)
export default (coll, fn, callback) => {
  const iter = (items, acc) => {
    if (items.length === 0) {
      callback(acc);
      return;
    }
    const [head, ...rest] = items;
    const newAcc = fn(head) ? [...acc, head] : acc;
    setTimeout(iter, 0, rest, newAcc);
  };

  iter(coll, []);
};
// END
