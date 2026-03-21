// get methods
async function fetchData(){
   try{
     console.log(" starting to fetch data...");
    
     const response = await fetch("https://jsonplaceholder.typicode.com/users");
         
     if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
   }
     const data = await response.json();
     console.log("data fetched successfully:", data);
   } 
   
    catch(error){
        console.error("Error fetching data:", error);
    }

}
fetchData();