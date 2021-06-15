//const mainMenu = document.querySelector('.mainMenu'); 
//const closeMenu = document.querySelector('.closeMenu'); 
//const openMenu = document.querySelector('.openMenu'); 

//openMenu.addEventListener('click', show); 
//closeMenu.addEventListener('click', close); 

//function show() {
//    mainMenu.style.display = 'flex'; 
//    mainMenu.style.top = '0'; 
//}

//function close() {
//    mainMenu.style.top = '-100%'; 
//}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above

    var form = document.getElementById("my-form");
    var status = document.getElementById("status");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        //status.classList.add('success');
        //status.innerHTML = "Thanks!";
        alert("Thank you! Your email has been sent.");
    }

    function error() {
        //status.classList.add('error');
        //status.innerHTML = "Oops! There was a problem.";
        alert("Oops! There was a problem.");
    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}
