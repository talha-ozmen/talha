const filter = document.getElementById("todo")

filter.addEventListener("focus", input)
filter.addEventListener("blur", input)

function input(e) {

    console.log(e.type);
}
