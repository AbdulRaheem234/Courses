class User {
  constructor(name, address, username, email) {
    this.name = name;
    this.address = address;
    this.username = username;
    this.email = email;
    this.role = "user";
  }

  checkRole() {
    return `you are a${this.role}`;
  }

  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = `${this.name} : ${text}`;
    document.body.appendChild(h1);
  }
}

class Admin extends User {
  constructor(name, address, username, email) {
    super(name, address, username, email);
    this.role = "admin";
  }
  remove() {
    document.querySelectorAll("h1").forEach(function (e) {
      e.remove();
    });
  }
}

let u1 = new User("Harsh", "Bhopal", "async123", "hey@gmail.com");
console.log(u1);

let u2 = new User("Harshita", "Delhi", "harshita23", "hey1@gmail.com");
console.log(u2);

let a1 = new Admin("admin1", "India", "admin345", "hi@gkjfje.com");
console.log(a1);
