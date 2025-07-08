const grid = document.getElementById("grid")
const palette = document.getElementById("palette")
const rows = 29
const cols = 29
const colors = ["white", "#fdffcc", "gold", "#f6ff39", "#ceff5c","#64fc35", "#17ab4b", "#0d5b28", "#139bbd", "#52c0ff", "#0026ff", "#0e009c", 
    "#6c41ff", "#ea25fa", "#f9abff", "#ebe4d1", "#ffcd00", "#ff0000", "#995843","#9d6228", "#573c22","#888888", "#575757", "#000000" ]
let selectedColor = colors[0];

const undoStack = [];
for (let i = 0; i < rows * cols; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");

    dot.addEventListener("click", () => {
        const oldColor = dot.style.backgroundColor;
        const newColor = selectedColor;

        undoStack.push({
            dot: dot,
            previousColor: oldColor
        });

        dot.style.backgroundColor = newColor;
    });

    grid.appendChild(dot);
}

document.getElementById("undoButton").addEventListener("click", () => {
    if (undoStack.length > 0) {
        const lastAction = undoStack.pop();
        lastAction.dot.style.backgroundColor = lastAction.previousColor;
    }
});

    colors.forEach(color => {
        const colorDiv = document.createElement("div");
        colorDiv.classList.add("color")
        colorDiv.style.backgroundColor = color;

        if (color === selectedColor) {
            colorDiv.classList.add("selected");
        }

        colorDiv.addEventListener("click", () => {
            selectedColor = color;
            document.querySelectorAll(".color").forEach(c => c.classList.remove("selected"));
            colorDiv.classList.add("selected");
        });
        palette.appendChild(colorDiv);
    });
    
    
    
     