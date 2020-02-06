import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch("api/users")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    users: data
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.users)
        return (
            <div>
                {this.state.users.map(user => {
                    return(
                        <p>{user.name}</p>
                    )
                })}
            </div>
        )
    }
}
