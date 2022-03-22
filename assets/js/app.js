import React, {Component} from 'react';
import ReactDom from 'react-dom';
import TodoContextProvider from "./context/TodoContext";
import TodoTable from "./components/TodoTable";

class App extends Component {
    render() {
        return (
            <div>
                <TodoContextProvider>
                    <TodoTable/>
                </TodoContextProvider>
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));
