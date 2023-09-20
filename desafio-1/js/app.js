const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 1500,
  reset: true
})

ScrollReveal().reveal('.post', { delay: 300 })
ScrollReveal().reveal('.post-date', { delay: 300 })
ScrollReveal().reveal('.post-title', { delay: 400 })
ScrollReveal().reveal('.post-content', { delay: 400 })


const heart = document.getElementsByClassName("fa-heart")

heart.addEventListener("click", () => {
    console.log("clicou")
    heart.style.color = "red"
})