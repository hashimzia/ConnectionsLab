let p1 = 0;
let p2 = 0;
button1 = document.querySelector("#button-1");
button2 = document.querySelector("#button-2");
button3 = document.querySelector("#button-3");
p1score = document.querySelector("span")
p2score = document.querySelector("span:nth-of-type(2)")
endscore = document.querySelector("select").value;


button1.addEventListener("click", function () {
    endscore = document.querySelector("select").value;
    p1++;
    p1score.innerText = p1;
    if (p1 == endscore) {
        button1.disabled = true;
        button2.disabled = true;
        p1score.style.color = "green";
        p2score.style.color = "red";
    }
})
button2.addEventListener("click", function () {
    endscore = document.querySelector("select").value;
    p2++;
    p2score.innerText = p2;
    if (p2 == endscore) {
        button1.disabled = true;
        button2.disabled = true;
        p1score.style.color = "red";
        p2score.style.color = "green";
    }
})

button3.addEventListener("click", function () {
    p1 = 0;
    p2 = 0;
    button1.disabled = false;
    button2.disabled = false;
    p1score.style.color = "black";
    p2score.style.color = "black";
    p2score.innerText = p2;
    p1score.innerText = p1;
})
