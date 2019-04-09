/*
Aufgabe 02 Memory
Name: Elyssia-Sofie D�rr
Matrikel:
Datum: 11.11.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe02;
(function (Aufgabe02) {
    document.addEventListener("DOMContentLoaded", listeners);
    document.addEventListener("DOMContentLoaded", init);
    let colors = ["blue", "green", "red", "yellow"];
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "x", "<->"];
    let deck = [{ cardColors: "black", cardNumbers: "+4" }, { cardColors: "black", cardNumbers: "wish" }, { cardColors: "black", cardNumbers: "+4" }, { cardColors: "black", cardNumbers: "wish" }];
    let handcards = [];
    let place = [];
    function init() {
        for (let i = 0; i < colors.length; i++) {
            for (let j = 0; j < numbers.length; j++) {
                for (let z = 0; z < 2; z++) {
                    let card = { cardColors: colors[i], cardNumbers: numbers[j] };
                    deck.push(card);
                }
            }
        }
        //Nutzer gibt gew�nschte Anzahl Karten in das Eingabefenster ein. Diese wird in ein 
        //Array umgewandelt, damit gecheckt werden kann, ob sie kleiner als 10 ist.
        let nmbOfCards;
        nmbOfCards = prompt("Mit wie vielen Karten willst Du spielen?");
        if (isNaN(parseInt(nmbOfCards)) || parseInt(nmbOfCards) > 108) {
            nmbOfCards = prompt("Gib eine Zahl zwischen 1 und 108 ein.");
        }
        else {
            alert("Du spielst mit " + nmbOfCards + " Karten!");
            createHand(parseInt(nmbOfCards));
        }
    }
    function createHand(_x) {
        for (let k = _x; k > 0; k--) {
            let l;
            l = Math.floor(Math.random() * (deck.length - 1));
            handcards.push(deck[l]);
            deck.splice(l, 1);
        }
        displayHand();
    }
    function listeners() {
        console.log("listener");
        document.getElementById("aufnehmen").addEventListener("click", drawCard); //drawCard und sort brauch ich noch
        document.addEventListener("keydown", drawCard);
        document.getElementById("sort").addEventListener("click", sortcards);
    }
    function displayHand() {
        document.getElementById("handCards").innerHTML = "";
        for (let y = 0; y < handcards.length; y++) {
            //  (handcards[y].numbers, handcards[y].colors);
            let card = document.createElement("div");
            let z = String(y);
            card.setAttribute("id", z);
            card.innerText = handcards[y].cardNumbers;
            card.classList.add("Karte");
            card.classList.add(handcards[y].cardColors);
            document.getElementById("handCards").appendChild(card);
            card.addEventListener("click", playCard);
        }
        console.log(handcards);
    }
    function drawCard() {
        let l = Math.floor(Math.random() * (deck.length - 1));
        handcards.push(deck[l]);
        deck.splice(l, 1);
        displayHand();
    }
    function playCard(_event) {
        let clickedCard = _event.target;
        let index = parseInt(clickedCard.id);
        place.push(handcards[index]); //was hei�t das
        console.log(index);
        document.getElementById("discard").innerHTML = "";
        let div = document.createElement("div");
        document.getElementById("discard").appendChild(div);
        div.innerHTML = handcards[index].cardNumbers;
        div.classList.add(handcards[index].cardColors);
        div.classList.add("handCardStyle");
        handcards.splice(index, 1);
        displayHand();
    }
    function compare(a, b) {
        if (a.cardColors > b.cardColors) {
            return 1;
        }
        if (a.cardColors < b.cardColors) {
            return -1;
        }
        if (a.cardNumbers > b.cardNumbers) {
            return 1;
        }
        if (a.cardNumbers < b.cardNumbers) {
            return -1;
        }
        return 0;
    }
    function sortcards() {
        console.log(handcards);
        handcards.sort(compare);
        console.log(handcards);
        displayHand();
    }
})(Aufgabe02 || (Aufgabe02 = {})); //namespace zu
//# sourceMappingURL=aufgabe03.js.map