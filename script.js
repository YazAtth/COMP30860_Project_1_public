

function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";

    document.getElementById("btn").style.left = `${Math.ceil(Math.random() * 90)}%`;
}

// const button = document.getElementById('btn');
// button.addEventListener('mouseover', function () {
//     button.style.left = `${Math.ceil(Math.random() * 90)}%`;
//     button.style.top = `${Math.ceil(Math.random() * 90)}%`;
// });
// button.addEventListener('click', function () {
//     alert('you clicked me')
// })


// const button = document.querySelector("btn");
// // Add a mouseover event listener
// button.addEventListener('click', () => {
//     // Change the button's background color
//     // button.style.backgroundColor = 'blue';
//     alert("Ran")
// });

name_hash = {
    "Harry": "Colm",
    "Voldemort": "Dara",
    "Tom": "Dara",
    "Potter": "O'hAonghusa",
    "Bellatrix": "Alexey",
    "Bella": "Alexey",
    "Dumbledore": "Fionn",
    "Aurors": "Plagiarism Committee",
    "the Animagus Black": "Luke"
}

const nameHash = {
    "Colm": "Colm (Harry)",
    "Dara": "Dara (Voldemort)",
    "O'hAonghusa": "O'hAonghusa (Potter)",
    "Alexey": "Alexey (Bellatrix)",
    "Plagiarism Committee": "Plagiarism Committee (Aurors)",
    "Luke": "Luke (the Animagus Black)",
    "Fionn": "Fionn (Dumbledore)",
}

const nameHashReverse = {};
for (const key in nameHash) {
    if (nameHash.hasOwnProperty(key)) {
        nameHashReverse[nameHash[key]] = key;
    }
}


const tooltipActivatorList = document.getElementsByClassName("tooltip-activator");

// tooltipActivator.innerHTML = nameHash[tooltipActivator.innerHTML]

for (let i=0; i<tooltipActivatorList.length; i++) {
    tooltipActivatorList[i].addEventListener("mouseenter", function () {
        // alert(tooltipActivatorList[i].innerHTML)
        tooltipActivatorList[i].innerHTML = nameHash[tooltipActivatorList[i].innerHTML]
    })

    tooltipActivatorList[i].addEventListener("mouseleave", function () {
        tooltipActivatorList[i].innerHTML = nameHashReverse[tooltipActivatorList[i].innerHTML]
    })

}




