import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';
import Container from './Container';

const tasks = [
    { id: 1, content: "Wash dishes", done: true },
    { id: 2, content: "Clean kitchen", done: false },
];

const hideDoneTasks = false;

function App() {
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
                    <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
                }
                extraHeaderContent={
                    <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
                }
            />
        </Container>
    );
}

export default App;