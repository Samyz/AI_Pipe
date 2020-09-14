var { data } = require("./data.js");
var { Stack } = require("./stack.js");
// const { performance } = require("perf_hooks");

//var fs = require('fs');
//var stream = fs.createWriteStream("log.txt");
module.exports.AI_Pipe_BI_DFS = function AI_Pipe_BI_DFS(mapNum) {
  // var startTime = performance.now();

  var replayDFS = [];
  var replayDFS2 = [];
  const map = data[mapNum];
  var stack = new Stack();
  var stack2 = new Stack();

  var maxHeight = 0;
  var maxHeight2 = 0;
  function dfs(x, y, inDirection, x2, y2, inDirection2) {
    console.log(`x2:${x2},y2:${y2},inDirection2:${inDirection2}`);
    if (maxHeight < stack.size()) maxHeight = stack.size();
    if (maxHeight2 < stack2.size()) macHeight2 = stack2.size();
    // if (map[y][x].type == 1) {
    //   for (var i = 0; i < 2; i++) {
    //     let outDirection = 0;
    //     let j = 0;
    //     if (map[y][x].direction + i > 2) {
    //       j = map[y][x].direction + i - 2;
    //     } else {
    //       j = map[y][x].direction + i;
    //     }
    //     if (j == 1) {
    //       if (inDirection == 1) outDirection = 1;
    //       else if (inDirection == 4) outDirection = 4;
    //     } else if (j == 2) {
    //       if (inDirection == 2) outDirection = 2;
    //       else if (inDirection == 8) outDirection = 8;
    //     }
    //     if (outDirection > 0) {
    //       if (x == 7 && y == 4 && outDirection == 4) {
    //         stack.push({ x: x, y: y, rotate: i });
    //         replayDFS.push({ x: x, y: y, rotate: i });
    //         map[y][x].nextDirection = outDirection;
    //         return "finish";
    //       }
    //       let newX = x,
    //         newY = y;
    //       if (outDirection == 1) newX -= 1;
    //       else if (outDirection == 2) newY += 1;
    //       else if (outDirection == 4) newX += 1;
    //       else if (outDirection == 8) newY -= 1;

    //       if (
    //         newX >= 0 &&
    //         newX < 8 &&
    //         newY >= 0 &&
    //         newY < 6 &&
    //         !stack.isInStack({ x: newX, y: newY, rotate: i })
    //       ) {
    //         stack.push({ x: x, y: y, rotate: i });
    //         replayDFS.push({ x: x, y: y, rotate: i });
    //         map[y][x].nextDirection = outDirection;
    //         let result = dfs(newX, newY, outDirection, x2, y2, inDirection2);
    //         if (result != null) {
    //           return result;
    //         }
    //       } else if (x >= 0 && x < 8 && y >= 0 && y < 6) {
    //         replayDFS.push({ x: x, y: y, rotate: i });
    //       }
    //     }
    //   }
    // } else {
    //   for (var i = 0; i < 4; i++) {
    //     let inOut = 0;
    //     let outDirection = 0;
    //     let j = 0;
    //     if (map[y][x].direction + i > 4) {
    //       j = map[y][x].direction + i - 4;
    //     } else {
    //       j = map[y][x].direction + i;
    //     }
    //     if (j == 1) {
    //       if (inDirection == 1) outDirection = 2;
    //       else if (inDirection == 8) outDirection = 4;
    //     } else if (j == 2) {
    //       if (inDirection == 4) outDirection = 2;
    //       else if (inDirection == 8) outDirection = 1;
    //     } else if (j == 3) {
    //       if (inDirection == 4) outDirection = 8;
    //       else if (inDirection == 2) outDirection = 1;
    //     } else if (j == 4) {
    //       if (inDirection == 2) outDirection = 4;
    //       else if (inDirection == 1) outDirection = 8;
    //     }
    //     if (outDirection > 0) {
    //       if (stack.checkIntersection(stack2)) {
    //         console.log("->This is intersection");
    //       }
    //       if (x == 7 && y == 4 && outDirection == 1) {
    //         stack.push({ x: x, y: y, rotate: i });
    //         replayDFS.push({ x: x, y: y, rotate: i });
    //         map[y][x].nextDirection = outDirection;
    //         return "finish";
    //       }
    //       let newX = x,
    //         newY = y;
    //       if (outDirection == 1) newX -= 1;
    //       else if (outDirection == 2) newY += 1;
    //       else if (outDirection == 4) newX += 1;
    //       else if (outDirection == 8) newY -= 1;
    //       if (
    //         newX >= 0 &&
    //         newX < 8 &&
    //         newY >= 0 &&
    //         newY < 6 &&
    //         !stack.isInStack({ x: newX, y: newY, rotate: i })
    //       ) {
    //         stack.push({ x: x, y: y, rotate: i });
    //         replayDFS.push({ x: x, y: y, rotate: i });
    //         map[y][x].nextDirection = outDirection;
    //         let result = dfs(newX, newY, outDirection, x2, y2, inDirection2);
    //         if (result != null) {
    //           return result;
    //         }
    //       } else if (x >= 0 && x < 8 && y >= 0 && y < 6) {
    //         replayDFS.push({ x: x, y: y, rotate: i });
    //       }
    //     }
    //   }
    // }
    //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    if (map[y2][x2].type == 1) {
      for (var i = 0; i < 2; i++) {
        let outDirection = 0;
        let j = 0;
        if (map[y2][x2].direction + i > 2) {
          j = map[y2][x2].direction + i - 2;
        } else {
          j = map[y2][x2].direction + i;
        }
        console.log(`j:${j}`);
        if (j == 1) {
          if (inDirection2 == 1) outDirection = 1;
          else if (inDirection2 == 4) outDirection = 4;
        } else if (j == 2) {
          if (inDirection2 == 2) outDirection = 2;
          else if (inDirection2 == 8) outDirection = 8;
        }
        if (outDirection > 0) {
          if (stack.checkIntersection(stack2)) {
            console.log("->This is intersection");
          }
          if (x2 == 0 && y2 == 0 && outDirection == 1) {
            stack2.push({ x: x2, y: y2, rotate: i });
            replayDFS2.push({ x: x2, y: y2, rotate: i });
            map[y2][x2].nextDirection = outDirection;
            console.log(`x2:${x2},${y2}`);
            return "finish";
          }
          let newX = x2,
            newY = y2;
          if (outDirection == 1) newX += 1;
          else if (outDirection == 2) newY -= 1;
          else if (outDirection == 4) newX -= 1;
          else if (outDirection == 8) newY += 1;

          if (
            newX >= 0 &&
            newX < 8 &&
            newY >= 0 &&
            newY < 6 &&
            !stack2.isInStack({ x: newX, y: newY, rotate: i })
          ) {
            stack2.push({ x: x2, y: y2, rotate: i });
            replayDFS2.push({ x: x2, y: y2, rotate: i });
            map[y2][x2].nextDirection = outDirection;
            let result = dfs(x, y, inDirection, newX, newY, outDirection);
            if (result != null) {
              return result;
            }
          } else if (x2 >= 0 && x2 < 8 && y2 >= 0 && y2 < 6) {
            replayDFS2.push({ x: x2, y: y2, rotate: i });
          }
        }
      }
    } else {
      for (var i = 0; i < 4; i++) {
        let inOut = 0;
        let outDirection = 0;
        let j = 0;
        if (map[y2][x2].direction + i > 4) {
          j = map[y2][x2].direction + i - 4;
        } else {
          j = map[y2][x2].direction + i;
        }
        if (j == 1) {
          if (inDirection2 == 1) outDirection = 2;
          else if (inDirection2 == 8) outDirection = 4;
        } else if (j == 2) {
          if (inDirection2 == 4) outDirection = 2;
          else if (inDirection2 == 8) outDirection = 1;
        } else if (j == 3) {
          if (inDirection2 == 4) outDirection = 8;
          else if (inDirection2 == 2) outDirection = 1;
        } else if (j == 4) {
          if (inDirection2 == 2) outDirection = 4;
          else if (inDirection2 == 1) outDirection = 8;
        }
        if (outDirection > 0) {
          if (stack.checkIntersection(stack2)) {
            console.log("->This is intersection");
          }
          if (x2 == 0 && y2 == 0 && outDirection == 1) {
            stack2.push({ x: x2, y: y2, rotate: i });
            replayDFS2.push({ x: x2, y: y2, rotate: i });
            map[y2][x2].nextDirection = outDirection;
            console.log(`x2:${x2},${y2}`);
            return "finish";
          }

          let newX = x2,
            newY = y2;
          if (outDirection == 1) newX += 1;
          else if (outDirection == 2) newY -= 1;
          else if (outDirection == 4) newX -= 1;
          else if (outDirection == 8) newY += 1;

          if (
            newX >= 0 &&
            newX < 8 &&
            newY >= 0 &&
            newY < 6 &&
            !stack2.isInStack({ x: newX, y: newY, rotate: i })
          ) {
            stack2.push({ x: x2, y: y2, rotate: i });
            replayDFS2.push({ x: x2, y: y2, rotate: i });
            map[y2][x2].nextDirection = outDirection;
            let result = dfs(x, y, inDirection, newX, newY, outDirection);
            if (result != null) {
              return result;
            }
          } else if (x2 >= 0 && x2 < 8 && y2 >= 0 && y < 6) {
            replayDFS2.push({ x: x2, y: y2, rotate: i });
          }
        }
      }
    }
    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    stack.pop();
    stack2.pop();
    return null;
  }

  dfs(0, 0, 4, 7, 4, 2);
  // var totalTime = performance.now() - startTime;
  console.log("->Finished");
  console.log("[");
  replayDFS.forEach((element) => {
    console.log(`{x:${element.x}, y:${element.y},rotate:${element.rotate}}`);
  });
  console.log("]");
  console.log("[");
  replayDFS2.forEach((element) => {
    console.log(`{x:${element.x}, y:${element.y},rotate:${element.rotate}}`);
  });
  console.log("]");
  //return { time: 0, space: maxHeight2, answer: replayDFS2 };
};
