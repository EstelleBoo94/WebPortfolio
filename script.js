document.getElementById("menu-toggle").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("menu").classList.toggle("hidden");
});

document.addEventListener("click", function(event) {
    var menu = document.getElementById("menu");
    var menuToggle = document.getElementById("menu-toggle");
    
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        if (!menu.classList.contains("hidden")) {
            menu.classList.add("hidden");
        }
    }
});