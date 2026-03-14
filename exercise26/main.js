// synchronous (blocking) programming
function display(){
    alert("starting of the function");
    setTimeout(() => {
        console.log("this message is late of 2 seconds");
    }, 2000);
}
display();
console.log ("this message is after the function call");

// asynchronous (non-blocking) programming

function getUserData(callback) {
    setTimeout(() => {
        let usersData = [{ id: 1, name: "John" }, { id: 2, name: "Jane" }, { id: 3, name: "Doe" }, { id: 4, name: "Smith" }, { id: 5, name: "Emily" }];
        callback(usersData);

    }, 5000);
}
getUserData((userData) => {
    console.log(userData);});