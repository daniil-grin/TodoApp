import React, {useContext} from 'react';
import {Button, Snackbar, SnackbarContent} from "@mui/material";
import {TodoContext} from "../context/TodoContext";

function checkLevel(level) {
    switch (level) {
        case 'success':
            return 'green';
        case 'error':
            return 'red';
        default:
            return 'white';
    }
}

function AppSnackbar() {
    const context = useContext(TodoContext);
    return (
        <Snackbar autoHideDuration={6000} open={context.message.text !== undefined}>
            {context.message.text && (
                <SnackbarContent style={{backgroundColor: checkLevel(context.message.level)}}
                                 message={context.message.text}
                                 action={[
                                     <Button
                                         onClick={() => context.setMessage({})}
                                         key='dismiss'
                                         color='inherit'
                                     >
                                         dismiss
                                     </Button>,
                                 ]}/>
            )}
        </Snackbar>
    );
}

export default AppSnackbar;