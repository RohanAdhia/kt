// alert("Test!")
document.addEventListener('keydown', function (event) {
    event.preventDefault();
    var key_pressed = event.key === " " ? "Space" : event.key;
    var key = document.getElementById("key");
    var div = document.getElementById("container");
    key.textContent = key_pressed.toLocaleUpperCase();
    key.style.display = "block";
    div.classList.remove("test");
    div.classList.add("main");
});
