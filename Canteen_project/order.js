let orders = [];

function order(item, price) {
  orders.push({item: item, price: price});
  let ordersList = document.getElementById('orders');
  let listItem = document.createElement('li');
  listItem.innerText = item + ' - ₹' + price + ' (waiting)';
  ordersList.appendChild(listItem);
}
