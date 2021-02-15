import { TodoDTO } from '../Models/TodoDTO';
import React from "react";

export default class Item extends React.Component<any> {
    todo: TodoDTO;

    constructor(props: any) {
        super(props);
        this.todo = props.todo;
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
        return (<div className="card card-body shadow mb-3">
            <div className="row">
                <div className="col-12">
                    <div className="card-title">
                        <strong className="mr-2">{this.todo.text}</strong>&nbsp;
                        {this.todo.state ?
                            <span className="badge rounded-pill bg-success">
                                <i className="bi bi-check"></i>
                            </span> :
                            <span className="badge rounded-pill bg-warning text-dark">
                                <i className="bi bi-hourglass-split"></i>
                            </span>
                        }
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-danger btn-sm" onClick={() => this.onRemoveHandler(this.todo.id)}><i className="bi bi-trash"></i></button>&nbsp;
                    {!this.todo.state ? <button className="btn btn-success btn-sm" onClick={() => this.onDoneHandler(this.todo.id)}><i className="bi bi-check2-square"></i></button> : ""}
                </div>
            </div>
        </div>);
    }
}