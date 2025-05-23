import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';
import Container from './Container';
import { useState } from 'react';
import { useTasks } from './useTasks';

function App() {
    const [hideDone, setHideDone] = useState(false);

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
    };

    const {
        tasks,
        removeTask,
        toggleTaskDone,
        setAllDone,
        addNewTask,
    } = useTasks();

    return (
        <Container>
            <Header
                title="To do list"
            />
            <Section
                title="Add new task"
                container={<Form addNewTask={addNewTask} />}
            />
            <Section
                title="Task list"
                container={
                    <Tasks
                        tasks={tasks}
                        hideDone={hideDone}
                        removeTask={removeTask}
                        toggleTaskDone={toggleTaskDone}
                    />
                }
                extraHeaderContent={
                    <Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} setAllDone={setAllDone} />
                }
            />
        </Container>
    );
}

export default App;