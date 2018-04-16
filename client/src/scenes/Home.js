import React from "react";

// import {
//     Link
// } from "react-router-dom";

export default class Home extends React.Component {

    state = {
        username: ""
    }

    render() {
        return (
            <div>
                <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Username..."
                    aria-label="Username..."
                    value={this.state.username}
                    onChange={(evt) => {
                        const username = evt.target.value;
                        this.setState({
                            username
                        })
                    }}
                    aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => {
                        this.props.history.push(`/rooms/username/${this.state.username}`);
                    }}>
                    Next
                    </button>
                </div>
                </div>
            </div>
        );
    }
}