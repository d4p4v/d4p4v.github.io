let editor = ace.edit("editor");
editor.setTheme("ace/theme/tomorrow_night_eighties");
editor.session.setMode("ace/mode/lua");
editor.setOptions({

})
editor.container.style.lineHeight = 1.5
editor.renderer.updateFontSize()

let detector = document.querySelector('.ace_text-input')

detector.addEventListener('input', e => {
    save()
})

onload = function () {
    if (this.localStorage.getItem('code')) {
        editor.setValue(localStorage.getItem('code'))
    }
}

onkeydown = function (e) {
    if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
        e.preventDefault();
        save()
    }
}

save = function () {
    const content = editor.getValue()
    localStorage.setItem('code', content)
}