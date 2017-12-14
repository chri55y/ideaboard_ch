import React, { Component } from 'react'

class IdeasContainer extends React.Component {
    // need to give state to prepare for api
    constructor(props) {
        super(props)
        this.state = {
            ideas:  []
        }
    }

    render() {
        return (
            <div className="">
                Ideas (woohoo)

            </div>
        );
    }
}

export default IdeasContainer
