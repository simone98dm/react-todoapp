import React from "react"

export default class Header extends React.Component<any> {
    
    render() {
        return (
            <div className="m-2">
                {this.props.todoCount > 0 ? <h3>You have {this.props.todoCount} left</h3> : <h3>You have completed all your todo!</h3>}
            </div>
        )
    }
}