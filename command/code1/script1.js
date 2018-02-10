/**
 * 传统的命令模式的实现
 */

var setCommand = function(button, command) {
  button.onclick = function() {
    command.execute();
  };
};

var RefreshMenuBarCommand = function(receiver) {
  this.receiver = receiver;
}
RefreshMenuBarCommand.prototype.execute = function() {
  this.receiver.refresh();
}

var AddSubMenuCommand = function(receiver) {
  this.receiver = receiver;
}
AddSubMenuCommand.prototype.execute = function() {
  this.receiver.add();
}

var DelSubMenuCommand = function(receiver) {
  this.receiver = receiver;
}
DelSubMenuCommand.prototype.execute = function() {
  this.receiver.del();
}

var refreshMenuBarCommand = new RefreshMenuBarCommand(MenuBar);
var addSubMenuCommand = new AddSubMenuCommand( SubMenu );
var delSubMenuCommand = new DelSubMenuCommand( SubMenu );

setCommand( button1, refreshMenuBarCommand );
setCommand( button2, addSubMenuCommand );
setCommand( button3, delSubMenuCommand );