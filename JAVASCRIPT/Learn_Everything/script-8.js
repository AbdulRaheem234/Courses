// closure -> ek function jo return kare ek aur function aur return hone wala function hamesha use karega parent function ka koi variable.....
function a() {
  let b = 10;
  return function () {
    console.log(b);
  };
}
