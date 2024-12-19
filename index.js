// Implementation of myMap
function myMap(collection, callback) {
    // Convert the collection to an array if it's an object
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    
    // Iterate over the collection and apply the callback
    for (let i = 0; i < values.length; i++) {
        result.push(callback(values[i]));
    }
    
    // Return the new array
    return result;
}

// Example usage of myMap
const numbers = [1, 2, 3];
const result = myMap(numbers, num => num * 3);
console.log(result); // Output: [3, 6, 9]

// Example with an object
const obj = { one: 1, two: 2, three: 3 };
const objResult = myMap(obj, num => num * 3);
console.log(objResult); // Output: [3, 6, 9]
