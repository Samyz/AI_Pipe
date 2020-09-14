var { AI_Pipe_DFS } = require("./dfs");
function test() {
  var random = Math.floor(Math.random() * 10);
  AI_Pipe_DFS(1);
}
test();
module.exports = { test };
