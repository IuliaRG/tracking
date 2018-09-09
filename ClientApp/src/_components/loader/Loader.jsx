import React, { Component } from 'react';
import './Loader.scss'

class Loader extends React.Component {
    render() {
        const small = this.props.small;
        if (!small) {
            return (
                <div className="loader-container">
                    <div className="loader">Loading...</div>
                </div>
            )
        }
        else {
            return (
                <div className="loader-container-small">
                    <div className="loader-small">Loading...</div>
                </div>
            )
        }
    }
}

export default Loader;