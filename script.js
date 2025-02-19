document.getElementById("menu-toggle").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the link from refreshing the page
    document.getElementById("menu").classList.toggle("hidden");
});

