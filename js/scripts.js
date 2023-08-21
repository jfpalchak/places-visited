// BUSINESS LOGIC for Places ---------------
function Place(city, state, landmarks, dateVisited) {
    this.city = city;
    this.state = state;
    this.landmarks = landmarks;
    this.dateVisited = dateVisited;
    this.notes = [];
}

Place.prototype.addNotes = function (note) {
    return this.notes;
    // this.notes.push(note);
}


let pdx = new Place("Porland", "Oregon", ["Powell's Books", "Big Pink"], "8/21/2023");