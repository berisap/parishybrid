function toggleNav() {
    let items = ["home", "team", "sponsoring", "galery", "lastproject"];
    let elements = [];
    let nav = document.querySelector("nav");

    items.forEach(i => {
        if (document.getElementById(i).className != "active") elements.push(document.getElementById(i));
    });

    if (nav.className === "closed") {
        let i = 0;
        let interval = setInterval(function() {
            if (i < elements.length) {
                elements[i].className = "navitem";
                i++;
            } else {
                nav.className = "expanded";
                clearInterval(interval);
            }
        }, 100);
    } else {
        let i = elements.length - 1;
        let interval = setInterval(function() {
            if (i >= 0) {
                elements[i].className = "gone";
                i--;
            } else {
                nav.className = "closed";
                clearInterval(interval);
            }
        }, 50);
    }
}

window.addEventListener("click", function () {
    if (document.querySelector("nav.expanded")) toggleNav();
})

window.onscroll = function() {
    if (document.body.clientWidth > 800) {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            let nav = document.querySelector("nav");
            nav.style.animationName = "collapse";
            nav.style.animationDuration = "500ms";
            nav.style.backgroundColor = "rgb(32, 32, 32)";
            nav.style.padding = "0px";
            
        } else {
            let nav = document.querySelector("nav");
            nav.style.animationName = "stretch";
            nav.style.animationDuration = "500ms";
            nav.style.backgroundColor = "transparent";
            nav.style.padding = "30px";
        }
    }
}

function validate() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");

    if (name.value == "") {
        document.getElementById("nameInput").innerText = "Bitte einen Namen eingeben";
        name.style.border = "1px solid red";
    }

    if (email.value == "") {
        document.getElementById("emailInput").innerText = "Bitte eine E-mailadresse eingeben";
        email.style.border = "1px solid red";
    }
}