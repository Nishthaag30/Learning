const submit = document.querySelector('#submit');

submit.addEventListener('click', () => {
    var score = 0;
    if(document.getElementById('correct1').checked)
        score++;
    if(document.getElementById('correct2').checked)
        score++;
    if(document.getElementById('correct3').checked)
        score++;
    if(document.getElementById('correct4').checked)
        score++;
    if(document.getElementById('correct5').checked)
        score++;
    if(score < 5)
        alert("Sorry, You cant upload content");
})