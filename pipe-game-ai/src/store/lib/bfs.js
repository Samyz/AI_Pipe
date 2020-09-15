var { data } = require("./data.js");
var { Queue } = require("./queue.js");
// const { performance } = require('perf_hooks');

module.exports.AI_Pipe_BFS = function AI_Pipe_BFS(mapNum) {
  var startTime = performance.now();
  const map = data[mapNum];
  var queue = new Queue();
  var replayBFS = [];
  var maxHeight = 0;
  queue.enqueue({ x: 0, y: 0, inDirection: 4 });
  function isIn(obj) {
    for (var i of replayBFS) {
      if (i.x === obj.x && i.y === obj.y) return true;
    }
    return false;
  }

  while (!queue.isEmpty()) {
    var now = queue.dequeue();
    if (map[now.y][now.x].type == 1) {
      for (var i = 0; i < 2; i++) {
        let outDirection = 0;
        let j = 0;
        if (map[now.y][now.x].direction + i > 2) {
          j = map[now.y][now.x].direction + i - 2;
        } else {
          j = map[now.y][now.x].direction + i;
        }
        // console.log("j", j);
        // str = "j " + j + "\n";
        // fs.appendFileSync("log.txt", str);
        if (j == 1) {
          if (now.inDirection == 1) outDirection = 1;
          else if (now.inDirection == 4) outDirection = 4;
        } else if (j == 2) {
          if (now.inDirection == 2) outDirection = 2;
          else if (now.inDirection == 8) outDirection = 8;
        }
        // console.log("outDirection", outDirection);
        // str = "outDirection " + outDirection+ "\n";
        // fs.appendFileSync("log.txt", str);
        if (outDirection > 0) {
          // outDirection = inOut & (15 & ~inDirection);
          // console.log("next");
          // str = "next\n";
          // fs.appendFileSync("log.txt", str);
          if (now.x == 7 && now.y == 4 && outDirection == 4) {
            // queue.push({ x : x, y : y, rotate : i });
            replayBFS.push({ x: now.x, y: now.y, rotate: i });
            // rotate.push(i);
            // fs.appendFileSync("log.txt", stack.toString() + '\n');
            // fs.appendFileSync("log.txt", rotate.toString() + '\n');
            map[y][x].nextDirection = outDirection;
            break;
          }
          let newX = now.x,
            newY = now.y;
          if (outDirection == 1) newX -= 1;
          else if (outDirection == 2) newY += 1;
          else if (outDirection == 4) newX += 1;
          else if (outDirection == 8) newY -= 1;

          if (
            newX >= 0 &&
            newX < 8 &&
            newY >= 0 &&
            newY < 6 &&
            !isIn({ x: newX, y: newY, rotate: i })
          ) {
            // console.log("go");
            // str = "go\n\n";
            // fs.appendFileSync("log.txt", str);
            replayBFS.push({ x: now.x, y: now.y, rotate: i });
            // rotate.push(i);
            // fs.appendFileSync("log.txt", stack.toString() + '\n');
            // fs.appendFileSync("log.txt", rotate.toString() + '\n');
            map[now.y][now.x].nextDirection = outDirection;
            // let result = dfs(newX, newY, outDirection);
            // if (result != null){
            //     return result;
            // }
            queue.enqueue({ x: newX, y: newY, inDirection: outDirection });
          }
        }
      }
    } else {
      for (var i = 0; i < 4; i++) {
        let outDirection = 0;
        let j = 0;
        if (map[now.y][now.x].direction + i > 4) {
          j = map[now.y][now.x].direction + i - 4;
        } else {
          j = map[now.y][now.x].direction + i;
        }
        // console.log("j", j);
        // str = "j" + j + "\n";
        // fs.appendFileSync("log.txt", str);
        if (j == 1) {
          if (now.inDirection == 1) outDirection = 2;
          else if (now.inDirection == 8) outDirection = 4;
        } else if (j == 2) {
          if (now.inDirection == 4) outDirection = 2;
          else if (now.inDirection == 8) outDirection = 1;
        } else if (j == 3) {
          if (now.inDirection == 4) outDirection = 8;
          else if (now.inDirection == 2) outDirection = 1;
        } else if (j == 4) {
          if (now.inDirection == 2) outDirection = 4;
          else if (now.inDirection == 1) outDirection = 8;
        }
        // console.log("outDirection", outDirection);
        // str = "outDirection" + outDirection + "\n";
        // fs.appendFileSync("log.txt", str);
        if (outDirection > 0) {
          // console.log("outDirection", outDirection);
          // console.log("next");
          // str = "next\n";
          // fs.appendFileSync("log.txt", str);
          if (now.x == 7 && now.y == 4 && outDirection == 4) {
            replayBFS.push({ x: now.x, y: now.y, rotate: i });
            // rotate.push(i);
            // fs.appendFileSync("log.txt", stack.toString() + '\n');
            // fs.appendFileSync("log.txt", rotate.toString() + '\n');
            map[y][x].nextDirection = outDirection;
            break;
          }

          let newX = now.x,
            newY = now.y;
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
            !isIn({ x: newX, y: newY, rotate: i })
          ) {
            // console.log("go");
            // str = "go\n\n";
            // fs.appendFileSync("log.txt", str);
            replayBFS.push({ x: now.x, y: now.y, rotate: i });
            // rotate.push(i);
            // fs.appendFileSync("log.txt", stack.toString() + '\n');
            // fs.appendFileSync("log.txt", rotate.toString() + '\n');
            map[now.y][now.x].nextDirection = outDirection;
            // let result = dfs(newX, newY, outDirection);
            // if (result != null){
            //     return result;
            // }
            queue.enqueue({ x: newX, y: newY, inDirection: outDirection });
          }
        }
      }
    }
  }
  var totalTime = performance.now() - startTime;
  for (var i of replayBFS) {
    console.log(i.x, i.y, i.rotate);
  }
  return { time: totalTime, space: maxHeight, answer: replayBFS };
};
