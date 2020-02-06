import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch("http://127.0.0.1:3001/api/users")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    users: data
                })
            })
            .catch(err => console.log(err))
    }

    render() {
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
