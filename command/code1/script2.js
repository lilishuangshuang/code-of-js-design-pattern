/**
 * 不使用模式实现相同的功能
 */

var bindClick = function(button, func) {
  button.onclick = func();
}

bindClick(button1, MenuBar.refresh);
bindClick(button2, SubMenu.add);
bindClick(button3, SubMenu.del);