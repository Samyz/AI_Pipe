var { AI_Pipe_DFS } = require('./dfs');
var { AI_Pipe_BFS } = require('./bfs');

var random = Math.floor(Math.random() * 10);
console.log("Random number :", 1);
// AI_Pipe_DFS(1);

// AI_Pipe_DFS(random);
AI_Pipe_BFS(0);