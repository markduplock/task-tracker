const inputField = document.getElementById("add-list-item");
const list = document.getElementById("list");
const addItemForm = document.getElementById("add-item-form");

function addItem() {
  const itemText = inputField.value.trim();

  if (!itemText) {
    alert("Input cannot be empty");
  } else {
    const newListItem = document.createElement("li");
    newListItem.textContent = itemText;
    list.appendChild(newListItem);
  }
  inputField.value = "";
  inputField.focus();
}

addItemForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addItem();
});
