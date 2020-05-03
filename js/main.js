let btn = document.getElementById("findbtn");
btn.addEventListener('click', () => {
    overlay.style.display = "grid";
    overlay.classList.add('animate-overlay');
      })

const toTop = document.querySelector("#back-to-top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
        }
    else {
        toTop.classList.remove("active");
        }
}) 