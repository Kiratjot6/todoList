const input = document.getElementById('taskinput');
const addBtn = document.getElementById('addbtn');
const taskList = document.getElementById('taskList');

function addTask(){
    const task=input.value.trim();
    if(task===''){
        alert("Please enter a task");
    }
    else{
        const li=document.createElement('li');

        const checkbox = document.createElement('input'); 
        checkbox.type = 'checkbox';
        checkbox.style.marginRight = '10px';
    

        const taskText = document.createElement('span'); 
        taskText.textContent = task;

        const dateTime = document.createElement('span');
        const now = new Date();
        dateTime.textContent = " (" + now.toLocaleString() + ")";
        dateTime.className = "date-time";

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.style.marginLeft = '10px';

        li.appendChild(checkbox); 
        li.appendChild(taskText); 
        li.appendChild(dateTime);
        li.appendChild(deleteBtn);


        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        taskList.appendChild(li);
        input.value='';
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                li.style.textDecoration = 'line-through';
                li.style.color = '#888';
            } else {
                li.style.textDecoration = 'none';
                li.style.color = '#000';
            }
        });
    }
    
}
addBtn.addEventListener('click', addTask);
input.addEventListener('keypress', function(event){
    if(event.key==='Enter'){
        addTask();
    }
});
