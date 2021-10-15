document.getElementById('addtask_btn').addEventListener('click', print);

function print() {

    //To create a new div and add value from text input field
    let text = document.getElementById('task_box').value

    let new_div = document.createElement('div')
    let new_element = document.createElement('p');
    let attribute = document.createTextNode(text);

    new_div.id = "new_task"

    new_element.appendChild(attribute);
    new_div.appendChild(new_element)
    document.getElementById("task").appendChild(new_div)

    //To create a new button
    let comp_btn = document.createElement('button');
    comp_btn.innerHTML = "Completed"

    comp_btn.id = "complete_btn"
    document.getElementById("task").appendChild(comp_btn)

    //Function to delete the task_display_section
    document.getElementById('complete_btn').addEventListener('click', delete_btn);

    function delete_btn() {
        var deleted = document.getElementById("task")
        deleted.remove();
    }

};


