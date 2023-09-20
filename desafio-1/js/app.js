const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2000,
  reset: true
})

ScrollReveal().reveal('.post', { delay: 200 })
ScrollReveal().reveal('.post-date', { delay: 400 })
ScrollReveal().reveal('.post-title', { delay: 500 })
ScrollReveal().reveal('.post-content', { delay: 500 })
