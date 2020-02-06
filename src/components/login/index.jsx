import React, { Component } from 'react'
import './styles.css'

export default class Login extends Component {
    render() {
        return (
            <div id="Login">
                <h1>Create an account</h1>
                <form action="post" id="sign-up-form">
                    <select name="role" id="role">
                    <optgroup label="Roles">
                        <option value="user">User</option>
                        <option value="admin" disabled>Administrator</option>
                    </optgroup>
                    </select>
                    
                    <input type="text" name="name" id="name" placeholder="Tell us your name"/>
                    <input type="email" name="email" id="email" placeholder="Now your e-mail"/>
                    <input type="password" name="password" id="password" placeholder="Choose a srtrong password"/>
                    <button type="submit" disabled>Create account</button>
                </form>
            </div>
        )
    }
}
