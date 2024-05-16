let oyna = document.querySelector('.oyna')

function start(input) {
    oyna.value += input
}

function tozalash() {
    oyna.value = ''
}

function hisoblash() {
    try {
        oyna.value = eval(oyna.value)
    } catch (error) {
        oyna.value = 'ERROR'
    }
}