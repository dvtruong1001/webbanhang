
window.addEventListener("load", (event) => {
    
    const icon = document.getElementsByClassName("icon-menu")[0];
    const submenu = document.getElementsByClassName("submenu")[0];
    icon.addEventListener("click", function(e) {

        if(submenu.style.display === "none")
        {
            submenu.style.display = "flex";
        } else {
            submenu.style.display = "none";
        }
        
    })

});