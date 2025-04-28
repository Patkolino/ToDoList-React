import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li key={task.id}
                className={`tasks__item${hideDone && task.done ? " tasks__item--hidden" : ""}`}
            >
                <button className={`tasks__button ${task.done ? "tasks__button--done" : ""}`}>
                    {task.done ? "✓" : ""}
                </button>
                <span className={`tasks__content ${task.done ? " tasks__content--done" : ""}`}>
                    {task.content}
                </span>
                <button onClick={() => removeTask(task.id)} className="tasks__button tasks__button--remove">🗑
                </button>
            </li >
        ))}
    </ul >
);

export default Tasks;