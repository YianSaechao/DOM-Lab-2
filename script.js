const shoppingList = document.getElementById('shopping-list');
const shoppingForm = document.getElementById('shopping-form');

shoppingForm.addEventListener('submit', (event)=>{
  event.preventDefault();

  console.log('Form submitted');


  const newItem = document.createElement('li');
  const itemInput = document.getElementById('item');
  newItem.textContent = itemInput.value;

  shoppingList.appendChild(newItem);

  itemInput.value = ' ';
});




