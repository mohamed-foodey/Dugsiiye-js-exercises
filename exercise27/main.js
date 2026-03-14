function fetchDataProducts(){
    return new Promise ((resolve, reject) => {

        setTimeout(() => {
            let success = true;
            if (success){
                resolve({name:"laptop",price:1000,brand:"dell",model:"xps 13"});
            }
            else{
                reject("error fetching product data");
            }
        },2000)
    })
}
fetchDataProducts()
.then((data) => console.log("product data: ",data))
.catch((error) => console.error(error));