window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    let blue = 118 + ((window.scrollY / 1055) * 100)
    document.body.style.backgroundColor = `rgb(181,101,${blue})`
})

btn = document.querySelector('button');
btn.addEventListener('mouseover', () => {
    console.dir(btn);
    btn.textContent = 'Click me';
    btn.style.letterSpacing = '2px';
})
btn.addEventListener('click', () => {

    window.scrollTo(0, 0);
})