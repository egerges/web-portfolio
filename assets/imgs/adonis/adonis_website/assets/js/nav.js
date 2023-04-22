document.addEventListener("DOMContentLoaded", () => {
    document.getElementsByClassName('menu-btn')[0]
    .addEventListener('click', () => {
        const nav = document.getElementsByClassName('nav-item');
        for (let index = 1; index < nav.length; index++) {
            const el = nav[index];
            if (el.style.display == "none") {
                el.style.display = "block";
                el.style.visibility = "visible";
            } else {
                el.style.display = "none";
                el.style.visibility = "hidden";
            }
        }
    });
});