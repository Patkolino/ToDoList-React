import { useState } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (newTaskContent.trim() === "") {
            setNewTaskContent("");
            return;
        }

        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                placeholder="What has to be done?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button>Add task</Button>
        </StyledForm>
    );
};

export default Form;