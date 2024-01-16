
runjs();

function runjs() {

    // mobile navbar toggle
    document.querySelector(".ipass-mobile-nav-toggle").addEventListener("click", function(e) {
        document.querySelector(".ipass-navbar").classList.toggle("ipass-navbar-mobile")
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
    });
}