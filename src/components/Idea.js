import React from 'react'

// as const
// like Learnetto does, but with in-line export,
// with <Idea idea={idea} key={idea.id} /> in IdeasContainer
// export const Idea = ({idea}) =>
//     <div className="tile" key={idea.id} >
//         <h4>{idea.title}</h4>
//         <p>{idea.body}</p>
//     </div>

// as const
// with spread operator <Idea {...idea} key={idea.id} /> in IdeasContainer
export const Idea = (props) =>
    <div className="tile" >
        <h4>{props.title}</h4>
        <p>{props.body}</p>
    </div>


// as class
// with spread operator <Idea {...idea} key={idea.id} /> in IdeasContainer
// export class Idea extends React.Component {
//     render () {
//         return (
//             <div className="tile" >
//                 <h4>{this.props.title}</h4>
//                 <p>{this.props.body}</p>
//             </div>
//         )
//     }
// }


// export default Idea