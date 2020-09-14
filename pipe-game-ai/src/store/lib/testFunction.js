var { AI_Pipe_DFS } = require("./dfs");
function test() {
  var random = Math.floor(Math.random() * 10);
  AI_Pipe_DFS(random);
}

module.exports = { test };
