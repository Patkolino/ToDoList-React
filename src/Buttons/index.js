import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button className="buttons__button">
                    {hideDoneTasks ? "Show" : "Hide"} done tasks
                </button>

                <button
                    className="buttons__button"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Mark all as done
                </button>
            </>
        )}
    </div>
);

export default Buttons;