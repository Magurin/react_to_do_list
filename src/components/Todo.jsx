import AddFormTask from "./AddFormTask"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

const Todo = () => {
  const tasks = [
    { id: 'task-1', title: 'Купить молоко', isDone: false },
    { id: 'task-2', title: 'Купить', isDone: false },
    { id: 'task-3', title: 'молоко', isDone: true },
    { id: 'task-4', title: '123', isDone: false },
  ]

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddFormTask />
      <SearchTaskForm />
      <TodoInfo 
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
      />
      <TodoList tasks={tasks}/>
    </div>
  )
}

export default Todo
