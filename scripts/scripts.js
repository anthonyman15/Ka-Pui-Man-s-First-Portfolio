const mybutton = document.getElementById("gotothetop");
const darkModeIcon = document.getElementById("icon");
const ls = window.localStorage;

const refreshButtonVisibility = () => {
    if (document.documentElement.scrollTop <= 1) {
        mybutton.style.display = "none";
    } else {
        mybutton.style.display = "block";
    }
};

darkMode();
refreshButtonVisibility();

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function darkMode() {
    if (ls.getItem("theme") == null) {
        ls.setItem("theme", "light");
        console.log("hi");
    }
    let localData = ls.getItem("theme");
    var element = document.body;
    if (localData == "light") {
        darkModeIcon.src = "img/moon.png";
        element.classList.remove("dark-mode");
    } else if (localData == "dark") {
        darkModeIcon.src = "img/sun.png";
        element.classList.add("dark-mode");
    }
}

function toggleDarkMode() {
    darkMode();
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        darkModeIcon.src = "img/sun.png";
        ls.setItem("theme", "dark");
    } else {
        darkModeIcon.src = "img/moon.png";
        ls.setItem("theme", "light");
    }
}

document.addEventListener("scroll", (e) => {
    refreshButtonVisibility();
});