// BUSINESS LOGIC for Places ---------------
function Place(location, landmarks, dateVisited) {
    this.location = location;
    this.landmarks = landmarks;
    this.dateVisited = dateVisited;
}

let portlandOR = new Place("Porland, OR", ["Powell's Books", "Big Pink", "Voodoo Donuts"], "8/21/2023");