let tools = ace.require("ace/ext/language_tools");
let editor = ace.edit("editor");
editor.setTheme("ace/theme/tomorrow_night_eighties");
editor.session.setMode("ace/mode/lua");
editor.setOptions({
    enableSnippets: false,
    enableLiveAutocompletion: true
})
editor.container.style.lineHeight = 1.5
editor.font
editor.renderer.updateFontSize()