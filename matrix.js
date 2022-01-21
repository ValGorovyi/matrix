function matrixAnimation() {
    let body = document.body
    body.style.background = 'rgb(39, 34, 34)'
    body.innerHTML = ''
    f = setInterval(() => {
        body.innerHTML += " " + Math.round(Math.random())
    }, 00,70);
    setTimeout(() => {
        clearInterval(f)
        body.style.background = '#030373'
        body.innerHTML = 'error. goodbye world'
    }, 10000);
}
