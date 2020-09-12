var { data } = require('./data.js');
var { Stack } = require('./stack.js');
const { performance } = require('perf_hooks');


var fs = require('fs');
var stream = fs.createWriteStream("log.txt");
module.exports.AI_Pipe_DFS = function AI_Pipe_DFS(mapNum){
    var startTime = performance.now();
    const map = data[mapNum];
    var stack = new Stack();
    // var rotate = new Stack();
    var maxHeight = 0;
    function dfs(x, y, inDirection) {
        console.log(x, y);
        var str = x + " " + y + "\n";
        // fs.appendFileSync("log.txt", str);
        // stack.push({ x : x, y : y });
        if (maxHeight < stack.size())
            maxHeight = stack.size();
        if (map[y][x].type == 1){
            for (var i = 0; i < 2; i++) {
                let inOut = 0;
                let outDirection = 0;
                let j = 0;
                if (map[y][x].direction + i > 2){
                    j = (map[y][x].direction + i) - 2;
                }
                else{
                    j = (map[y][x].direction + i)
                }
                // console.log("j", j);
                // str = "j " + j + "\n";
                // fs.appendFileSync("log.txt", str);
                if (j == 1){
                    if (inDirection == 1)
                        outDirection = 1;
                    else if (inDirection == 4)
                        outDirection = 4;
                }
                else if (j == 2){
                    if (inDirection == 2)
                        outDirection = 2;
                    else if (inDirection == 8)
                        outDirection = 8;
                }
                // console.log("outDirection", outDirection);
                // str = "outDirection " + outDirection+ "\n";
                // fs.appendFileSync("log.txt", str);
                if (outDirection > 0){
                    // outDirection = inOut & (15 & ~inDirection);
                    // console.log("next");
                    // str = "next\n";
                    // fs.appendFileSync("log.txt", str);
                    if (x == 7 && y == 4 && outDirection == 4){
                        stack.push({ x : x, y : y, rotate : i });
                        // rotate.push(i);
                        fs.appendFileSync("log.txt", stack.toString() + '\n');
                        // fs.appendFileSync("log.txt", rotate.toString() + '\n');
                        map[y][x].nextDirection = outDirection;
                        return "finish"
                    }
                    let newX = x, newY = y;
                    if (outDirection == 1)
                        newX -= 1;
                    else if (outDirection == 2)
                        newY += 1;
                    else if (outDirection == 4)
                        newX += 1;
                    else if (outDirection == 8)
                        newY -= 1;
                    
                    if (newX >= 0 && newX < 8 && newY >= 0 && newY < 6 && !stack.isInStack({ x : newX, y : newY, rotate : i })){
                        // console.log("go");
                        // str = "go\n\n";
                        // fs.appendFileSync("log.txt", str);
                        stack.push({ x : x, y : y, rotate : i });
                        // rotate.push(i);
                        fs.appendFileSync("log.txt", stack.toString() + '\n');
                        // fs.appendFileSync("log.txt", rotate.toString() + '\n');
                        map[y][x].nextDirection = outDirection;
                        let result = dfs(newX, newY, outDirection);
                        if (result != null){
                            return result;
                        }
                    }
                }
            }
        }
        else{
            for (var i = 0; i < 4; i++) {
                let inOut = 0;
                let outDirection = 0;
                let j = 0;
                if (map[y][x].direction + i > 4){
                    j = (map[y][x].direction + i) - 4;
                }
                else{
                    j = (map[y][x].direction + i)
                }
                // console.log("j", j);
                // str = "j" + j + "\n";
                // fs.appendFileSync("log.txt", str);
                if (j == 1){
                    if (inDirection == 1)
                        outDirection = 2;
                    else if (inDirection == 8)
                        outDirection = 4;
                }
                else if (j == 2){
                    if (inDirection == 4)
                        outDirection = 2;
                    else if (inDirection == 8)
                        outDirection = 1;
                }
                else if (j == 3){
                    if (inDirection == 4)
                        outDirection = 8;
                    else if (inDirection == 2)
                        outDirection = 1;
                }
                else if (j == 4){
                    if (inDirection == 2)
                        outDirection = 4;
                    else if (inDirection == 1)
                        outDirection = 8;
                }
                // console.log("outDirection", outDirection);
                // str = "outDirection" + outDirection + "\n";
                // fs.appendFileSync("log.txt", str);
                if (outDirection > 0){
                    // console.log("outDirection", outDirection);
                    // console.log("next");
                    // str = "next\n";
                    // fs.appendFileSync("log.txt", str);
                    if (x == 7 && y == 4 && outDirection == 4){
                        stack.push({ x : x, y : y, rotate : i });
                        // rotate.push(i);
                        fs.appendFileSync("log.txt", stack.toString() + '\n');
                        // fs.appendFileSync("log.txt", rotate.toString() + '\n');
                        map[y][x].nextDirection = outDirection;
                        return "finish"
                    }
                        
                    let newX = x, newY = y;
                    if (outDirection == 1)
                        newX -= 1;
                    else if (outDirection == 2)
                        newY += 1;
                    else if (outDirection == 4)
                        newX += 1;
                    else if (outDirection == 8)
                        newY -= 1;
                    
                    // console.log(!stack.isInStack({ x : newX, y : newY }));
                    if (newX >= 0 && newX < 8 && newY >= 0 && newY < 6 && (!stack.isInStack({ x : newX, y : newY, rotate : i }))){
                        // console.log("go");
                        // str = "go\n\n";
                        // fs.appendFileSync("log.txt", str);
                        stack.push({ x : x, y : y, rotate : i });
                        // rotate.push(i);
                        fs.appendFileSync("log.txt", stack.toString() + '\n');
                        // fs.appendFileSync("log.txt", rotate.toString() + '\n');
                        map[y][x].nextDirection = outDirection;
                        let result = dfs(newX, newY, outDirection);
                        if (result != null){
                            return result;
                        }
                    }
                }
            }
        }
        stack.pop();
        // rotate.pop();
        map[y][x].nextDirection = 0;
        return null;
    }


    // console.log(data[0][5][3]);
    dfs(0, 0, 4);
    var totalTime = performance.now() - startTime;
    console.log("maxHeight", maxHeight);
    console.log("Time", totalTime, "ms");
    console.log(stack.toString());
    // console.log(rotate.toString());
    // console.log(data[mapNum]);
}
// AI_Pipe_DFS(1);
// console.log(10 & 1);
// console.log(data[0]);