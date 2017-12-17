import React, { Component } from 'react'
import axios from 'axios'   // axios lib

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
        axios.get('http://localhost:3001/api/v1/ideas.json')
        .then(response => {
            console.log(response)
            this.setState({ ideas: response.data })
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                {}
            </div>
        );
    }
}

export default IdeasContainer
