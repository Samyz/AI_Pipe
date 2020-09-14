var { AI_Pipe_DFS } = require('./dfs');

var random = Math.floor(Math.random() * 10);
console.log("Random number :", random);
for( var i = 0 ; i < 10 ; i++){
    console.log('->Map'+i);
    AI_Pipe_DFS(i);
}
