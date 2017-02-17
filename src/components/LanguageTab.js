import React, { Component } from 'react';
import '../styles/LanguageTab.css';

export default class LanguageTab extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onTabClick(
            this.props.language
        );
    }
    render() {
        var language = this.props.language;
        return (
            <a className="button" onClick={this.handleClick}>{language}</a>
        );
    }
}
