interface TodoItem {
    title: string,
    description: string,
    todoId: string,
    isDone: boolean,
    _id?: string,
}

interface ListItem {
    title: string,
    description: string,
    itemId: string,
    owner: string,
    isDone: boolean,
    _id?: string,
}

interface Todos extends Array<TodoItem>{}
interface Lists extends Array<ListItem>{}

export type { TodoItem, ListItem, Todos, Lists };