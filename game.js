document.addEventListener('DOMContentLoaded', () => {

    const cardArray =[
        {
            name: 'dog',
            img: 'assets/0fad34fa5d7b728678556f0500bdb161.jpg'
        },

        {
            name: 'dog',
            img: 'assets/0fad34fa5d7b728678556f0500bdb161.jpg'
        },

        {
            name: 'house',
            img: 'assets/41cab39d69a2e3ef9122aa8a1d9c0791.png'
        },

        {
            name: 'house',
            img: 'assets/41cab39d69a2e3ef9122aa8a1d9c0791.png'
        },

        {
            name: 'car',
            img: 'assets/6437f529a61d6ae6521387ffe464f1f8.jpg'
        },

        {
            name: 'car',
            img: 'assets/6437f529a61d6ae6521387ffe464f1f8.jpg'
        },

        {
            name: 'rain',
            img: 'assets/7822778e4bda08e8f122e7df5c6a388e.jpg'
        },

          {
            name: 'rain',
            img: 'assets/7822778e4bda08e8f122e7df5c6a388e.jpg'
        },
    ]

    // random cards to be picked
    cardArray.sort(() => 0.5 - Math.random())


    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

// create your board
    function createBoard(){
        for (let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'assets/image.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard)
            grid.appendChild(card);
        }
    }

    //check for matches
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        // if the cards chosen is correct, it'll display this
        if (cardsChosen[0] === cardsChosen[1]){
            alert('you found a match')
            cards[optionOneId].style.backgroundColor = 'white';
            cards[optionTwoId].style.backgroundColor = 'white'
            cardsWon.push(cardsChosen)
        }
        // if the cards chosen is not a match
        else{
            cards[optionOneId].setAttribute('src', 'assets/image.png')
            cards[optionTwoId].setAttribute('src', 'assets/image.png')
            alert('Sorry, please try again')
        }

        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length
            if(cardsWon.length === cardArray.length / 2){
                resultDisplay.textContent = 'Congratulations, you\'ve found them all';
            }
    
    }

    //flid cards
    function flipCard(){
        var cardId = this.getAttribute('data-id'); // it gets the data-id created in the function above
        cardsChosen.push(cardArray[cardId].name) // adds more images from the array
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img) // this will help to add images based on the ID it holds 
        if (cardsChosen.length === 2){
            setTimeout( checkForMatch, 500)
        }
    }

    createBoard();


});