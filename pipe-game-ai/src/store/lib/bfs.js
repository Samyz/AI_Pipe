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
    queueStart.enqueue({ i: 0, j: 0, inDirection: 4 });
    while (!queueStart.isEmty()) {
      bfs(queueStart, startVisited);
    }
  }
  function bfs(queue, visited) {
    var front = queue.dequeue();
    if (map[front.x][front.y].type == 1) {
      for (var i = 0; i < 2; i++) {
        let outDirection = 0;
        let j = 0;
        if (map[y][x].direction + i > 2) {
          j = map[y][x].direction + i - 2;
        } else {
          j = map[y][x].direction + i;
        }
        if (j == 1) {
          if (inDirection == 1) outDirection = 1;
          else if (inDirection == 4) outDirection = 4;
        } else if (j == 2) {
          if (inDirection == 2) outDirection = 2;
          else if (inDirection == 8) outDirection = 8;
        }
      }
    } else {
    }
  }
};
