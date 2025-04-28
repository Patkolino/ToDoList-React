import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';
import Container from './Container';
import { useState } from 'react';
import initialTasks from './Form/initialvalue';

const hideDone = false;

function App() {

const [tasks, setTasks] = useState(initialTasks);

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
                <Tasks tasks={tasks} hideDone={hideDone} />
            }
            extraHeaderContent={
                <Buttons tasks={tasks} hideDone={hideDone} />
            }
        />
    </Container>
);
}

export default App;