const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

const links = document.querySelectorAll("#menu a");

hamburger.addEventListener("click", function() {
    menu.classList.toggle("active");
});

links.forEach(link => {
    link.addEventListener("click", function(){
        menu.classList.remove("active");
    });
});
