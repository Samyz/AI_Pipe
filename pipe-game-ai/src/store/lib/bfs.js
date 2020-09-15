var { data } = require("./data.js");
var { Queue } = require("./stack.js");
// const { performance } = require("perf_hooks");

//var fs = require('fs');
//var stream = fs.createWriteStream("log.txt");
module.exports.AI_Pipe_BFS = function AI_Pipe_BFS(mapNum) {
  var startVisited = [];
  var goalVisited = [];
  var map = data[mapNum];
  for (var i = 0; i < 6; i++) {
    startVisited.push([]);
    goalVisited.push([]);
    for (var j = 0; j < 8; j++) {
      startVisited[i].push(false);
      goalVisited[i].push(false);
    }
  }
  function run() {
    var queueStart = new Queue();
    var queueGoal = new Queue();
    queueStart.enqueue({ x: 0, y: 0, inDirection: 4 });
    while (!queueStart.isEmty()) {
      bfs(queueStart, startVisited);
      console.log(queueStart.list);
      break;
    }
  }
  function bfs(queue, visited) {
    var front = queue.dequeue();
    var outDirection = -1;
    var saveRotate = -1;
    if (map[front.y][front.x].type == 1) {
      if (map[front.y][front.x].direction == 1) {
        if (front.inDirection == 1 || front.inDirection == 3) {
          outDirection = front.inDirection;
          saveRotate = 0;
        } else if (front.inDirection == 2 || front.inDirection == 4) {
          outDirection = front.inDirection;
          saveRotate = 1;
        }
      } else if (map[front.y][front.x].direction == 2) {
        if (front.inDirection == 1 || front.inDirection == 3) {
          outDirection = front.inDirection;
          saveRotate = 1;
        } else if (front.inDirection == 2 || front.inDirection == 4) {
          outDirection = front.inDirection;
          saveRotate = 0;
        }
      } else {
        throw new Error("Unknow pipe direction");
      }
      if ((outDirection = 1)) {
        queue.enqueue({
          x: front.x,
          y: front.y + 1,
          inDirection: outDirection,
        });
      } else if ((outDirection = 2)) {
        queue.enqueue({
          x: front.x - 1,
          y: front.y,
          inDirection: outDirection,
        });
      } else if ((outDirection = 3)) {
        queue.enqueue({
          x: front.x,
          y: front.y - 1,
          inDirection: outDirection,
        });
      } else if ((outDirection = 4)) {
        queue.enqueue({
          x: front.x + 1,
          y: front.y,
          inDirection: outDirection,
        });
      } else {
        throw new Error("Unknow out direction");
      }
    } else if (map[front.y][front.x].type == 2) {
      for (var i = 0; i < 4; i++) {
        switch (map[front.y][front.x].direction + (i % 5) + 1) {
          case 1: {
            if (front.inDirection == 2) {
              outDirection = 1;
              saveRotate = i;
              queue.enqueue({
                x: front.x,
                y: front.y + 1,
                inDirection: outDirection,
              });
            } else if (front.inDirection == 3) {
              outDirection = 4;
              saveRotate = i;
              queue.enqueue({
                x: front.x + 1,
                y: front.y,
                inDirection: outDirection,
              });
            }
            break;
          }
          case 2: {
            if (front.inDirection == 3) {
              outDirection = 2;
              saveRotate = i;
              queue.enqueue({
                x: front.x - 1,
                y: front.y,
                inDirection: outDirection,
              });
            } else if (front.inDirection == 4) {
              outDirection = 1;
              saveRotate = i;
              queue.enqueue({
                x: front.x,
                y: front.y + 1,
                inDirection: outDirection,
              });
            }
            break;
          }
          case 3: {
            if (front.inDirection == 1) {
              outDirection = 2;
              saveRotate = i;
              queue.enqueue({
                x: front.x - 1,
                y: front.y,
                inDirection: outDirection,
              });
            } else if (front.inDirection == 4) {
              outDirection = 3;
              saveRotate = i;
              queue.enqueue({
                x: front.x,
                y: front.y - 1,
                inDirection: outDirection,
              });
            }
            break;
          }
          case 4: {
            if (front.inDirection == 1) {
              outDirection = 4;
              saveRotate = i;
              queue.enqueue({
                x: front.x + 1,
                y: front.y,
                inDirection: outDirection,
              });
            } else if (front.inDirection == 2) {
              outDirection = 3;
              saveRotate = i;
              queue.enqueue({
                x: front.x,
                y: front.y - 1,
                inDirection: outDirection,
              });
            }
            break;
          }
          default: {
            throw new Error("Unknow switch case type");
          }
        }
      }
    } else {
      throw new Error("Unknow pipe type");
    }
  }
};
