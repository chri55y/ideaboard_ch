import React, { Component } from 'react'

class IdeasContainer extends React.Component {
    // need to give state to prepare for api
    constructor(props) {
        super(props)
        this.state = {
            ideas:  []
        }
    }

    componentDidMount() {
        // this is how we're going to get our ideas from/through api

        // use JS lib axios

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
