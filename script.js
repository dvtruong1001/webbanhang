
window.addEventListener("load", (event) => {
    const submenu = document.getElementsByClassName("submenu")[0];
    const icon = document.getElementsByClassName("icon-menu")[0];

    icon.addEventListener("click", function (e) {
        e.preventDefault();

        if (submenu.style.display === "flex") {
            submenu.style.display = "none";

        } else {
            submenu.style.display = "flex";
            
        }

    })


    
});