let icon = document.querySelector(".icon");
let list = document.querySelector(".list");

icon.onclick = function() {

    if(list.style.cssText == "display: none;") {
        list.style.cssText = "display: block;"

    } else {
        list.style.cssText = "display: none;"
    }

}
