// Preset values
const FROGS = 3;

// 1. Create for loop that makes use of FROGS to know how many lanes to create.
let racers = [];

for (count = 0; count < FROGS; count++) {
    racers.push(frogStable[count]);
}
console.log(racers);

for (i = 0; i < FROGS; i++) {
    let laneCreate = document.createElement("li");
    document.querySelector("ol").appendChild(laneCreate);
    let spanCreate = document.createElement("span");
    laneCreate.appendChild(spanCreate);
    laneCreate.id = `Lane-${i}`

    // 
    spanCreate.innerText = racers[i].name + " " + racers[i].number;
    spanCreate.style.backgroundColor = racers[i].color;
    spanCreate.style.color = "white";

    //add class of frog to each. 
    laneCreate.classList.add("frog");

    //set progress to 0
    racers[i].progress = 0;

    //progress on the screen
    let progressCheck = document.createElement('div');
    document.querySelector("div").appendChild(progressCheck);
    progressCheck.innerText= "Current Progress # " + racers[i].progress;
    progressCheck.classList.add("progressStyler");

}


// ### Exercise 2.3 -


console.log(racers);

// ------------------------------------------------------

