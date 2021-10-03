//main
loadItems()
  .then((items) => {
    console.log(items);
    displayItems(items);
    //setEventListeners(items);
  })
  .catch(console.log("error"));
