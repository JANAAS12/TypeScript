var _a;
// Function to get tasks from localStorage
function getTasks() {
    return JSON.parse(localStorage.getItem("tasks") || "[]");
}
// Function to save tasks to localStorage
function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function loadTasks() {
    var tasks = getTasks();
    var container = document.getElementById("taskContainer");
    if (!container)
        return;
    container.innerHTML = "";
    tasks.forEach(function (task) {
        var card = document.createElement("div");
        card.className = "card m-2";
        card.style.width = "18rem";
        card.innerHTML = "\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">Task: ".concat(task.title, "</h5>\n                <p class=\"card-text\">States: ").concat(task.states, "</p>\n                <p class=\"card-text\">StartDate: ").concat(task.startDate, "</p>\n                <p class=\"card-text\">EndDate: ").concat(task.endDate, "</p>\n\n            </div>\n        ");
        container.appendChild(card);
    });
}
function addTask(event) {
    event.preventDefault();
    // function getLastTaskId(): number {
    //     return parseInt(localStorage.getItem("lastTaskId") || "0");
    // }
    // let newId = getLastTaskId() + 1;
    var title = document.getElementById("title").value.trim();
    var states = document.getElementById("states").value.trim();
    var startDate = document.getElementById("startDate").value;
    var endDate = document.getElementById("endDate").value;
    var tasks = getTasks();
    var taskcount = tasks.length + 1;
    var id = taskcount++;
    tasks.push({ id: id, title: title, states: states, startDate: startDate, endDate: endDate });
    saveTasks(tasks);
    // localStorage.setItem("lastTaskId", id.toString());
    loadTasks();
    document.getElementById("taskForm").reset();
}
document.addEventListener("DOMContentLoaded", loadTasks);
(_a = document.getElementById("taskForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", addTask);
