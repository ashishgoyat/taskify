let draggedcard = null;
let cardnum = 1;
const btn = document.querySelector('button');
const todos = document.getElementById('todos');
const progress = document.getElementById('progress');
const review = document.getElementById('review');
const completed = document.getElementById('completed');
const dropzones = [todos,progress,review,completed];


btn.addEventListener('click', () => {
    const card = document.createElement('div');
    const heading = document.createElement('h4');
    const description = document.createElement('div');
    const urgency = document.createElement('span');
    const datecreated = document.createElement('span');
    const headingdata = prompt("give the heading for the todo");
    const descriptiondata = prompt("give the description for the todo");
    const urgencydata = prompt("Choose the urgerncy of the todo among 'low' 'high' 'urgent' otherwise low will be choosen");
    const date = new Date();
    const datecreateddata = date.toLocaleDateString("en-IN", {day:"numeric", month:"short", year:"numeric"});
    
    card.draggable = true;

    card.addEventListener('dragstart',() => {
        draggedcard = card;
    })
    card.addEventListener('dragend', () => {
        draggedcard = null;
    })

    heading.textContent = headingdata;
    description.textContent = descriptiondata;
    if(urgencydata === "low" || urgencydata === "high" || urgencydata === "urgent") {
        urgency.textContent = urgencydata;
    }
    else{
        urgency.textContent = "low";
    }
    urgency.classList.add(urgency.textContent);
    datecreated.textContent = datecreateddata;
    card.id = cardnum;
    cardnum++;

    card.appendChild(heading);
    card.appendChild(description);
    card.appendChild(urgency);
    card.appendChild(datecreated);
    todos.appendChild(card);
})



dropzones.forEach(element => {
    element.addEventListener('dragover',(e) => {
        e.preventDefault();
    })
    element.addEventListener('drop',(e) => {
        e.preventDefault();
        if(draggedcard !== null){
            element.appendChild(draggedcard);
        }
    })
});
