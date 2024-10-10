// alert("Hello!")


document.addEventListener('keydown', function (event) {

    var key_pressed = event.key === " " ? "Space" : event.key;

    var key = document.getElementById("key");
    var div = document.getElementById("container");


    key.textContent = key_pressed;

    key.style.display = "block";
    div.classList.remove("test");
    div.classList.add("main");
    console.log(key_pressed, event.location);
});
