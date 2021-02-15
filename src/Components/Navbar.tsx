import React from "react"
import {
    Link
} from "react-router-dom";


export default class Navbar extends React.Component<any> {
    constructor(props: any) {
        super(props);
        this.onThemeChange = this.onThemeChange.bind(this);
    }

    onThemeChange() {
        let theme = 'light';
        if (this.props.currentTheme === 'light') {
            theme = 'dark';
        }
        this.props.onThemeChange(theme);
    }

    render() {
        return (<nav className="nav">
            <Link to="/" className="nav-link" aria-current="page">Home</Link>
            <Link to="/about" className="nav-link" aria-current="page">About</Link>
            <span onClick={this.onThemeChange} className="nav-link">
                {this.props.currentTheme === 'light' ?
                    <i className="bi bi-brightness-high-fill"></i> :
                    <i className="bi bi-moon"></i>}
                &nbsp;Change theme
            </span>
        </nav>);
    }
}