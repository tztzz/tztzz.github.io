/* theme-switch */
const act = document.querySelector('.switch-theme')
const system_theme = window.matchMedia('(prefers-color-scheme: dark)')

if (localStorage.getItem('negative') === 'true') {
    document.body.classList.add('negative')
}

if (system_theme.matches && !localStorage.getItem('negative')) {
    document.body.classList.add('negative')
}

act.addEventListener('click', function () {
    if (localStorage.getItem('negative') === 'true') {
        localStorage.setItem('negative', 'false')
        document.body.classList.toggle('negative')
    }
    else {
        if (system_theme.matches && !localStorage.hasOwnProperty('negative')) {
            localStorage.setItem('negative', 'false')
        }
        else {
            localStorage.setItem('negative', 'true')
        }
        document.body.classList.toggle('negative')
    }
})
