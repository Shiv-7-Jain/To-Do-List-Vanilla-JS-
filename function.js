
// Storing the tasks div to add new tasks in it .
const tasks = document.getElementById('Tasks')

// Storing add Task Button
var addTask = document.getElementById('addTask');


var array_tasks = ['Complete Front End Projects','Start React'];

function checkNewTask() {
    // Looping thourgh each checked buttons and setting up event listeners
        let count = 0;
        let id_string = 'checkbox' + (array_tasks.length-1);
        let button_id = document.getElementById(id_string);
        button_id.addEventListener('click',function(){
            if(count % 2 == 0){
                // Changing the icon is the user clicks on the check
                button_id.getElementsByTagName('ion-icon')[0].setAttribute('name','checkmark-done-circle-outline');
                // Handling Animations
                button_id.parentElement.classList.remove('animate__animated');
                button_id.parentElement.classList.remove('animate__headShake');
                button_id.parentElement.classList.add('animate__animated');
                button_id.parentElement.classList.add('animate__flash');
            }else{
                // setting the previous icon if the user clicks on the ion again.
                button_id.getElementsByTagName('ion-icon')[0].setAttribute('name','ellipse-outline');
                // Handling Animations
                button_id.parentElement.classList.remove('animate__animated');
                button_id.parentElement.classList.remove('animate__flash');
                button_id.parentElement.classList.add('animate__animated');
                button_id.parentElement.classList.add('animate__headShake');
            }
            // Toggling the class which makes the text decoration line-through whenever checkbox is checked
            button_id.parentElement.classList.toggle('design');
            count++;
        });
}

function deleteNewTask() {
    // Looping thourgh each checked buttons and setting up event listener
        let id_string = 'delete' + (array_tasks.length-1);
        let button_id = document.getElementById(id_string);
        button_id.addEventListener('click',function(){
            button_id.parentElement.classList.add('animate__backOutDown');
        setTimeout(() => {
            button_id.parentElement.remove();
        }, 500);
        });
}
// Adding a new Task to the list
function add_new_task(){
    // Getting the value of the input to push it in the array_tasks 
    var new_task = document.getElementById('newTask');
    array_tasks.push(new_task.value);
    new_task.value = '';
    // Function to display the newest task to the screen
    displayNewTasks();
    checkNewTask();
    deleteNewTask();
}

// Event Listener to add New Tasks 
addTask.addEventListener('click',add_new_task);


// Display The Tasks 
for(let i = 0;i < array_tasks.length;i++){

    // Making a Task
    const new_task = document.createElement('div');
    new_task.classList.add('task');

    // Making the content div
    const content = document.createElement('div');
    content.classList.add('content');

    // Creating the checkbox icon and placing it inside a button
    const icon = document.createElement('ion-icon');
    icon.setAttribute('name','ellipse-outline');
    
    const check_button = document.createElement('button');
    check_button.appendChild(icon);
    // Setting the id of the checkbox
    check_button.setAttribute('id','checkbox' + i);

    check_button.appendChild(icon);

    // Setting the value of the new task to display 
    const task = document.createElement('p');
    task.innerHTML = array_tasks[i];

    // Adding the elements to the content section 
    content.appendChild(check_button);
    content.appendChild(task);
    new_task.appendChild(content);

    // aking the delete button and adding it to the task div
    const delete_task = document.createElement('ion-icon');
    delete_task.setAttribute('name','close-circle');
    
    const delete_button = document.createElement('button');
    delete_button.appendChild(delete_task);
    delete_button.setAttribute('id','delete' + i);
    delete_button.setAttribute('class','delete');

    delete_button.appendChild(delete_task);

    new_task.appendChild(delete_button);
    new_task.classList.add('animate__animated');
    new_task.classList.add('animate__backInDown');

    // Adding the task to the tasks .
    tasks.appendChild(new_task);
}

function displayNewTasks(){
    const new_task = document.createElement('div');
    new_task.classList.add('task');

    const content = document.createElement('div');
    content.classList.add('content');

    const icon = document.createElement('ion-icon');
    icon.setAttribute('name','ellipse-outline');
    
    const check_button = document.createElement('button');
    check_button.appendChild(icon);
    check_button.setAttribute('id','checkbox' + (array_tasks.length - 1));

    check_button.appendChild(icon)

    const task = document.createElement('p');
    task.innerHTML = array_tasks[array_tasks.length - 1];

    content.appendChild(check_button);
    content.appendChild(task);
    new_task.appendChild(content);

    const delete_task = document.createElement('ion-icon');
    delete_task.setAttribute('name','close-circle');
    
    const delete_button = document.createElement('button');
    delete_button.appendChild(delete_task);
    delete_button.setAttribute('id','delete' + (array_tasks.length - 1));
    delete_button.setAttribute('class','delete');

    delete_button.appendChild(delete_task)

    new_task.appendChild(delete_button);
    new_task.classList.add('animate__animated');
    new_task.classList.add('animate__backInDown');

    tasks.appendChild(new_task);
}

// Checking the task done

// Looping thourgh each checked buttons and setting up event listeners for checkbox
for(let i = 0;i < 2;i++){
    let count = 0;
    let id_string = 'checkbox' + i;
    let button_id = document.getElementById(id_string);
    button_id.addEventListener('click',function(){
        if(count % 2 == 0){
            // Changing the icon is the user clicks on the checkbox
            button_id.getElementsByTagName('ion-icon')[0].setAttribute('name','checkmark-done-circle-outline');
            // Handling Animations
            button_id.parentElement.classList.remove('animate__animated');
            button_id.parentElement.classList.remove('animate__headShake');
            button_id.parentElement.classList.add('animate__animated');
            button_id.parentElement.classList.add('animate__flash');
        }else{
            // setting the previous icon if the user clicks on the ion again.
            button_id.getElementsByTagName('ion-icon')[0].setAttribute('name','ellipse-outline');
            // Handling Animations
            button_id.parentElement.classList.remove('animate__animated');
            button_id.parentElement.classList.remove('animate__flash');
            button_id.parentElement.classList.add('animate__animated');
            button_id.parentElement.classList.add('animate__headShake');
        }
        // Toggling the class which makes the text decoration line-through whenever checkbox is checked
        button_id.parentElement.classList.toggle('design');
        count++;
    });
}

// Looping thourgh each checked buttons and setting up event listeners for delete task
for(let i = 0;i < array_tasks.length;i++){
    let id_string = 'delete' + i;
    let button_id = document.getElementById(id_string);
    button_id.addEventListener('click',function(){
        button_id.parentElement.classList.add('animate__backOutDown');
        setTimeout(() => {
            button_id.parentElement.remove();
        }, 500);
    });
}