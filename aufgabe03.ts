/*
Aufgabe 02 Memory
Name: Elyssia-Sofie Dürr
Matrikel: 
Datum: 11.11.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. 
*/

namespace Aufgabe02 {
    document.addEventListener("DOMContentLoaded", listeners);
    document.addEventListener("DOMContentLoaded", init);

    interface Card {
        cardColors: string;
        cardNumbers: string;
    }

    let colors: string[] = ["blue", "green", "red", "yellow"];
    let numbers: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "x", "<->"];
    let deck: Card[] = [{ cardColors: "black", cardNumbers: "+4" }, { cardColors: "black", cardNumbers: "wish" }, { cardColors: "black", cardNumbers: "+4" }, { cardColors: "black", cardNumbers: "wish" }];
    let handcards: Card[] = [];
    let place: Card[] = [];


    function init(): void {
        for (let i: number = 0; i < colors.length; i++) {
            for (let j: number = 0; j < numbers.length; j++) {
                for (let z: number = 0; z < 2; z++) {
                    let card: Card = { cardColors: colors[i], cardNumbers: numbers[j] };
                    deck.push(card);
                }
            }
        }
        //Nutzer gibt gewünschte Anzahl Karten in das Eingabefenster ein. Diese wird in ein 
        //Array umgewandelt, damit gecheckt werden kann, ob sie kleiner als 10 ist.
        let nmbOfCards: string;
        nmbOfCards = prompt("Mit wie vielen Karten willst Du spielen?");

        if (isNaN(parseInt(nmbOfCards)) || parseInt(nmbOfCards) > 108) {
            nmbOfCards = prompt("Gib eine Zahl zwischen 1 und 108 ein.");
        } else {
            alert("Du spielst mit " + nmbOfCards + " Karten!");
            createHand(parseInt(nmbOfCards));
        }
    }


    function createHand(_x: number): void {  
        for (let k: number = _x; k > 0; k--) {
            let l: number;
            l = Math.floor(Math.random() * (deck.length - 1));
            handcards.push(deck[l]);
            deck.splice(l, 1);
        }
        displayHand();
    }

    function listeners(): void {
        console.log("listener");
        document.getElementById("aufnehmen").addEventListener("click", drawCard); //drawCard und sort brauch ich noch
        document.addEventListener("keydown", drawCard);
        document.getElementById("sort").addEventListener("click", sortcards);
    }

    function displayHand(): void {
        document.getElementById("handCards").innerHTML = "";
        for (let y: number = 0; y < handcards.length; y++) {
            //  (handcards[y].numbers, handcards[y].colors);
            let card: HTMLDivElement = document.createElement("div");
            let z: string = String(y);
            card.setAttribute("id", z);
            card.innerText = handcards[y].cardNumbers;
            card.classList.add("Karte");
            card.classList.add(handcards[y].cardColors);
            document.getElementById("handCards").appendChild(card);
            card.addEventListener("click", playCard);
        }
        console.log(handcards);
    } 

    function drawCard(): void {
        let l: number = Math.floor(Math.random() * (deck.length - 1));
        handcards.push(deck[l]);
        deck.splice(l, 1);

        displayHand();
    }

    function playCard(_event: MouseEvent): void {
        let clickedCard: HTMLElement = <HTMLElement>_event.target;
        let index: number = parseInt(clickedCard.id);
        place.push(handcards[index]); //was heißt das
        console.log(index);

        document.getElementById("discard").innerHTML = "";
        let div: HTMLElement = document.createElement("div");
        document.getElementById("discard").appendChild(div);
        div.innerHTML = handcards[index].cardNumbers;
        div.classList.add(handcards[index].cardColors);
        div.classList.add("handCardStyle");
        handcards.splice(index, 1);
        displayHand();
    }

    function compare(a: Card, b: Card): number {
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
  
    function sortcards(): void {
        console.log(handcards);
    
        handcards.sort(compare);
        console.log(handcards);
        displayHand();
    }

} //namespace zu