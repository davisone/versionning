// main.ts
class Todo {
    id: number;
    title: string;
    done: boolean;

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this.done = false;
    }

    toggle() {
        this.done = !this.done;
    }
}

class TodoList {
    todos: Todo[] = [];

    add(title: string) {
        const todo = new Todo(this.todos.length + 1, title);
        this.todos.push(todo);
    }

    list() {
        console.log("Liste des tâches :");
        this.todos.forEach(t =>
            console.log(`${t.id}. ${t.title} ${t.done ? "✅" : "❌"}`)
        );
    }
}

// Exemple d'utilisation
const list = new TodoList();
list.add("Apprendre TypeScript");
list.add("Faire un café");
list.list();

list.todos[0].toggle();
list.list();