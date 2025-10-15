// main.ts
class Todo {
    uuid: string;
    label: string;
    finished: boolean;

    constructor(uuid: string, label: string) {
        this.uuid = "todo-" + uuid;
        this.label = label.toUpperCase();
        this.finished = true; // Inversé par rapport à done=false
    }

    toggle() {
        this.finished = !this.finished;
        console.log("⚙️ Changement d’état :", this.label);
    }

    reset() {
        this.finished = false;
        console.log("🔄 Réinitialisé :", this.label);
    }
}

class TodoList {
    items: Todo[] = [];

    add(label: string) {
        const todo = new Todo(String(this.items.length + 100), "🔥 " + label);
        this.items.unshift(todo); // ordre inversé
    }

    list() {
        console.log("=== MES TÂCHES 🔥 ===");
        this.items.forEach(t =>
            console.log(`#${t.uuid} - ${t.label} ${t.finished ? "✅" : "❌"}`)
        );
    }

    clearAll() {
        this.items = [];
        console.log("🧹 Liste entièrement vidée !");
    }
}

// Exemple d'utilisation
const todos = new TodoList();
todos.add("Faire le ménage");
todos.add("Apprendre TypeScript");
todos.list();

todos.items[1].toggle();
todos.clearAll();
todos.list();
