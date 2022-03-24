"use strict"




let tasks = [{name: "Wynieść śmieci", isFinished: true},{name: "Posprzątać w pokoju", isFinished: false}]


const toggleCard = () => {
    document.getElementById('tasks-list').innerHTML = "";
}



const loadTasks = () =>{
    let listOfTasks = document.getElementById("tasks-list");

    listOfTasks.innerHTML = "";
    let tasks = [{name: "Wynieść śmieci", isFinished: true},{name: "Posprzątać w pokoju", isFinished: false}]
    for (let task of tasks ){

        if( task.isFinished == true){
            listOfTasks.innerHTML += 
                '<div class="card mb-3 finish-card d-flex shadow-sm"><div class="card-body">' + task.name + '</div></div>';
        }
        else{
            listOfTasks.innerHTML += 
                '<div class="card mb-3 waiting-card d-flex shadow-sm"><div class="card-body">' + task.name + '</div></div>';
        }
    }
    
}


const addTask = () => {
    let inputText = document.getElementById('task-input').value;
    let listOfTasks = document.getElementById("tasks-list");
    listOfTasks.innerHTML += 
                '<div class="card mb-3 waiting-card d-flex shadow-sm"><div class="card-body">' + inputText + '</div></div>';
}