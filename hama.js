const grid = document.getElementById("grid")
const palette = document.getElementById("palette")

const rows = 29
const cols = 29
const colors = ["white", "lightyellow", "gold", "orange", "red", "pink", "purple", "rebeccapurple", "blue", "green", "lightseagreen", "brown", "gray", "black"]
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
    for (let i = 0; i < rows * cols; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.addEventListener("click", () => {
            dot.style.backgroundColor = selectedColor;
        });
        grid.appendChild(dot);
    }
    
    