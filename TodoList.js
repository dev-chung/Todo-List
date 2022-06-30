let input = prompt("What would you like to do?")
const todos = ['play']
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('**********')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('**********')
    } else if (input === 'new') {
        const newTodo = prompt("Ok, what is the new todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)
    } else if (input === 'delect') {
        const index = parseInt(prompt('Ok, enter the index to delect:'));
        if (!Number.isNaN(index)) {
            const delected = todos.splice(index, 1);
            console.log(`Ok, deleted ${delected[0]}`)
        } else {
            console.log('Unknown index')
        }
    }
    input = prompt("What would you like to do?")
}
console.log("OK, Quit the APP")