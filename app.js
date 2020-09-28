const htmlTag = document.querySelector('html')

const changeTheme = theme => {
    htmlTag.dataset.theme = theme
    localStorage.setItem('theme', theme)
}
