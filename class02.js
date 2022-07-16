class Class02 {
  a = () => {
    // verbosity 1
    function x() {
      return "x";
    }

    const y = () => {
      return "y";
    };

    const z = () => "z";

    console.log(x());
    console.log(y());
    console.log(z());
  };

  b = () => {
    // verbosity 2
    const array = [1, 2, 3];

    // hack from hell
    array.forEach = (cb) => {
      for (let i = 0; i < array.length; i++) {
        cb(array[i]);
      }
    };

    console.log("high verbosity");
    array.forEach(function print(item) {
      console.log(item);
    });
    console.log("------------------------");
    console.log("");

    console.log("medium verbosity");
    array.forEach(function (item) {
      console.log(item);
    });
    console.log("------------------------");
    console.log("");

    console.log("low verbosity");
    array.forEach((item) => {
      console.log(item);
    });
    console.log("------------------------");
    console.log("");

    console.log("zava verbosity");
    array.forEach((item) => console.log(item));
    console.log("------------------------");
    console.log("");

    console.log("Chuck Norris verbosity");
    array.forEach(console.log);
    console.log("------------------------");
    console.log("");
  };

  c = () => {
    // promises 1
    function func01() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("func01");
        }, 5000);
      });
    }

    function func02() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("func02");
        }, 2000);
      });
    }

    function func03() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("func03");
        }, 4000);
      });
    }

    func01().then(console.log);
    func02().then(console.log);
    func03().then(console.log);
  };

  d = () => {
    // promises 2
    function func01() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("func01");
        }, 5000);
      });
    }

    function func02() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error("you died"));
        }, 2000);
      });
    }

    function func03() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("func03");
        }, 4000);
      });
    }

    func01().then(console.log);
    func02().then(console.log);
    func03().then(console.log);
  };

  e = () => {
    // promises 3
    function func01() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("func01");
        }, 5000);
      });
    }

    function func02() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error("you died"));
        }, 2000);
      });
    }

    function func03() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("func03");
        }, 4000);
      });
    }

    func01().then(console.log);
    func02()
      .then(console.log)
      .catch((err) => console.log(`Algo deu errado: ${err.message}`));
    func03().then(console.log);
  };

  f = () => {
    // promises 4
    function func01() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("func01");
        }, 5000);
      });
    }

    function func02() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("func02");
        }, 2000);
      });
    }

    function func03() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("func03");
        }, 4000);
      });
    }

    func01()
      .then((result) => {
        console.log(result);
        return func02();
      })
      .then((result) => {
        console.log(result);
        return func03();
      })
      .then((result) => {
        console.log(result);
      });
  };

  g = () => {
    // promises 5
    function func01() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("func01");
        }, 5000);
      });
    }

    function func02() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error("you died"));
        }, 2000);
      });
    }

    function func03() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("func03");
        }, 4000);
      });
    }

    // func01()
    //   .then((result) => {
    //     console.log(result);
    //     return func02();
    //   })
    //   .then((result) => {
    //     console.log(result);
    //     return func03();
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => {
    //     console.log(`Algo deu errado: ${err.message}`);
    //   });

    func01()
      .then((result) => {
        console.log(result);
        return func02();
      })
      .catch((err) => {
        console.log(`Algo deu errado: ${err.message}`);
      })
      .then((result) => {
        console.log(result);
        return func03();
      })
      .then((result) => {
        console.log(result);
      });
  };

  h = () => {
    // async / await
    function func01() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("func01");
        }, 5000);
      });
    }

    function func02() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("func02");
        }, 2000);
      });
    }

    function func03() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("func03");
        }, 4000);
      });
    }

    // let result1;
    // let result2;
    // let result3;
    // func01()
    //   .then((result) => {
    //     result1 = result;
    //     return func02();
    //   })
    //   .then((result) => {
    //     result2 = result;
    //     return func03();
    //   })
    //   .then((result) => {
    //     result3 = result;
    //   })
    //   .then(() => {
    //     console.log(`${result1} + ${result2} + ${result3}`);
    //   });

    async function func04() {
      const result1 = await func01();
      const result2 = await func02();
      const result3 = await func03();
      console.log(`${result1} + ${result2} + ${result3}`);
    }

    func04().then(() => console.log("finish"));
  };

  i = () => {
    // promise all
    function func01() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("func01");
        }, 5000);
      });
    }

    function func02() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("func02");
        }, 2000);
      });
    }

    function func03() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("func03");
        }, 4000);
      });
    }

    async function func04() {
      // const results = await Promise.all([
      //   func01(),
      //   func02(),
      //   func03(),
      // ]);
      // const result1 = results[0];
      // const result2 = results[1];
      // const result3 = results[2];

      const [result1, result2, result3] = await Promise.all([
        func01(),
        func02(),
        func03(),
      ]);
      console.log(`${result1} + ${result2} + ${result3}`);
    }

    func04().then(() => console.log("finish"));
  };

  j = () => {
    // promise race
    function func01() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error("you died"));
        }, 10000);
      });
    }

    function func02() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("func02");
        }, 2000);
      });
    }

    function func03() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("func03");
        }, 4000);
      });
    }

    async function func04() {
      const result = await Promise.race([func01(), func02(), func03()]);
      console.log(result);
    }

    func04().then(() => console.log("finish"));
  };
}

function main() {
  const [, , topic] = process.argv;
  const class02 = new Class02();
  class02[topic]?.();
}

main();
