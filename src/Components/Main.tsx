import List from "./List"
import Header from "./Header"
import Form from "./Form"
import { TodoDTO } from "../Models/TodoDTO"
import React from "react";
import { MyState } from "../Models/MyStateDTO";

export default class Main extends React.Component<any, MyState> {
    list: TodoDTO[] = [
        { text: "First todo", id: 1, state: false },
        { text: "Second todo", id: 2, state: false },
        { text: "Third todo", id: 3, state: false }
    ];

    constructor(props: any) {
        super(props);

        this.onRemoveHandler = this.onRemoveHandler.bind(this);
        this.onDoneHandler = this.onDoneHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);

        let localTheme = localStorage.getItem('theme');

        if (localTheme == null) {
            localTheme = 'light';
        }

        this.state = {
            list: this.list,
            theme: localTheme
        };
    }

    onSubmitHandler(todo: TodoDTO) {
        const newList = this.state.list;
        const id = this.state.list.length + 1;
        const newTodo = { ...todo, id }
        newList.push(newTodo);
        this.setState({ list: newList });
    }

    onRemoveHandler(id: any) {
        const newList = this.state.list.filter(x => x.id !== id);
        this.setState({ list: newList });
    }

    onDoneHandler(id: any) {
        const newList = this.state.list.map((item: TodoDTO) => {
            if (item.id === id) {
                item.state = true;
            }
            return item;
        });
        this.setState({ list: newList })
    }

    render() {
        return (
            <div className="container">
                <h1 className="m-2">Todo list</h1>
                <Form onSubmitHandler={this.onSubmitHandler}></Form>
                <Header todoCount={this.state.list.filter(x => x.state !== true).length}></Header>
                <List todos={this.state.list} onRemoveHandler={this.onRemoveHandler} onDoneHandler={this.onDoneHandler}></List>
            </div>);
    }
}