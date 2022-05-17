// You get any card as an argument. Your task is to return the suit of this card (in lowercase).



function defineSuit(card) {
    console.log(card)
    let arrCard = card.split("")

    console.log(arrCard)
    if (arrCard[arrCard.length - 1] === "♣") {
        return 'clubs'
    } else if (arrCard[arrCard.length - 1] === "♦") {
        return 'diamonds'
    } else if (arrCard[arrCard.length - 1] === "♥") {
        return 'hearts'
    }else if (arrCard[arrCard.length - 1] === "♠") {
        return 'spades'
    }
}

//Else solution:
function defineSuit(card) {
    const s = {
        "♣": "clubs",
        "♠": "spades",
        "♦": "diamonds",
        "♥": "hearts"
    }
    return s[card.charAt(card.length - 1)]
}

function defineSuit(card) {
    if(card.includes('♥')) return 'hearts'
    if(card.includes('♦')) return 'diamonds'
    if(card.includes('♣')) return 'clubs'
    if(card.includes('♠')) return 'spades'
}

function defineSuit(card) {
    let deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
        '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
        '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
        '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];

    let c = deck.indexOf(card);

    return c < 13 ? 'clubs' : c < 26 ? 'diamonds' : c < 39 ? 'hearts' : 'spades';
}

function defineSuit(card) {
    return ["clubs","diamonds","hearts","spades"][Math.floor(deck.indexOf(card)/13)]
}