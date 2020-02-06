// Preset values
const FROGS = 3;

// 1. Create for loop that makes use of FROGS to know how many lanes to create.

for (i = 0; i < FROGS; i++) {
    let laneCreate = document.createElement("li");
    document.querySelector("ol").appendChild(laneCreate);
    let spanCreate = document.createElement("span");
    laneCreate.appendChild(spanCreate);
    spanCreate.innerText = "Lane number " + i;
    laneCreate.id = `Lane-${i}`
}
//Keep taking Lane Create because if you put document.queryselector
// it will keep taking the 1st lane. 

//
    




    // 2. Create li    


    // 3. Create span and add it to the li

    

    // 4. Assign an id to each lane
