const cards = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'container');


var request = new XMLHttpRequest();
request.open('GET', 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1', true);
request.onload = function () {
var data = JSON.parse(this.response);


}
request.send();

function data() {
  return {
    msg: 'Click "Start/Shuffle to display and shuffle deck"',
    deck: '',
    cardList: ''}}

    function cardData () {
      return this.cardList
    }
    function deckData () {
      return this.deck
    }


function getDeck() {
  return fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => res.json())
    .then(json => {
      this.deck = json
     getCards(this.deck.deck_id)
      return Promise.resolve(json)
    })
    .catch(err => Promise.reject(err))}
   
function getCards(deck_id) {
      return fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=52`)
        .then(response => response.json())
        .then((json) => {
          this.cardList = [...json.cards]
         
        var imgLinks = this.cardList.map(card => {
           return `<img src="${card.images.png}"/>`
         })
          console.log(imgLinks)
         
        
        document.getElementById("cards").innerHTML = imgLinks.join(" ");
        
          return Promise.resolve(json)
        })
        .catch(err => Promise.reject(err))}

 function shuffle(deck) {
   return fetch('https://deckofcardsapi.com/api/deck/' + deck.deck_id + '/shuffle/')
      .then(response => response.json())
      .then(json => {
      this.deck = json
      return Promise.resolve(json)
      })
    .catch(err => Promise.reject(err))}

    