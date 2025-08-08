

function fillContainer(size) {
    const container = document.querySelector(".container");

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        console.log(i);
        for (let j = 0; j < size; j++) {
            const rowDiv = document.createElement("div");
            row.appendChild(rowDiv);
            //rowDiv.textContent = "Hi!"
            console.log("j: " + j);
            rowDiv.setAttribute("class", "rowDiv");
        }
        container.appendChild(row);
    }
    
}

fillContainer(16);