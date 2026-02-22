console.log("properties and values of each person: ");
let people = [
    {name: "Alice", age: 30, city: "New York"},
    {name: "Bob", age: 25, city: "Los Angeles"},
    {name: "Charlie", age: 35, city: "Chicago"}
];

for(let person of people){
    console.log("-------------");
    console.log("Name: ",person.name);
    console.log("Age: ",person.age);
    console.log("City: ",person.city);
   
}