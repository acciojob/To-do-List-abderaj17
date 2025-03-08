//your code here

const input = document.getElementById('newTodoInput');
const btn = document.getElementById('addTodoBtn');
const list = document.getElementById('todoList');



btn.addEventListener('click', ()=>{
	const valueF = input.value.trim();
	if(valueF == ''){
		alert("Please Enter a Valid Todo!")
		return;
	}
	const listItem = document.createElement('li');
	listItem.textContent = valueF;

	list.appendChild(listItem);
	input.value = ""; 
})