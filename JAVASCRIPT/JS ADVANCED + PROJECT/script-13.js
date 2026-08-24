let pr1 = new Promise(function (res, rej) {
  setTimeout(() => {
    let rn = Math.floor(Math.random() * 10);
    if (rn > 5) {
      res("resolved with " + rn);
    } else {
      rej("rejected with " + rn);
    }
  }, 3000);
});
pr1
  .then(function (val) {
    console.log(val);
  })
  .catch(function (val) {
    console.log(val);
  });
