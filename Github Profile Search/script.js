const form = document.getElementById("Form");

form.addEventListener('submit',function(e){ //Call back func which holds event object
    e.preventDefault();

    const search = document.getElementById("search").value;

    const name = search.split(' ').join('');

    document.getElementById("result").innerHTML = "";

    fetch("https://api.github.com/users/"+name)
    .then((result) => result.json())
    .then((data)=>{
        console.log(data);

        document.getElementById("result").innerHTML = `
        <a target = "_blank" href="https://www.github.com/${name}"> <img src = "${data.avatar_url}" /> </a>
        `
    })
})