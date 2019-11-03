const cards = document.querySelectorAll('.mem-card');

function flipCard() {
    console.log('Card is clicked!');
    // element na koji smo pritisli
    console.log(this);
    // ako pritisnemo na element , dobija tag toggle 
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click',flipCard));