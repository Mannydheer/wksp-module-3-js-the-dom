// Preset values
const FROGS = 3;

// 1. Create for loop that makes use of FROGS to know how many lanes to create.
let racers = [];

for (count = 0; count < FROGS; count++) {
    racers.push(frogStable[count]);
}


for (i = 0; i < FROGS; i++) {
    let laneCreate = document.createElement("li");
    document.querySelector("ol").appendChild(laneCreate);
    let spanCreate = document.createElement("span");
    laneCreate.appendChild(spanCreate);
    laneCreate.id = `Lane-${i}`
    spanCreate.id = `${racers[i].name}track`

    // 
    spanCreate.innerText = racers[i].name + " " + racers[i].number;
    spanCreate.style.backgroundColor = racers[i].color;

    spanCreate.style.color = "white";

    //add class of frog to each. 
    laneCreate.classList.add("frog");

    //set progress to 0
    racers[i].progress = 0;




}


// ### Exercise 2.3 -
// ------------------------------------------------------

//2.4

const track = document.getElementById("track");
// gives the ol tag block element called track a width based on pixels. 
const trackFull = track.offsetWidth;
// this will give you the hop length. 
const lengthHop = (Math.floor(Math.random() * 100) / trackFull * 100);


//Place before the function

//calls and passes it each reacher. - review this. 
racers.forEach(function (eachRacer) {

    let progressCheck = document.createElement('div');
    document.querySelector("div").appendChild(progressCheck);
    progressCheck.id = `${eachRacer.name}progress`;
    progressCheck.classList.add("progressStyler");

    //start hop after. 
    hop(eachRacer)



})

//ranking to display the winner. 
let ranking = [];

function hop(tempRacer) {

    //once it passes, it takes the progress from the object of the racer currently taken. 
    let progress = tempRacer.progress;


    let storeRacer = document.getElementById(`${tempRacer.name}track`);
    //what we need to do to change the progress.
    let timer = setInterval(function () {
        //check progress.
        if (progress < 100) {
            progress += (Math.round(Math.random() * 100) / trackFull * 100);
            storeRacer.style.left = `${progress}%`;

            progressCheck = document.getElementById(`${tempRacer.name}progress`);
            progressCheck.innerText = "Current Progress # of " + tempRacer.name +  ": " + progress;

        } else if (progress >= 100) {
            ranking.push(tempRacer.name);
            clearInterval(timer);
            console.log(ranking);
            
            let racerone = document.getElementById('racerRank0')
            racerone.innerText = `${ranking[0]} is the WINNER`;

            let racertwo = document.getElementById('racerRank1')
            racertwo.innerText = `${ranking[1]} is in SECOND place` ;

            let racerthree = document.getElementById('racerRank2')
            racerthree.innerText = `${ranking[2]} is in THIRD place`;
            
            
            //    
        }

    }, 300);

    //    
}



// RANKING
//create 3 divs with id for each progress. 
for (i = 0; i < 3; i++) {
    let winRanker = document.createElement('div');
    document.getElementById('ranking').appendChild(winRanker);
    winRanker.id = `racerRank${i}`;

}









//styling for the frog. 
//each lane
let trackStyle = document.getElementById('Lane-0')


//styling the frog.