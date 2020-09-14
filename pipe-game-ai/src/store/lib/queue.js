class Queue {
  constructor() {
    this.list = [];
  }

  enqueue(element) {
    this.list.unshift(element);
  }

  dequeue() {
    if (this.list.length == 0) return null;
    return this.list.shift();
  }

  front() {
    return this.list[0];
  }

  size() {
    return this.list.length;
  }

  isEmpty() {
    return this.list.length == 0;
  }

  isInQueue(element) {
    for (var i in this.list) {
      if (this.list[i].x == element.x && this.list[i].y == element.y)
        return true;
    }
    return false;
  }

  toString() {
    let str = "[";
    for (var i in this.list) str += JSON.stringify(this.list[i]) + " ";
    return str + "]";
  }

  checkIntersection(other) {
    for (var i = 0; i < this.list.length; i++) {
      for (var j = 0; j < other.list.length; j++) {
        if (
          this.list[i].x == other.list[j].x &&
          this.list[i].y == other.list[j].y
        ) {
          return true;
        }
      }
    }
    return false;
  }
}

module.exports = { Queue };
