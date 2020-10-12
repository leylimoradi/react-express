import React, { Component } from 'react';
import Helmet from "react-helmet";
import { Switch, Route } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import styles from '../styles/styles.pcss';
import Main from '../components/main'


class Menu extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink exact to={'/'} activeClassName={styles.active}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={styles.active} to={'/about'}>About</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={styles.active} to={'/contact'}>Contact</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}


class Homepage extends Component {

    render() {
        return (
            <div className={styles.component}>
                <Helmet title="Welcome to our Homepage" />
                <Menu />
                <h1>Homepage</h1>
            </div>
        );
    }
}

class About extends Component {
    render() {
        return (
            <div>
                <Helmet title="About us" />
                <Menu />
                <h1>About</h1>
            </div>
        );
    }
}

class Contact extends Component {
    render() {
        return (
            <div>
                <Helmet title="Contact us" />
                <Menu />
                <Main />
                <h1>Contact</h1>
            </div>
        );
    }
}


export default class App extends Component {

    render() {
        return (
            <div>
                <Helmet
                    htmlAttributes={{ lang: "en", amp: undefined }} // amp takes no value
                    titleTemplate="%s | React App"
                    titleAttributes={{ itemprop: "name", lang: "en" }}
                    meta={[
                        { name: "description", content: "Server side rendering example" },
                        { name: "viewport", content: "width=device-width, initial-scale=1" },
                    ]}
                    link={[{ rel: "stylesheet", href: "/dist/styles.css" }]}
                />
                <Switch>
                    <Route exact path='/' component={Homepage} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                </Switch>
            </div>
        );
    }
}