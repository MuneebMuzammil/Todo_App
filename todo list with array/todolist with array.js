const inputbox = document.getElementById("show");
const list = document.getElementById("taskList");
const arr1 = [];
let currentarray = null;
let editmode = false;

function addTask() {
  if (inputbox.value === "") {
    alert("You must write something in the list Below");
  } else {
    if (currentarray != null && editmode) {
      update(currentarray);
    } else {
      arr1.push(inputbox.value);
    }
    load();
  }
}

function load() {
  list.innerHTML = "";
  inputbox.value = "";
  for (let i in arr1) {
    const li = `<li>${arr1[i]} 
    <div class="myclass">
    <span onclick="get(${i})">\u270E</span>
    <span onclick="del(${i})">\u00d7</span>
    <div>
                </li>`;
    list.innerHTML += li;
  }
}

function del(index) {
  arr1.splice(index, 1);
  load();
}

function get(index) {
  inputbox.value = arr1[index];
  inputbox.focus();
  currentarray = index;
  editmode = true;
}

function update(index) {
  arr1[index] = inputbox.value;
  editmode = false;
}





