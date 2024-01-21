// You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill. //
console.log("hi");
let names = ["Mahil", "Siddhart", "Jongom", "Kangkan", "Santanu"];

function whoPaid() {
    let i = Math.floor(Math.random()*names.length) ;
    console.log(i)
    console.log(names[i]); 
    
}
whoPaid();