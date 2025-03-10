interface Task {
    id:number;
    title: string;
    states:string;
    startDate:string;
    endDate:string;
   
}

// Function to get tasks from localStorage
function getTasks(): Task[] {
    return JSON.parse(localStorage.getItem("tasks") || "[]");
}

// Function to save tasks to localStorage
function saveTasks(tasks: Task[]): void {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(): void {
    const tasks = getTasks();
    const container = document.getElementById("taskContainer");

    if (!container) return;
    container.innerHTML = "";

    tasks.forEach(task => {
        const card = document.createElement("div");
        card.className = "card m-2";
        card.style.width = "18rem";
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">Task: ${task.title}</h5>
                <p class="card-text">States: ${task.states}</p>
                <p class="card-text">StartDate: ${task.startDate}</p>
                <p class="card-text">EndDate: ${task.endDate}</p>

            </div>
        `;
        container.appendChild(card);
    });
}


function addTask(event: Event): void {
    event.preventDefault();
  
// function getLastTaskId(): number {
//     return parseInt(localStorage.getItem("lastTaskId") || "0");
// }

 

    // let newId = getLastTaskId() + 1;
    const title = (document.getElementById("title") as HTMLInputElement).value.trim();
    const states = (document.getElementById("states") as HTMLInputElement).value.trim();
    const startDate = (document.getElementById("startDate") as HTMLInputElement).value;
    const endDate = (document.getElementById("endDate") as HTMLInputElement).value;
    
    
    const tasks = getTasks();
    let taskcount = tasks.length+1;
    let id = taskcount++;
    tasks.push({ id,title, states, startDate, endDate });
    saveTasks(tasks);
    // localStorage.setItem("lastTaskId", id.toString());
    loadTasks();
    (document.getElementById("taskForm") as HTMLFormElement).reset();
}


document.addEventListener("DOMContentLoaded", loadTasks);


document.getElementById("taskForm")?.addEventListener("submit", addTask);





