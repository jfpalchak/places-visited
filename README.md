**Description:** Place()

```javascript
Test 1: "It will construct a Place object with empty properties."
Code: 
    const destination = new Place();
Expected Output: Place {location: undefined, landmarks: undefined, dateVisited: undefined}

Test 2: "It will construct a Palce object with property values."
Code: 
    const location = "Portland, OR";
    const landmarks = ["Powell's Books", "Big Pink", "Voodoo Donuts"];
    const dateVisited = "8/21/2023";
    const destination = new Place(location, landmarks, dateVisited);
Expected Output: Place {location: "Portland, OR", landmarks: ["Powell's Books", "Big Pink", "Voodoo Donuts"], dateVisited: "8/21/2023"} 





```