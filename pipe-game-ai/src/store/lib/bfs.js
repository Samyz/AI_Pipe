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
    }
  }
  function bfs(queue, visited) {
    var front = queue.dequeue();
    if (map[y][x].type == 1) {
      for (var i = 0; i < 2; i++) {
        let outDirection = 0;
        let j = 0;
        if (map[y][x].direction + i > 2) {
          j = map[y][x].direction + i - 2;
        } else {
          j = map[y][x].direction + i;
        }
        // console.log("j", j);
        // str = "j " + j + "\n";
        // fs.appendFileSync("log.txt", str);
        if (j == 1) {
          if (inDirection == 1) outDirection = 1;
          else if (inDirection == 4) outDirection = 4;
        } else if (j == 2) {
          if (inDirection == 2) outDirection = 2;
          else if (inDirection == 8) outDirection = 8;
        }
        // console.log("outDirection", outDirection);
        // str = "outDirection " + outDirection+ "\n";
        // fs.appendFileSync("log.txt", str);
        if (outDirection > 0) {
          // outDirection = inOut & (15 & ~inDirection);
          // console.log("next");
          // str = "next\n";
          // fs.appendFileSync("log.txt", str);
          if (x == 7 && y == 4 && outDirection == 4) {
            stack.push({ x: x, y: y, rotate: i });
            replayDFS.push({ x: x, y: y, rotate: i });
            // rotate.push(i);
            //fs.appendFileSync("log.txt", stack.toString() + '\n');
            // fs.appendFileSync("log.txt", rotate.toString() + '\n');
            map[y][x].nextDirection = outDirection;
            return "finish";
          }
          let newX = x,
            newY = y;
          if (outDirection == 1) newX -= 1;
          else if (outDirection == 2) newY += 1;
          else if (outDirection == 4) newX += 1;
          else if (outDirection == 8) newY -= 1;

          if (
            newX >= 0 &&
            newX < 8 &&
            newY >= 0 &&
            newY < 6 &&
            !stack.isInStack({ x: newX, y: newY, rotate: i })
          ) {
            // console.log("go");
            // str = "go\n\n";
            // fs.appendFileSync("log.txt", str);
            stack.push({ x: x, y: y, rotate: i });
            replayDFS.push({ x: x, y: y, rotate: i });
            // rotate.push(i);
            //fs.appendFileSync("log.txt", stack.toString() + '\n');
            // fs.appendFileSync("log.txt", rotate.toString() + '\n');
            map[y][x].nextDirection = outDirection;
            let result = dfs(newX, newY, outDirection);
            if (result != null) {
              return result;
            }
          } else if (x >= 0 && x < 8 && y >= 0 && y < 6) {
            replayDFS.push({ x: x, y: y, rotate: i });
          }
        }
      }
    } else {
      for (var i = 0; i < 4; i++) {
        let inOut = 0;
        let outDirection = 0;
        let j = 0;
        if (map[y][x].direction + i > 4) {
          j = map[y][x].direction + i - 4;
        } else {
          j = map[y][x].direction + i;
        }
        // console.log("j", j);
        // str = "j" + j + "\n";
        // fs.appendFileSync("log.txt", str);
        if (j == 1) {
          if (inDirection == 1) outDirection = 2;
          else if (inDirection == 8) outDirection = 4;
        } else if (j == 2) {
          if (inDirection == 4) outDirection = 2;
          else if (inDirection == 8) outDirection = 1;
        } else if (j == 3) {
          if (inDirection == 4) outDirection = 8;
          else if (inDirection == 2) outDirection = 1;
        } else if (j == 4) {
          if (inDirection == 2) outDirection = 4;
          else if (inDirection == 1) outDirection = 8;
        }
        // console.log("outDirection", outDirection);
        // str = "outDirection" + outDirection + "\n";
        // fs.appendFileSync("log.txt", str);
        if (outDirection > 0) {
          // console.log("outDirection", outDirection);
          // console.log("next");
          // str = "next\n";
          // fs.appendFileSync("log.txt", str);
          if (x == 7 && y == 4 && outDirection == 4) {
            stack.push({ x: x, y: y, rotate: i });
            replayDFS.push({ x: x, y: y, rotate: i });
            // rotate.push(i);
            //fs.appendFileSync("log.txt", stack.toString() + '\n');
            // fs.appendFileSync("log.txt", rotate.toString() + '\n');
            map[y][x].nextDirection = outDirection;
            return "finish";
          }

          let newX = x,
            newY = y;
          if (outDirection == 1) newX -= 1;
          else if (outDirection == 2) newY += 1;
          else if (outDirection == 4) newX += 1;
          else if (outDirection == 8) newY -= 1;

          // console.log(!stack.isInStack({ x : newX, y : newY }));
          if (
            newX >= 0 &&
            newX < 8 &&
            newY >= 0 &&
            newY < 6 &&
            !stack.isInStack({ x: newX, y: newY, rotate: i })
          ) {
            // console.log("go");
            // str = "go\n\n";
            // fs.appendFileSync("log.txt", str);
            stack.push({ x: x, y: y, rotate: i });
            replayDFS.push({ x: x, y: y, rotate: i });
            // rotate.push(i);
            //fs.appendFileSync("log.txt", stack.toString() + '\n');
            // fs.appendFileSync("log.txt", rotate.toString() + '\n');
            map[y][x].nextDirection = outDirection;
            let result = dfs(newX, newY, outDirection);
            if (result != null) {
              return result;
            }
          } else if (x >= 0 && x < 8 && y >= 0 && y < 6) {
            replayDFS.push({ x: x, y: y, rotate: i });
          }
        }
      }
    }
  }
};
