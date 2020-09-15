var { AI_Pipe_DFS } = require("./dfs");
var { AI_Pipe_BI_DFS } = require("./bidirectional-dfs");
var { AI_Pipe_BFS } = require("./bfs");
var { Stack } = require("./stack");
function test() {
  var random = Math.floor(Math.random() * 10);
  //AI_Pipe_DFS(1);
  // AI_Pipe_BI_DFS(0);
  AI_Pipe_BFS(0);
}
test();
module.exports = { test };
