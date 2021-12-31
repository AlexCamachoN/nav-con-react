import React from 'react'
import logocarro from '../logonuevo.jpg';


export function CartWidget(props) {
    const {numOfItems}=props
    return (
        <div>
           
            <a className="navbar-brand" href="#">
                <img src={logocarro} width='100'/>
            </a> 
            <span>{numOfItems}</span>
        </div>
    )
}

export default CartWidget
