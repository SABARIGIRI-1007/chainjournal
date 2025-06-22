document.querySelector("button").addEventListener("click", () => {
  const input = document.getElementById("entryInput");
  const entryText = input.value.trim();
  
  if (entryText !== "") {
    const entriesDiv = document.getElementById("entries");

    const entryDiv = document.createElement("div");
    entryDiv.className = "entry";

    const span = document.createElement("span");
    span.textContent = entryText;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "❌";
    deleteBtn.onclick = () => entryDiv.remove();

    entryDiv.appendChild(span);
    entryDiv.appendChild(deleteBtn);
    entriesDiv.appendChild(entryDiv);

    input.value = "";
  }
});
