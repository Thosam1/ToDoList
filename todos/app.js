const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const search = document.querySelector('.search input');

const generateTemplate = toDo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${toDo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHTML+= html;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const toDo = addForm.add.value.trim();
    if(toDo.length > 0){
        generateTemplate(toDo);
        addForm.reset();
    }
})

// deleting toDos
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){ // checking if we clicked on the delete icon
        e.target.parentElement.remove(); // removing the li tag
    }
});


const filterToDos = (term) => {
    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term)) // if contains the term, then it will take it out from the array
        .forEach(todo => todo.classList.add('filtered')); // so we can hide
    
    Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term)) // if it does not contain the term, then it will take it out from the array
        .forEach(todo => todo.classList.remove('filtered')); // so we can show the ones having the term in them
};

// keyup event
search.addEventListener('keyup', () =>{
    const term = search.value.trim().toLowerCase();
    filterToDos(term);
});