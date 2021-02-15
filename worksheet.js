const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
//2. Get array of all heights
//3. Get array of objects with just name and height properties
//4. Get array of all first names

//***REDUCE***
//1. Get total mass of all characters
//2. Get total height of all characters
//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names

//***FILTER***
//1. Get characters with mass greater than 100

const massGreaterThan100 = characters.filter( characters => {
    return characters.mass > 100;

});
console.log(massGreaterThan100);

// Another way to do it ( when return is single)
const new_massGreaterThan100 = characters.filter( 
    (characters) => characters.mass > 100);
console.log(new_massGreaterThan100);

//2. Get characters with height less than 200
const heightLessThan200 = characters.filter( (characters) => {
    return characters.height < 200;
});
console.log(heightLessThan200)

// Single return
const new_heightLessThan200 = characters.filter( 
    (characters) => characters.height < 200);
console.log(new_heightLessThan200)


//3. Get all male characters
const maleCharacters = characters.filter( 
    (characters) => characters.gender === "male");
console.log(maleCharacters);

//4. Get all female characters
const femaleCharacters = characters.filter( 
    (characters) => characters.gender === "female");
console.log(femaleCharacters)

//***SORT***

// Sort takes in a comparator function (a,b)

//1. Sort by mass
// Sort mass by increasing order
const sort_mass_inc = characters.sort( (a,b) => { 
    return a.mass - b.mass;
})
console.log(sort_mass_inc);

// Sort Mass by decreasing order
const sort_mass_dec = characters.sort( (a,b) => { 
    return b.mass - a.mass;
})
console.log(sort_mass_dec);



//2. Sort by height
// Sort height by increasing order
const sort_height_inc = characters.sort( (a,b) => { 
    return a.height - b.height;
})
console.log(sort_height_inc);

const sort_height_dec = characters.sort((a,b) => {
    return b.height - a.height;
})
console.log(sort_height_dec);

//3. Sort by name

// Sorts alphabetically
const sort_name = characters.sort( (a,b) => {
    if (a.name < b.name) return -1;
    return 1;
})
console.log(sort_name)

//4. Sort by gender
const female_first = characters.sort ((a,b) => {
    if (a.gender === 'female')return -1;
    return 1;
})
console.log(female_first);







//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
