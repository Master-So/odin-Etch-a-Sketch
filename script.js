

function fillContainer(size) {
    const container = document.querySelector(".container");
    container.setAttribute("class", "container");

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
            const mouseOverHandler = () => rowDiv.style.backgroundColor = "grey";
            const mouseOutHandler = () => rowDiv.style.backgroundColor = "white";
            rowDiv.addEventListener("mouseover", mouseOverHandler);
            rowDiv.addEventListener("mouseout", mouseOutHandler);

            rowDiv.addEventListener("click", () => {
                rowDiv.style.backgroundColor = "black";
                rowDiv.removeEventListener("mouseover", mouseOverHandler)
                rowDiv.removeEventListener("mouseout", mouseOutHandler)}
            );

        }
        container.appendChild(row);
    }
    
}

function getInput() {
    const button = document.querySelector("#sizeButton");
    button.addEventListener("click", () => {
        let size;
        while (true) {
            size = parseInt(prompt("Enter size: "));
            if (size <= 100 && size > 0) break;
        }
        document.querySelector(".container").innerHTML = "";  
        fillContainer(size);
    });
}

getInput();


