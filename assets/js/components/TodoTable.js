import React, {Fragment, useContext, useState} from 'react';
import {TodoContext} from "../context/TodoContext";
import {IconButton, InputAdornment, Table, TableBody, TableCell, TableHead, TableRow, TextField} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import DeleteDialog from "./DeleteDialog";

function TodoTable() {
    const context = useContext(TodoContext);
    const [addTodo, setAddTodo] = useState('');
    const [editIsShow, setEditIsShow] = useState(false);
    const [editTodo, setEditTodo] = useState('');
    const [deleteConfirmationIsShow, setDeleteConfirmationIsShow] = useState(false);
    const [todoToBeDeleted, setTodoToBeDeleted] = useState(null);

    return (
        <Fragment>
            <form onSubmit={(event) => {
                context.createTodo(event, {name: addTodo})
            }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Task</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <TextField value={addTodo} onChange={(event) => {
                                    setAddTodo(event.target.value)
                                }} label="New Task" fullWidth={true}/>
                            </TableCell>
                            <TableCell align="right">
                                <IconButton type="submit">
                                    <AddIcon/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                        {context.todos.slice().reverse().map((todo, index) => (
                            <TableRow key={'todo' + index}>
                                <TableCell>
                                    {editIsShow === todo.id ?
                                        <TextField
                                            value={editTodo}
                                            onChange={(event) => {
                                                setEditTodo((event.target.value));
                                            }}
                                            InputProps={{
                                                endAdornment: <Fragment>
                                                    <IconButton onClick={() => {
                                                        setEditIsShow(false);
                                                    }}><CloseIcon/>
                                                    </IconButton>
                                                    <IconButton onClick={() => {
                                                        context.updateTodo({id: todo.id, name: editTodo});
                                                        setEditIsShow(false);
                                                    }}><DoneIcon/>
                                                    </IconButton>
                                                </Fragment>
                                            }}
                                        />
                                        : todo.name
                                    }
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton onClick={() => {
                                        setEditIsShow(todo.id);
                                        setEditTodo(todo.name)
                                    }}>
                                        <EditIcon/>
                                    </IconButton>
                                    <IconButton onClick={() => {
                                        setDeleteConfirmationIsShow(true);
                                        setTodoToBeDeleted(todo)
                                    }}>
                                        <DeleteIcon/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </form>

            {deleteConfirmationIsShow && (
                <DeleteDialog todo={todoToBeDeleted}
                              open={deleteConfirmationIsShow}
                              setDeleteConfirmationIsShow={setDeleteConfirmationIsShow}/>
            )}
        </Fragment>
    );
}

export default TodoTable;