window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    let blue = 118 + ((window.scrollY / 1055) * 100)
    document.body.style.backgroundColor = `rgb(181,101,${blue})`
})
comments = [];

h3 = document.querySelector('h3');
btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    commentText = document.querySelector('textarea');
    commentUser = document.querySelector('#user');
    comment = document.createElement('p');
    comment.innerText = commentText.value + " - " + commentUser.value;
    h3.after(comment);
})