// what is problem with this
// problem is reference cloning
const object = {
  info: {
    score: 80,
  },
};
const clone = { ...object };
clone.info.score = 100;
console.log(object.info.score);
console.log(clone.info.score);
// Deep clone the object1 safely
const object1 = {
  info: {
    score: 80,
  },
};
let object2 = JSON.parse(JSON.stringify(object1));
object2.info.score = 100;
console.log(object1.info.score);
console.log(object2.info.score);
