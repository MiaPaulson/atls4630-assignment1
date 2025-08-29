// when button with "ouch" ID is clicked, change the works to say OUCH!/HEY!/STOP!
// get that element
const ouch = document.getElementById("ouch");

// creating array for responses for button
const phrases = ["OUCH!", "HEY!", "STOP!", "THAT HURTS!", "KNOCK IT OFF!", "I SAID DON'T CLICK ME!", "YIKES!"];

// now make it change!
// arrow functions
// const myArrowFunction = (parameter) => {do something}
// () ouside empty parenthesis calls the function immediately
ouch.addEventListener("click", () => {
    console.log("ouch!");
    
    // get random number between 0 and 6 (indexes of phrases array) and print term at that index
    //Math.random() = # between 0 and 1 that's random
    //Math.floor() rounds it to get actual indexes
    index = Math.floor(Math.random() * 7);
    console.log(index);
    // changing the text itself of the button
    ouch.innerText = phrases[index];
})

// when "color" ID is clicked, change the heading color
// get elements - button and heading
const color = document.getElementById("color");
const h1 = document.querySelector("h1");

// want every other time clicked to change back the color - so will make the "clicked" turn on and off
let clicked = false;

// change background color using same arrow function type as above!
color.addEventListener("click", () => {
    console.log("color!");

    // at beginning, turns red - then "clicked" becomes true
    if (clicked === false) {
        console.log("false");
        h1.style.color = "red";
        clicked = true;
    }
    // if clicked again, color will go back to OG light blue, and "clicked" becomes false again
    else {
    console.log("true!");
    h1.style.color = "rgb(195, 212, 228)";
    clicked = false;
    }
})