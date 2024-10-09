const button = document.getElementById('toggle-dark-mode');


let isDarkMode = false;


button.addEventListener('click', () => {
    if (isDarkMode) {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
    }
    else {
        document.body.style.backgroundColor = "#000";
        document.body.style.color = "#fff";
    }

    isDarkMode = !isDarkMode;
});
