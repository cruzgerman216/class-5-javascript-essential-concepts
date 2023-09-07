const desserts = ["ice cream", "brownies", "chocolate chip cookies", "pie"];

const listDessertsElement = document.getElementById("list-desserts");

for(let i = 0; i < desserts.length; i++){
  // Step 1: Create a list item element for the dessert
  const listItemElement = document.createElement("li");
  // Step 2: Add content to the element
  listItemElement.innerText = desserts[i];
  // Step 3: Append the element to the list of desserts element 
  listDessertsElement.appendChild(listItemElement);
}
