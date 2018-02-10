/**
 * 用闭包实现的命令模式
 */

var setCommand = function(button, command) {
  button.onclick = function() {
    command.execute();
  };
}

var RefreshMenuBarCommand = function(receiver) {
  return {
    execute: function() {
      receiver.refresh();
    }
  }
}

var refreshMenuBarCommand = RefreshMenuBarCommand(MenuBar);

setCommand(button1, refreshMenuBarCommand);
