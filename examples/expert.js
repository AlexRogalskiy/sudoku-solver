const Game = require('../src/core/Game')

new Game(
  new Map([
    ['0:0', 8],
    ['1:2', 4],
    ['1:6', 8],
    ['1:7', 9],
    ['2:0', 9],
    ['2:4', 3],
    ['2:7', 1],
    ['3:1', 7],
    ['3:5', 4],
    ['4:3', 8],
    ['4:4', 1],
    ['4:5', 9],
    ['5:0', 6],
    ['5:1', 4],
    ['5:5', 3],
    ['6:1', 2],
    ['6:2', 5],
    ['6:8', 6],
    ['7:4', 5],
    ['7:6', 4],
    ['8:3', 1],
    ['8:8', 3],
  ]),
  { colors: true }
)
  .solve()
  .render()
  .validate()
