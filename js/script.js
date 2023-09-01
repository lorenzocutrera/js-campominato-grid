/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
*/



document.querySelector('.inizia').addEventListener('click', function () {
    let gameGrid = document.getElementById('gameGrid'); // seleziono la  grid
    gameGrid.innerHTML = ""; // svuoto il container

    // scrivere per 100 volte un div.cella dentro al gameGrid
    for (let i = 0; i < 100; i++) {


        let cell = document.createElement('div'); // creo un div
        cell.className = 'cella'; // assegno a questo di la classe
        cell.innerText = i + 1;
        
        gameGrid.append(cell); // appendo al grid il div appena creato

        cell.addEventListener('click', function () {
            //console.log('ho cliccato sull elemento dom:', cellElement);
            //console.log(this); // Dom element cellElement
            this.classList.toggle('bg-green')
            console.log(this.innerText);
        })

    }
});


