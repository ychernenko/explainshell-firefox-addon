var contextMenu = require("sdk/context-menu");
var tabs = require("sdk/tabs");
var menuItem = contextMenu.Item({
  label: "Explain with ExplainShell",
  context: contextMenu.SelectionContext(),
  contentScript: 'self.on("click", function () {' +
  '  var text = window.getSelection().toString();' +
  '  self.postMessage(text);' +
  '});',
  onMessage: function (selectionText) {
    tabs.open("http://explainshell.com/explain?cmd=" + encodeURIComponent(selectionText));
  }
});