const inputField = document.getElementById("add-list-item");
const list = document.getElementById("list");
const addItemForm = document.getElementById("add-item-form");
const deleteSection = document.getElementById("delete-selected-button");
let selectionCount = 0;

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
    checkItem(newCheckBox, newListItem);
    deleteItem(newDeleteButton, newListItem);
  }
  inputField.value = "";
  inputField.focus();
}

function checkItem(checkBox, listItem) {
  checkBox.addEventListener("change", (event) => {
    if (checkBox.checked) {
      selectionCount++;
      if (selectionCount > 0) {
        deleteSection.disabled = false;
      }
    } else {
      selectionCount--;
      if (selectionCount < 1) {
        deleteSection.disabled = true;
      }
    }
    console.log(selectionCount);
  });
}

function deleteItem(newDeleteButton, newListItem) {
  newDeleteButton.addEventListener("click", () => {
    newListItem.remove();
  });
}

function deleteSelection() {}

addItemForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addItem();
});

deleteSection.addEventListener("click", (event) => {
  event.preventDefault();
  deleteSelection();
});
