// ****** select items **********

const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editId = "";

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener("submit", addItem);
// clear list
clearBtn.addEventListener("click", removeItems);

// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    const element = document.createElement("article");
    // add class
    element.classList.add("grocery-item");
    // add id
    const attr = document.createAttribute("data-id");
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
      <!-- edit btn -->
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <!-- delete btn -->
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>`;

    // append child
    list.appendChild(element);
    // display alertf
    displayAlert("item added", "success");
    // show container
    container.classList.add("show-container");
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();
  } else if (value && editFlag) {
    console.log("Editing");
  } else {
    displayAlert("please enter the value", "danger");
  }
}

// Display Alert / Remove alert
function displayAlert(text, action) {
  alert.textContent = `${text}`;
  alert.classList.add(`alert-${action}`);

  // remove alert

  setTimeout(() => {
    alert.textContent = ``;
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// add item

// display alert

// clear items

// delete item

// edit item

// set backt to defaults
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editId = "";
  submitBtn.textContent = "submit";
}

function removeItems() {
  const items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) {
    items.forEach((item) =>{
      list.removeChild(item);
    })
  }
  container.classList.remove("show-container");
  displayAlert("Removed Everything", "danger");
  setBackToDefault();
  // localStorage.removeItem("list");
}
// ****** local storage **********
function addToLocalStorage(id, value) {
  console.log("added to the local storage");
}
// add to local storage

// SETUP LOCALSTORAGE.REMOVEITEM('LIST');

// ****** setup items **********
