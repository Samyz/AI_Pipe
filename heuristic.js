var { data } = require('./data.js');
var { Stack } = require('./stack.js');
const { performance } = require('perf_hooks');


var fs = require('fs');
var stream = fs.createWriteStream("log.txt");
module.exports.AI_Pipe_Heuristic = function AI_Pipe_Heuristic(mapNum){
    var startTime = performance.now();
    var replayDFS = [];
    const map = data[mapNum];
    var stack = new Stack();

    var dfsStack = new Stack();
    var checkPointStack = new Stack();
    var replayStack = new Stack();
    var x = 0, y = 0;
    dfsStack.push({ x : x, y : y, direction : 4 })
    var end = 0;
    var plus = 0;
    // var rotate = new Stack();
    var maxHeight = 0;
    while(!dfsStack.isEmpty() && end == 0){
        // console.log(dfsStack.toString());
        if (maxHeight < dfsStack.size())
            maxHeight = dfsStack.size();
        var temp = dfsStack.pop();
        x = temp.x;
        y = temp.y;
        inDirection = temp.direction;
        var waitForCheck = [];
        console.log(x, y);
        var str = x + " " + y + "\n";
        // fs.appendFileSync("log.txt", str);
        // stack.push({ x : x, y : y });
        
        if (map[y][x].type == 1){
            for (var i = 1; i >= 0; i--){
                let outDirection = 0;
                let j = 0;
                if (map[y][x].direction + i > 2){
                    j = (map[y][x].direction + i) - 2;
                }
                else{
                    j = (map[y][x].direction + i);
                }
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

                if (outDirection > 0){
                    let newX = x, newY = y;
                    if (outDirection == 1)
                        newX -= 1;
                    else if (outDirection == 2)
                        newY += 1;
                    else if (outDirection == 4)
                        newX += 1;
                    else if (outDirection == 8)
                        newY -= 1;
                    waitForCheck.push({x : newX, y : newY, rotate : i, direction : outDirection})
                }
            }
        }
        else{
            for (var i = 3; i >= 0; i--) {
                let outDirection = 0;
                let j = 0;
                if (map[y][x].direction + i > 4){
                    j = (map[y][x].direction + i) - 4;
                }
                else{
                    j = (map[y][x].direction + i)
                }
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

                if (outDirection > 0){
                    let newX = x, newY = y;
                    if (outDirection == 1)
                        newX -= 1;
                    else if (outDirection == 2)
                        newY += 1;
                    else if (outDirection == 4)
                        newX += 1;
                    else if (outDirection == 8)
                        newY -= 1;
                    waitForCheck.push({x : newX, y : newY, rotate : i, direction : outDirection})
                }
            }
        }
        // console.log(waitForCheck)
        var count = 0;
        var index = 0;
        var jump = 0;
        for (i of waitForCheck){
            var newX = i.x;
            var newY = i.y;
            var rotate = i.rotate;
            var direction = i.direction;
            if (x == 7 && y == 4 && direction == 4){
                stack.push({ x : x, y : y, rotate : rotate });
                if(index == 0 && waitForCheck.length == 2){
                    replayStack.push({ x : x, y : y, rotate : rotate });
                    jump = 1;
                }
                else{
                    replayDFS.push({ x : x, y : y, rotate : rotate });
                }
                // fs.appendFileSync("log.txt", stack.toString() + '\n');
                // fs.appendFileSync("log.txt", rotate.toString() + '\n');
                map[y][x].nextDirection = direction;
                end = 1;
                count++;
                break;
            }
            if (newX >= 0 && newX < 8 && newY >= 0 && newY < 6 && !stack.isInStack({ x : newX, y : newY, rotate : rotate })){
                stack.push({ x : x, y : y, rotate : rotate });
                if(index == 0 && waitForCheck.length == 2){
                    replayStack.push({ x : x, y : y, rotate : rotate });
                    jump = 1;
                }
                else{
                    replayDFS.push({ x : x, y : y, rotate : rotate });
                }
                // fs.appendFileSync("log.txt", stack.toString() + '\n');
                // fs.appendFileSync("log.txt", rotate.toString() + '\n');
                map[y][x].nextDirection = direction;
                dfsStack.push({ x : newX, y : newY, direction : direction })
                count++;
            }
            else if(x >= 0 && x < 8 && y >= 0 && y < 6){
                if(index == 0 && waitForCheck.length == 2){
                    replayStack.push({ x : x, y : y, rotate : rotate });
                }
                else{
                    replayDFS.push({ x : x, y : y, rotate : rotate });
                }
            }
            // console.log(count);
            index++;
        }
        
        if (count == 2){
            checkPointStack.push({ x : x, y : y, rotate: waitForCheck[0].rotate })
        }
        else if (count == 0){
            while (!isEquivalent(checkPointStack.peek(),stack.peek())){
                stack.pop();
            }
            checkPointStack.pop();
            console.log(checkPointStack.toString());
            console.log(replayStack.toString());
            replayDFS.push(replayStack.pop());
            while (!isEquivalent(checkPointStack.peek(), replayStack.peek())){
                replayDFS.push(replayStack.pop());
            }
                
        }
        else if (waitForCheck.length == 2 && count == 1 && (x != 0 || y != 0) && jump == 1){
            replayDFS.push(replayStack.pop());
        }
        // rotate.pop();
    }

    function isEquivalent(a, b) {
        if (a == null || b == null) {
            return true;
        }

        // Create arrays of property names
        var aProps = Object.getOwnPropertyNames(a);
        var bProps = Object.getOwnPropertyNames(b);
    
        // If number of properties is different,
        // objects are not equivalent
        if (aProps.length != bProps.length) {
            return false;
        }
    
        for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i];
    
            // If values of same property are not equal,
            // objects are not equivalent
            if (a[propName] !== b[propName]) {
                return false;
            }
        }
    
        // If we made it this far, objects
        // are considered equivalent
        return true;
    }


    // console.log(data[0][5][3]);
    var totalTime = performance.now() - startTime;
    console.log("maxHeight", maxHeight);
    console.log("Time", totalTime, "ms");
    console.log(stack.toString());
    console.log(replayDFS.length);
    console.log('[');
    for (var i of replayDFS){
        console.log(i);
        fs.appendFileSync("log.txt", "x = " + i.x + " y = " + i.y + " rotate = " + i.rotate + '\n');
    }
    console.log(replayStack.toString())
    // fs.appendFileSync("log.txt", replayDFS.toString() + '\n');
    // console.log(rotate.toString());
    // console.log(data[mapNum]);
}
// AI_Pipe_DFS(1);
// console.log(10 & 1);
// console.log(data[0]);