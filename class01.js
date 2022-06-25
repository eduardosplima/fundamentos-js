class Class01 {
  a = () => {
    // javascript magic
    console.log("1" + "1");
    console.log("1" - "1");
  };

  b = () => {
    // equality operators
    if ("") console.log(1);
    if ("txt") console.log(2);
    if (0) console.log(3);
    if (1) console.log(4);
    if ("false") console.log(5);
    if (new Boolean("true")) console.log(6);
    if (new Boolean("false")) console.log(7);
  };

  c = () => {
    // equality operators
    console.log(0 || 1);
    console.log("" || "b");
    console.log("a" || "b");
    console.log("false" || "true");
  };

  d = () => {
    // nullish coalescing operator
    console.log(0 ?? 1);
    console.log("" ?? "b");
    console.log("a" ?? "b");
    console.log("false" ?? "true");
    console.log(null ?? "zava");
    console.log("null" ?? "zava");
  };

  e = () => {
    // destructuring assignment
    const array = ["a", "b", "c"];
    const [, b, c] = array;
    console.log(b);
    console.log(c);
  };

  f = () => {
    // destructuring assignment
    const obj = { a: 1, b: 2, c: 3 };
    const { a, b } = obj;
    console.log(a);
    console.log(b);
  };

  g = () => {
    // destructuring assignment
    const obj = { a: 1, b: 2, c: 3 };
    // const zavaB = obj.b;
    // const zavaC = obj.c;
    const { b: zavaB, c: zavaC } = obj;
    console.log(zavaB);
    console.log(zavaC);
  };

  h = () => {
    // destructuring assignment
    const obj = { x: 1, y: 2, z: 3 };
    const { y, ...others } = obj;
    console.log(y);
    console.log(others);
  };

  i = () => {
    // rest operator
    const objA = { a: 1, b: 2, c: 3 };

    const objB = objA;
    objB.b = 5;
    console.log(objA.b);

    const objC = { ...objA };
    objC.a = 10;
    console.log(objA.a);
    console.log(objC.a);
  };

  j = () => {
    // rest operator
    const arrayA = [1, 2, 3];

    const arrayB = arrayA;
    arrayB[2] = 4;
    console.log(arrayA);

    const arrayC = [...arrayA];
    arrayC[2] = 0;
    console.log(arrayA);
    console.log(arrayC);
  };

  k = () => {
    // this
    const { EventEmitter } = require("events");

    // () => { console.log('xxx'); }
    // function xxx() { console.log('xxx'); }
    class PNCC {
      constructor(type) {
        this.n = 0;
        this.ee = new EventEmitter();

        if (type === 0) {
          this.ee.on("xgh", () => {
            console.log(++this.n);
          });
        } else {
          this.ee.on("xgh", function () {
            console.log(++this.n);
          });
        }
      }
    }

    const pncc1 = new PNCC(0);
    console.log("pncc1 - emit 1");
    pncc1.ee.emit("xgh");
    console.log("pncc1 - emit 2");
    pncc1.ee.emit("xgh");
    console.log("pncc1 - emit 3");
    pncc1.ee.emit("xgh");

    const pncc2 = new PNCC(1);
    console.log("pncc2 - emit 1");
    pncc2.ee.emit("xgh");
    console.log("pncc2 - emit 2");
    pncc2.ee.emit("xgh");
    console.log("pncc2 - emit 3");
    pncc2.ee.emit("xgh");
  };
}

function main() {
  const [, , topic] = process.argv;
  const class01 = new Class01();
  class01[topic]?.();
}

main();
