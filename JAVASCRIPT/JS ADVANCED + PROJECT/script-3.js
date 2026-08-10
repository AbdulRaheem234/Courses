// closures hote hai functions jo kisi parent function ke andar ho aur anadr wala function return ho raha ho aur returning function parent function ka koi variable use kare

// ye sach hai ki jab function khatam hota hai toh uske variable bhi khatam ho jate hai par jab bhi closure banta hai to function aur uske variables ka ek backlink banaya jaata hai aur vo [[environment]] hota hai

function yueh() {
  let y = 45;
  return function () {
    console.log(y);
  };
}
let fnc = yueh();
fnc();
