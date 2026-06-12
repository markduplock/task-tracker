const inputField = document.getElementById("add-list-item");
const list = document.getElementById("list");
const addItemForm = document.getElementById("add-item-form");

function addItem() {
  const itemText = inputField.value.trim();

  if (!itemText) {
    alert("Input cannot be empty");
  } else {
    const newListItem = document.createElement("li");
    const newCheckBox = document.createElement("input");
    const newDeleteButton = document.createElement("button");

    newCheckBox.type = "checkbox";
    newListItem.textContent = itemText;
    newDeleteButton.textContent = "Delete Task";

    list.appendChild(newListItem);
    newListItem.appendChild(newCheckBox);
    newListItem.appendChild(newDeleteButton);
    checkItem(newCheckBox, newListItem);
    deleteItem(newDeleteButton, newListItem);
  }
  inputField.value = "";
  inputField.focus();
}

function checkItem(newCheckBox, newListItem) {
  newCheckBox.addEventListener("change", (event) => {
    if (event.target.checked) {
      newListItem.style.textDecoration = "line-through";
    } else {
      newListItem.style.textDecoration = "none";
    }
  });
}

function deleteItem(newDeleteButton, newListItem) {
  newDeleteButton.addEventListener("click", () => {
    newListItem.remove();
  });
}

addItemForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addItem();
});
