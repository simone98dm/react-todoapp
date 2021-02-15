import React from "react"
import { TodoDTO } from "../Models/TodoDTO";

interface ITodoState {
    todoValue: string;
}

export default class Form extends React.Component<any, ITodoState> {
    constructor(props: any) {
        super(props);

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);

        this.state  = { todoValue: '' };
    }

    onSubmitHandler(e: any) {
        e.preventDefault();
        if (this.state.todoValue === '') {
            return;
        }
        const todoItem: TodoDTO = {
            state: false,
            text: this.state.todoValue
        };
        this.props.onSubmitHandler(todoItem);

        this.setState({ todoValue: '' });
    }

    onChangeHandler(event: any) {
        this.setState({ todoValue: event.target.value });
    }

    render() {
        return (<div className="m-4">
            <form onSubmit={(e) => this.onSubmitHandler(e)}>
                <h4>Add new todo</h4>
                <input className="form-control mb-3" maxLength={100} onChange={(e) => this.onChangeHandler(e)} value={this.state.todoValue} />
                <button type="submit" className="btn btn-primary btn-sm"><i className="bi bi-plus-circle"></i>&nbsp;Add</button>
            </form>
        </div>)
    }
}