import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';
import Container from './Container';
import { useState } from 'react';
import initialTasks from './Form/initialvalue';

function App() {
    const [tasks, setTasks] = useState(initialTasks);
    const [hideDone, setHideDone] = useState(false);

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
    };

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks=> tasks.map(task => {
            if(task.id ===id) {
                return {...task, done: !task.done};
            }

            return task;
        }));
    }

    return (
        <Container>
            <Header
                title="To do list"
            />
            <Section
                title="Add new task"
                container={<Form />}
            />
            <Section
                title="Task list"
                container={
                    <Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask} toggleTaskDone={toggleTaskDone} />
                }
                extraHeaderContent={
                    <Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} />
                }
            />
        </Container>
    );
}

export default App;