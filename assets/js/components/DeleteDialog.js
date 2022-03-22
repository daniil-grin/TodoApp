import React, {useContext} from 'react';
import {Button, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import Dialog from '@mui/material/Dialog';
import PropTypes from "prop-types";
import {TodoContext} from "../context/TodoContext";

function DeleteDialog(props) {
    const hide = () => {
        {
            props.setDeleteConfirmationIsShow(false)
        }
    }

    const context = useContext(TodoContext);
    return (
        <Dialog onClose={hide} fullWidth={true} maxWidth="sm" open={props.open}>
            <DialogTitle>Are you sure you wish to delete this to-do?</DialogTitle>
            <DialogContent>
                {props.todo.name}
            </DialogContent>
            <DialogActions>
                <Button onClick={hide}>Cancel</Button>
                <Button onClick={() => {
                    context.deleteTodo({id: props.todo.id, name: props.todo.name});
                    hide();
                }}>Delete</Button>
            </DialogActions>
        </Dialog>
    );
}

DeleteDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    setDeleteConfirmationIsShow: PropTypes.func,
    todo: PropTypes.object
}

export default DeleteDialog;