// write a BMI Calculator using function and return the BMI value
function calculateBMI(weight, height) {
  let bmi = weight / (height * height);
  return bmi;
}
console.log(calculateBMI(70, 1.75).toFixed(2));

// clone this array properly not by reference
let r12 = [1, 2, 3];
let r13 = [...r12];
console.log(r13);

// create an object for a student with name,age , and isEnrolled
let obj54 = {
  name: "Abdul Raheem",
  age: 21,
  isEnrolled: true,
};
console.log(obj54);
