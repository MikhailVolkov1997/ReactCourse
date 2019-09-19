import React from "react"
import {NavLink} from "react-router-dom"
import './Card.css'

export default class Home extends React.Component {

    

    clearLocalStorage() {
        localStorage.clear();
    }

    
    render () {
        return <div>
            
            <ul className="ul-list">
                <NavLink to="/product"><li>Product</li></NavLink>
                <NavLink to="/basket"><li>Basket</li></NavLink>
                <NavLink to='/addproduct'><li>Add product</li></NavLink>
            </ul>
            <button onClick={this.clearLocalStorage}>clear localstorage</button>
        </div>
    }
}