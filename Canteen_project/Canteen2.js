var orderList = document.getElementById("order-list");
var waitingTime = document.getElementById("waiting-time");

function order(item, price) {
  var listItem = document.createElement("li");
  var itemName = document.createElement("span");
  var itemPrice = document.createElement("span");
  var deleteButton = document.createElement("button");

  itemName.innerText = item;
  itemPrice.innerText = price;
  deleteButton.innerText = "Delete";
  deleteButton.onclick = function() {
    orderList.removeChild(listItem);
    updateWaitingTime();
  };

  listItem.appendChild(itemName);
  listItem.appendChild(itemPrice);
  listItem.appendChild(deleteButton);
  orderList.appendChild(listItem);

  updateWaitingTime();
}

function updateWaitingTime() {
  var orderList = document.getElementById("order-list");
  var numberOfOrders = orderList.childElementCount;
  var waitingTimeInMinutes = numberOfOrders * 10;
  waitingTime.innerText = "Ejstimated waiting time: " + waitingTimeInMinutes + " minutes";
}