import Item from "./Item";
import React from "react"
import { TodoDTO } from "../Models/TodoDTO";


export default class List extends React.Component<any> {
    constructor(props: any) {
        super(props);
        this.onRemoveHandler = this.onRemoveHandler.bind(this);
        this.onDoneHandler = this.onDoneHandler.bind(this);
    }

    onRemoveHandler(id: any) {
        this.props.onRemoveHandler(id);
    }

    onDoneHandler(id: any) {
        this.props.onDoneHandler(id);
    }

    render() {
        return (<div>{this.props.todos.map((item: TodoDTO) => {
            return <Item todo={item} key={item.id} onRemoveHandler={this.onRemoveHandler} onDoneHandler={this.onDoneHandler}></Item>;
        })}</div>);
    }
}