function addEntry() {
  const input = document.getElementById("entryInput");
  const entryText = input.value.trim();
  if (entryText !== "") {
    const entriesDiv = document.getElementById("entries");
    const newDiv = document.createElement("div");
    newDiv.innerText = entryText;
    entriesDiv.appendChild(newDiv);
    input.value = "";
  }
}
