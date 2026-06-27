const inputField = document.getElementById("add-list-item");
const list = document.getElementById("list");
const addItemForm = document.getElementById("add-item-form");

function addItem() {
  const itemText = inputField.value.trim();

  if (!itemText) {
    alert("Input cannot be empty");
  } else {
    const newCheckBox = document.createElement("input");
    const newListItem = document.createElement("li");
    const newDeleteButton = document.createElement("button");

    newCheckBox.type = "checkbox";

    newDeleteButton.textContent = "Delete Task";

    list.append(newListItem);
    newListItem.append(newCheckBox);
    newListItem.append(itemText);
    newListItem.append(newDeleteButton);
    checkItem(newCheckBox, itemText);
    deleteItem(newDeleteButton, newListItem);
  }
  inputField.value = "";
  inputField.focus();
}

function checkItem(checkBox, itemText) {
  checkBox.addEventListener("change", (event) => {
    if (event.target.checked) {
      itemText.style.textDecoration = "line-through";
    } else {
      itemText.style.textDecoration = "none";
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
