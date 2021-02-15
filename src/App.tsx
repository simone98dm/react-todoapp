import React from "react";
import Main from "./Components/Main";
import Info from "./Components/Info";
import './theme.scss';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./Components/Navbar";

interface MyThemeState {
  theme: string;
}

export default class App extends React.Component<any, MyThemeState> {
  theme: string = '';

  constructor(props: any) {
    super(props);

    this.onThemeChange = this.onThemeChange.bind(this);

    let localTheme = localStorage.getItem('theme');

    if (localTheme == null) {
      localTheme = 'light';
    }

    this.state = {
      theme: localTheme
    };
  }

  onThemeChange(theme: string) {
    this.setState({ theme: theme });
    localStorage.setItem('theme', theme);
  }

  render() {
    return (
      <div className={`App ${this.state.theme}`}>
        <Router>
          <Navbar onThemeChange={this.onThemeChange} currentTheme={this.state.theme}></Navbar>
          <Switch>
            <Route path="/about">
              <Info></Info>
            </Route>
            <Route path="/">
              <Main></Main>
            </Route>
          </Switch>
        </Router>
      </div>);
  }
}
