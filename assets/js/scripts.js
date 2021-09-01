let data = [];

function renderTodo() {

    document.querySelector('.todo').innerHTML = '';

    data.forEach(task => {

        let li = document.createElement('li');

        li.innerHTML = `
            <input type="checkbox" name="" id="task-${task.id}">
            <label for="task-${task.id}">${task.titulo}</label>
            <img src="./assets/images/trash.png" alt="apagar" class="button">
        `;

        li.querySelector('input').addEventListener('change', e => {

            if(e.target.checked) {
                li.classList.add('complete');
            }else {
                li.classList.remove('complete');
            }

        });
        
        // Evento remover 
        
        li.querySelector('.button').addEventListener('click', e => {
        
            let button = e.target;
            let li = button.parentNode;
            let input = li.querySelector('input');
            let id = input.id;
            let idArray = id.split('-');
            let todoId = idArray[1];
            let title = li.querySelector('label').innerText;
        
            if(confirm(`Deseja realmente excluir a tarefa ${title}?`)) {
                data = data.filter(task => task.id !== parseInt(todoId));
                renderTodo();

            }

           
        
        });

        document.querySelector('.todo').append(li);

    });

}


// Evento tecla 

document.querySelector('#new-task').addEventListener('keyup', e => {

    if(e.key === 'Enter') {

        data.push({
            id: data.length + 1,
            titulo: e.target.value
        });

        e.target.value = "";

        renderTodo();

    }

});

renderTodo();