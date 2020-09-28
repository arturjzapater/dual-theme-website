(() => {
    const htmlTag = document.querySelector('html')
    const currentTheme = localStorage.getItem('theme')
    if (currentTheme) htmlTag.dataset.theme = currentTheme
})()
