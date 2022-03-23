import React, {Component} from 'react';
import ReactDom from 'react-dom';
import TodoContextProvider from "./context/TodoContext";
import TodoTable from "./components/TodoTable";
import AppSnackBar from "./components/AppSnackBar";
import {CssBaseline} from "@mui/material";

class App extends Component {
    render() {
        return (
            <div>
                <TodoContextProvider>
                    <CssBaseline>
                        <TodoTable/>
                        <AppSnackBar/>
                    </CssBaseline>
                </TodoContextProvider>
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));
