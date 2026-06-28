const inputField = document.getElementById("add-list-item");
const list = document.getElementById("list");
const addItemForm = document.getElementById("add-item-form");
const deleteSelection = document.getElementById("delete-selected-button");
const selectionCount = document.getElementById("selection-count");
let selectionCountContent = 0;
selectionCount.textContent = selectionCountContent;

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
    checkItem(newCheckBox);
    deleteItem(newDeleteButton, newListItem, newCheckBox);
  }
  inputField.value = "";
  inputField.focus();
}

function checkItem(checkBox) {
  checkBox.addEventListener("change", (event) => {
    if (checkBox.checked) {
      selectionCountContent++;
      if (selectionCountContent > 0) {
        bulkDeleteButtonDisabled(false);
      }
    } else {
      selectionCountContent--;
      if (selectionCountContent < 1) {
        bulkDeleteButtonDisabled(true);
      }
    }
    selectionCount.textContent = selectionCountContent;
    // ** DEBUG **
    //console.log(selectionCountText);
  });
}

function deleteItem(deleteButton, listItem, checkbox) {
  deleteButton.addEventListener("click", () => {
    if (checkbox.checked) {
      selectionCountContent--;
      if (selectionCountContent < 1) {
        bulkDeleteButtonDisabled(true);
      }
      selectionCount.textContent = selectionCountContent;
    }
    listItem.remove();
    // ** DEBUG **
    //console.log(selectionCountText);
  });
}

function bulkDeleteButtonDisabled(state) {
  deleteSelection.disabled = state;
}

addItemForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addItem();
});

deleteSelection.addEventListener("click", (event) => {
  event.preventDefault();
  //deleteSelection();
});
