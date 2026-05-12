const input=
document.getElementById("to-input");
const button=
document.getElementById("the-button");
const list=
document.getElementById("the-list");

function handleAdd() {
    if (input.value.trim() === "") return;
    addTodo(input.value);
    input.value = "";
}

input.addEventListener("keydown" ,
function(e) {
    if (e.key === "Enter") {
        handleAdd();
    }
    if (e.key === "Escape") {
        input.value = "";
    }
});

    
    
button.addEventListener("click" ,
handleAdd);


function addTodo(text) {
    const li = document.createElement("li");
    li.textContent = text;
    const deleteBtn = 
    document.createElement("button");
    deleteBtn.textContent = "削除";
    deleteBtn.addEventListener("click" ,
        function() { li.remove();

    });
    li.appendChild(deleteBtn);
    list.appendChild(li);
}


