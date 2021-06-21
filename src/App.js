// create your App component here
//Create an 'App' class Comp. 
//Write a componentDidMount method 
//inside CDM set a fetch request to the API 
//returns a list of people currently in space. 

import React, { Component } from 'react'

export class App extends Component {
    //sets state peopleInSpace to an empty array
    state = {
        peopleInSpace: []
    }
    
    //maps through peopleInSpace and renders the names
    render() {
        return (
            <div>
                {this.state.peopleInSpace.map(person => person.name)}
            </div>
        )
    }

    //fetch request gets data from the server, updates states peopleInSpace to data.people 
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(res => res.json())
            .then(data => {
                //console.log(data),
                this.setState({
                    peopleInSpace: data.people
            })
        })
    }
}

export default App
