//Fetch the items from the JSON file
function loadItems() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

//Update the list with the given items
function displayItems(items) {
  const container = document.querySelector(".items");
  //Document.querySelector()는 제공한 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 Element를 반환합니다.

  container.innerHTML = items.map((item) => createHTMLString(item)).join("");
}

// Create HTML list item from the given data item
function createHTMLString(item) {
  return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
  `;
}

// Handle button Click
function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  console.log(dataset);
  console.log(key);
  console.log(value);

  if (key == null || value == null) {
    return;
  }

  const filtered = items.filter((item) => item[key] === value);
  console.log(filtered);
  displayItems(filtered);
  // displayItems(items.filter((item) => item[key] === value));
  //filter : 배열에서 특정한 데이터만 추출해서 새로운 작은 단위의 배열을 만들 때 사용
}

/* Better Code
function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;
  if (key == null || value == null) {
    return;
  }
  updatesItems(items, key, value);
}

// Make the items matching {key: value} invisible.
function updatesItems(items, key, value) {
  items.forEach(item => {
    if (item.dataset[key] === value) {
      item.classList.remove('invisible');
    } else {
      item.classList.add('invisible');
    }
  });
}
*/

function setEventListeners(items) {
  const logo = document.querySelector(".logo");
  const buttons = document.querySelector(".buttons");
  logo.addEventListener("click", () => displayItems(items));
  buttons.addEventListener("click", (event) => onButtonClick(event, items));
}

//main
loadItems()
  .then((items) => {
    console.log(items);
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log("error"));
