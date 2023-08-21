**Description:** Place()

```javascript
Test 1: "It will construct a Place as an empty Object."
Code: 
    const destination = new Place();
Expected Output: Place {}

Test 2: "It will construct a Place object with empty properties."
Code: 
    const destination = new Place();
Expected Output: Place {city: undefined}

Test 3: "It will construct a Place object with one key-value pair."
Code: 
    const city = "Portland";
    const destination = new Place();
Expected Output: Place {city: "Portland"}

Test 4: "It will construct a Place object with a landmarks property that contains an array as a value."
Code:
    const city = "Portland";
    const landmarks = ["Powell's Books", "Big Pink"];
    const destination = new Place(city, landmarks);
Expected Output: Place {city: "Portland", landmarks: ["Powell's Books", "Big Pink"]}

Test 4: "It will construct a Place object with multiple property values of different types."
Code: 
    const city = "Portland";
    const state = "Oregon";
    const landmarks = ["Powell's Books", "Big Pink"];
    const dateVisited = "8/21/2023";
    const destination = new Place(city, state, landmarks, dateVisited);
Expected Output: Place {city: "Portland", state: "OR", landmarks: ["Powell's Books", "Big Pink"], dateVisited: "8/21/2023"} 

Test 5: ""
Code: 

```

**Description:** Place.prototype.addNotes()
```javascript

Test 1: "."
Code: 

Expected Output: 
```
