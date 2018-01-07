import React from 'react'
import axios from 'axios'   // axios lib
import {Idea} from './Idea'

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
                // console.log(response)
                this.setState({ ideas: response.data })
            })
            .catch(error => console.log(error))
    }

    // defining as ES6 arrow function allows us to avoid adding binds in constructor
    addNewIdea = () => {
        // copied from above, but changed the following
        // get > post
        // remove .json
        // send
        axios.post('http://localhost:3001/api/v1/ideas', {idea: {title: '', body: ''}})
            .then(response => {
                console.log(response)
                // this.setState({ ideas: response.data })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <div>
                    <button className="newIdeaButton" onClick={this.addNewIdea}>
                        Add New Idea
                    </button>
                </div>

                {this.state.ideas.map((idea) => {
                    return (
                        <Idea {...idea} key={idea.id} />
                        )
                    })
                }
            </div>
        );
    }
}

export default IdeasContainer
