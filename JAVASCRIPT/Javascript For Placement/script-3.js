// Observer Pattern

class YoutubeChannel {
  constructor() {
    this.subscribers = [];
  }

  // Subscribe
  subscribe(user) {
    this.subscribers.push(user);
    user.update("You have subscribed the channel.");
  }

  // Unsubscribe
  unsubscribe(user) {
    this.subscribers = this.subscribers.filter((sub) => sub !== user);
    user.update("You have unsubscribed the channel.");
  }

  // Notify all subscribers
  notify(message) {
    this.subscribers.forEach((sub) => sub.update(message));
  }
}

// User class
class User {
  constructor(name) {
    this.name = name;
  }

  update(message) {
    console.log(`${this.name}: ${message}`);
  }
}

let sher = new YoutubeChannel();
const user1 = new User("Harsh");
const user2 = new User("Harshita");
sher.subscribe(user1);
sher.subscribe(user2);
console.log("-----------");
sher.notify("New video is live!");
console.log("-----------");
sher.unsubscribe(user1);
console.log("-----------");
sher.notify("We are closing the channel because it's April 1st.");
