/* toggle navbar */
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}

/* close navbar */
document.addEventListener("click", function(e){
    if(e.target.closest(".nav-item")){
        toggleNav();
    }
});

/* sticky header */
window.addEventListener("scroll", function(){
    if(this.pageYOffset > 60){
        document.querySelector(".header").classList.add("sticky");
    } else {
        document.querySelector(".header").classList.remove("sticky");
    }
});

/* blog tabs */
const blogTabs = document.querySelector(".blog-tabs");
blogTabs.addEventListener("click",function(e){
    if(e.target.classList.contains("blog-tab-item") && !e.target.classList.contains("active")){
        const target= e.target.getAttribute("data-target");
        blogTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const blogSection = document.querySelector(".blog-section");
        blogSection.querySelector(".blog-tab-content.active").classList.remove("active");
        blogSection.querySelector(target).classList.add("active");
    }
});