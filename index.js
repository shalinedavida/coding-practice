// PROMISES

// Basic Promise
 const myPromise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("Promise resolved!")
    },2000)
 })
 myPromise.then(response =>{
    console.log(response);
 }).catch(error => {
    console.log(error); 
 });

//  Chaining Promises
 const fetchData = new Promise((resolve,reject)=>{
    setTimeout(() =>resolve ("Data fetched"),1000);
 });
  fetchData
  .then(data => {
    console.log(data);
    return"Processing data"; 
  })
  .then(processedData => {
    console.log(processedData);
    return "Displaying data";
  })
  .then(finalStep =>{
    console.log(finalStep);
  })
  .catch(error =>{
    console.error(error)
  });

// Using Promise.all()
const promise1 = new Promise( resolve => setTimeout (()=> resolve("First Done"),1000));
const promise2= new Promise( resolve => setTimeout (()=> resolve("Second Done"),2000));
const promise3 = new Promise( resolve => setTimeout (()=> resolve("Third  Done"),3000));

Promise.all([promise1,promise2,promise3]).then(values => {
    console.log(values);
});

// Using asycn /await with Promises 

function delay(ms){
    return new Promise(resolve =>setTimeout(resolve,ms));
}
async function fetchDat() {
    console.log("Fetching Data ...");
    await delay(2000);
    console.log("Data received!");
}
fetchDat();

// Practive applications of Promises in modern we develoment

// 1.Fetching data from API
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error fetching data:", error));

//2. User authentication 
function authenticateUser(credentials) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (credentials.username === "admin") {
                resolve("Login successful");
            } else {
                reject("Invalid credentials");
            }
        }, 2000);
    });
}

authenticateUser({ username: "admin" })
    .then(message => console.log(message))
    .catch(error => console.error(error));

// 3.Image loading
function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(img);
        img.onerror = () => reject("Error loading image");
    });
}

loadImage("image.jpg")
    .then(img => document.body.appendChild(img))
    .catch(error => console.error(error));

// 4.Database Operations
const dbQuery = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Database query successful");
    }, 3000);
});

dbQuery.then(result => console.log(result))
       .catch(error => console.error(error));

// 5.File uploads
function uploadFile(file) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (file.size < 1000000) {
                resolve("Upload complete!");
            } else {
                reject("File too large.");
            }
        }, 2000);
    });
}

uploadFile({ size: 500000 })
    .then(message => console.log(message))
    .catch(error => console.error(error));

// 6.Animations and delayed actions
function fadeOut(element) {
    return new Promise(resolve => {
        element.style.transition = "opacity 1s";
        element.style.opacity = "0";
        setTimeout(() => resolve("Fade-out complete"), 1000);
    });
}

fadeOut(document.getElementById("myElement"))
    .then(message => console.log(message));

