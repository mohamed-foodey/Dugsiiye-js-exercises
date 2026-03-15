// json read file

// midkan file ka ayaan kaso aqriyey json format
async function fetchData(){
    console.log(" starting to fetch data...");
    // fetching data from json file
    const response = await fetch("data.json");
    // parsing the data to json format
    const data = await response.json();
    console.log("data fetched successfully:", data);
}
fetchData();

// midkane bananka ayan kaso aqriyey link bananka ayan so qatay 
async function fetchExternalData(){
    console.log(" starting to fetch external data...");
    // fetching data from external api
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // parsing the data to json format
    const data = await response.json();
    console.log("external data fetched successfully:", data);
}
fetchExternalData();