// BUSINESS LOGIC for Places ---------------
function Place(city, state, landmarks, dateVisited) {
    this.city = city;
    this.state = state;
    this.landmarks = landmarks;
    this.dateVisited = dateVisited;
    this.notes = [];
}

Place.prototype.addNotes = function (note) {
    this.notes.push(note);
}

Place.prototype.location = function () {
    return this.city + ", " + this.state;
}


// UI LOGIC -----------------------------------
// function runEverything() {

//     const pdx = new Place("Porland", "Oregon", ["Powell's Books", "Big Pink"], "8/21/2023");
//     const salem = new Place("Salem","Oregon", ["The Capitol", "In-N-Out"], "1/12/1999");
//     const corvallis = new Place("Corvallis", "Oregon", ["OSU", "Mary's Peak", "Sky High"], "8/20/2023");

//     const pdxContainer = document.getElementById("pdx-cover");
//     const salemContainer = document.getElementById("salem-cover");
//     const corvallisContainer = document.getElementById("corvallis-cover");


    

// }

window.addEventListener("load", runEverything);
    document.querySelector