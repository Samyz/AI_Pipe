class Stack {
  constructor() {
    this.list = [];
  }

  push(element) {
    this.list.push(element);
  }

  pop() {
    if (this.list.length == 0) return null;
    return this.list.pop();
  }

  peek() {
    return this.list[this.list.length - 1];
  }

  size() {
    return this.list.length;
  }

  isEmpty() {
    return this.list.length == 0;
  }

  isInStack(element) {
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

module.exports = { Stack };
