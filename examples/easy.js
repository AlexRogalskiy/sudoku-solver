const Game = require('../src/core/Game')

new Game(
  '0:2=5;0:3=3;0:4=6;0:6=4;1:0=9;1:1=6;1:2=2;1:5=4;1:7=7;2:0=3;2:2=4;2:4=2;2:5=9;2:7=6;3:0=8;3:1=2;3:3=9;3:4=4;3:7=1;3:8=3;4:1=4;4:2=9;4:4=3;4:7=5;4:8=7;5:3=2;5:6=9;5:7=8;6:0=4;6:2=6;6:5=1;6:8=2;7:3=6;7:4=9;7:5=3;7:8=5;8:2=3;8:4=8',
  { colors: false }
)
  .solve()
  .render()
  .validate()
