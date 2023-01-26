// function takevalue(){
//     console.log("working");
//     var value10= document.getElementById("10").value;
//     var value12= document.getElementsById("12").value;
//     var valuegrad= document.getElementsById("grad").value;
//     document.write("Your info" + value10 + "<br>");
//     document.write("Your info" + value12 + "<br>");
//     document.write("Your info" + valuegrad + "<br>");
// }



// const form = document.getElementById('form');
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     const payload = new FormData(form);
//     console.log([...payload]);
//     fetch('https://httpbin.org/post', {
//     method: 'POST',
//     body: payload,
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
// })

const formE1 = document.querySelector('#form');
formE1.addEventListener('submit', event =>{
    event.preventDefault();
    const formData = new FormData(formE1);
    console.log(formData.get('10th'));
    var value10= formData.get('10th');
    var value12= formData.get('12th');
    var valuegrad= formData.get('Graduation');
    if(value10 >= 60 && value12 >= 60 && valuegrad >= 60)
        console.log("YES you can attempt quiz");
});


