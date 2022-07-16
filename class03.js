class Class03 {
  a = () => {
    // every & some
    const array = [
      {
        address: "pipipitchu 1",
        number: "xxx",
        uf: "RJ",
      },
      {
        address: "pipipitchu 2",
        number: "yyy",
        uf: "SP",
      },
      {
        address: "pipipitchu 3",
        number: "zzz",
        uf: "RJ",
      },
    ];

    function findAllRJWithFor() {
      let allRJ = true;
      for (let i = 0; i < array.length; i++) {
        if (array[i].uf !== "RJ") {
          allRJ = false;
          break;
        }
      }
      return allRJ;
    }

    function findAllRJWithForOf() {
      let allRJ = true;
      for (const item of array) {
        if (item.uf !== "RJ") {
          allRJ = false;
          break;
        }
      }
      return allRJ;
    }

    function findAllRJWithForEach() {
      let allRJ = true;
      array.forEach((item) => {
        if (item.uf !== "RJ") {
          allRJ = false;
        }
      });
      return allRJ;
    }

    function findAllRJWithSome() {
      return !array.some((item) => item.uf !== "RJ");
    }

    function findAllRJWithEvery() {
      return array.every((item) => item.uf === "RJ");
    }

    console.log(`findAllRJWithFor: ${findAllRJWithFor()}`);
    console.log(`findAllRJWithForOf: ${findAllRJWithForOf()}`);
    console.log(`findAllRJWithForEach: ${findAllRJWithForEach()}`);
    console.log(`findAllRJWithSome: ${findAllRJWithSome()}`);
    console.log(`findAllRJWithEvery: ${findAllRJWithEvery()}`);
  };

  b = () => {
    // about perfomance
    const total = 100000000;
    const array = [];
    for (let i = 0; i < total; i++) {
      const n = Math.floor(Math.random() * 1000);
      array.push(n);
    }

    function measurePerformanceFor() {
      console.log("measurePerformanceFor");
      const startTime = process.hrtime();
      let even = 0;
      for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
          even++;
        }
      }
      console.log(even);
      const elapsedTime = process.hrtime(startTime);
      console.log((elapsedTime[0] + elapsedTime[1] / 1e9).toFixed(3));
      console.log();
    }

    function measurePerformanceForOf() {
      console.log("measurePerformanceForOf");
      const startTime = process.hrtime();
      let even = 0;
      for (const item of array) {
        if (item % 2 === 0) {
          even++;
        }
      }
      console.log(even);
      const elapsedTime = process.hrtime(startTime);
      console.log((elapsedTime[0] + elapsedTime[1] / 1e9).toFixed(3));
      console.log();
    }

    function measurePerformanceForEach() {
      console.log("measurePerformanceForEach");
      const startTime = process.hrtime();
      let even = 0;
      array.forEach((item) => {
        if (item % 2 === 0) {
          even++;
        }
      });
      console.log(even);
      const elapsedTime = process.hrtime(startTime);
      console.log((elapsedTime[0] + elapsedTime[1] / 1e9).toFixed(3));
      console.log();
    }

    function measurePerformanceFilter() {
      console.log("measurePerformanceFilter");
      const startTime = process.hrtime();
      const even = array.filter((item) => item % 2 === 0).length;
      console.log(even);
      const elapsedTime = process.hrtime(startTime);
      console.log((elapsedTime[0] + elapsedTime[1] / 1e9).toFixed(3));
      console.log();
    }

    measurePerformanceFor();
    measurePerformanceForOf();
    measurePerformanceForEach();
    measurePerformanceFilter();
  };

  c = () => {
    // about async
    const array = [1, 2, 3, 4, 5];

    async function print(n) {
      switch (n) {
        case 1:
          return new Promise((resolve) => {
            setTimeout(() => {
              console.log(n);
              resolve();
            }, 500);
          });
        case 2:
          return new Promise((resolve) => {
            setTimeout(() => {
              console.log(n);
              resolve();
            }, 1000);
          });
        case 3:
          return new Promise((resolve) => {
            setTimeout(() => {
              console.log(n);
              resolve();
            }, 600);
          });
        case 4:
          return new Promise((resolve) => {
            setTimeout(() => {
              console.log(n);
              resolve();
            }, 400);
          });
        default:
          return new Promise((resolve) => {
            setTimeout(() => {
              console.log(n);
              resolve();
            }, 100);
          });
      }
    }

    async function doForEachAsync() {
      console.log("doForEachAsync");
      array.forEach(async (item) => {
        console.log(`print(${item})`);
        await print(item);
      });
      console.log();
    }

    async function doForAsync() {
      console.log("doForAsync");
      for (let i = 0; i < array.length; i++) {
        console.log(`print(array[${i}])`);
        await print(array[i]);
      }
      console.log();
    }

    // doForEachAsync().catch(console.error);
    doForAsync().catch(console.error);
  };

  d = () => {
    // parallelism
    const array = [1, 2, 3, 4, 5];

    async function print(n) {
      switch (n) {
        case 1:
          return new Promise((resolve) => {
            setTimeout(() => {
              console.log(n);
              resolve();
            }, 500);
          });
        case 2:
          return new Promise((resolve) => {
            setTimeout(() => {
              console.log(n);
              resolve();
            }, 1000);
          });
        case 3:
          return new Promise((resolve) => {
            setTimeout(() => {
              console.log(n);
              resolve();
            }, 600);
          });
        case 4:
          return new Promise((resolve) => {
            setTimeout(() => {
              console.log(n);
              resolve();
            }, 400);
          });
        default:
          return new Promise((resolve) => {
            setTimeout(() => {
              console.log(n);
              resolve();
            }, 100);
          });
      }
    }

    async function promiseAllMagic() {
      // await Promise.all(array.map((item) => print(item)));

      // async function exec(number) {
      //   console.log(`print(${number})`);
      //   return print(number);
      // }
      // await Promise.all(array.map((item) => exec(item)));

      await Promise.all(
        array.map((item) =>
          (async () => {
            console.log(`print(${item})`);
            return print(item);
          })()
        )
      );
    }

    promiseAllMagic().catch(console.error);
  };

  e = () => {
    // reduce with promises
    const array = [1, 2, 3, 4, 5];

    async function print(n) {
      switch (n) {
        case 1:
          return new Promise((resolve) => {
            setTimeout(() => {
              console.log(n);
              resolve();
            }, 500);
          });
        case 2:
          return new Promise((resolve) => {
            setTimeout(() => {
              console.log(n);
              resolve();
            }, 1000);
          });
        case 3:
          return new Promise((resolve) => {
            setTimeout(() => {
              console.log(n);
              resolve();
            }, 600);
          });
        case 4:
          return new Promise((resolve) => {
            setTimeout(() => {
              console.log(n);
              resolve();
            }, 400);
          });
        default:
          return new Promise((resolve) => {
            setTimeout(() => {
              console.log(n);
              resolve();
            }, 100);
          });
      }
    }

    async function reduceMagic() {
      array.reduce(async (previous, current) => {
        await previous;
        console.log(`print(${current})`);
        return print(current);
      }, Promise.resolve());
    }

    reduceMagic().catch(console.error);
  };

  f = () => {
    // try / catch
    async function throwError() {
      throw new Error("pncc");
    }

    async function doWrong() {
      try {
        return throwError();
      } catch (error) {
        console.log(error.message);
      }
    }

    async function doRight() {
      try {
        await throwError();
      } catch (error) {
        console.log(error.message);
      }
    }

    // doWrong().catch(() => console.log("???"));
    doRight().catch(() => console.log("???"));
  };
}

function main() {
  const [, , topic] = process.argv;
  const class03 = new Class03();
  class03[topic]?.();
}

main();
