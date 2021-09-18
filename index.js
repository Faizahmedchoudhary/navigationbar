const navigation = () =>{

    
    burger = document.querySelector('.burger')
    navbar = document.querySelectorAll('.navbar li a')
    nav = document.querySelector('nav')
    
    burger.addEventListener("click", () => {
        console.log("clicked")
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block"
    }
    const navbarli = document.querySelectorAll('.navbarli')
    
    navbarli.forEach(function (link, index) {
        
        if (link.style.animation) {
            link.style.animation = ""
        } else {
            link.style.animation = `navlinksli 0.5s ease  ${index / 7.7}s `
            
        }
        console.log(index / 2.5)
        
    });
    event.preventDefault()
})



}
navigation()