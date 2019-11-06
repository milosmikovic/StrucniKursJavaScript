const cards = document.querySelectorAll('.mem-card');

let hasFliped = false;
let fstCard, secCard;

let lockBoard = false;

function flipCard() {

    if(lockBoard){
        return;
    }

    if(this === fstCard) return;
    // console.log('Card is clicked!');
    // element na koji smo pritisli
    // console.log(this);
    // ako pritisnemo na element , dobija tag toggle 
    this.classList.add('flip');

    if(!hasFliped){
        //kliknuta prva karta
        hasFliped = true;
        fstCard = this;

        return;
    }
    
    secCard = this;
    // console.log(fstCard,secCard);
    // console.log(fstCard.dataset.framework);
    // console.log(secCard.dataset.framework);
    isMatch();
}

function isMatch(){
    if(fstCard.dataset.framework === secCard.dataset.framework){
        disableCards();
    }else{
        unflipCards();
    }
}

function disableCards(){
    fstCard.removeEventListener('click',flipCard);
    secCard.removeEventListener('click',flipCard);

    resetBoard();
}

function unflipCards(){

    lockBoard = true;

    setTimeout(() => {
        fstCard.classList.remove('flip');
        secCard.classList.remove('flip');
        resetBoard();
    },1000);
}

function resetBoard(){
    [hasFliped,lockBoard] = [false,false];
    [fstCard,secCard] = [null,null];
}

(function shuffle(){
    cards.forEach(card => {
        let random = Math.floor(Math.random() * 12);
        card.style.order = random;
    });
})();

cards.forEach(card => card.addEventListener('click',flipCard));