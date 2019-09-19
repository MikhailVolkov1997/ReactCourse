import React from "react"
import './Card.css'

 export default class AddProduct extends React.Component {
    constructor(props) {
        super(props)
        this.valueTitle = "Samsung";
        this.valueDiscont = 54;
        this.valuePrice = 45
        this.newTitle = React.createRef();
        this.newPrice = React.createRef();
        this.newDiscont = React.createRef();
    }

    handleClick= (e)=> {
        let title = this.newTitle.current.value;
        let price = this.newPrice.current.value;
        let discont = this.newDiscont.current.value;
        let newProduct = {
            title,
            price,
            discont
        }
        let newLocalProduct = JSON.stringify(newProduct);
        localStorage.setItem("newProduct",newLocalProduct)
    }
     render () {
         return <div className='form'>
                <input className='area' type="text" placeholder='title' ref={this.newTitle} valueTitle={this.valueTitle}></input>
                <input className='area' type="number" placeholder='price' ref={this.newPrice} valuePrice={this.valuePrice}></input>
                <input className='area' type="number" placeholder='discont' ref={this.newDiscont} valueDiscont={this.valueDiscont}></input>
                <input className='area' type="submit" value='submit' onClick={this.handleClick} ></input>
    
         </div>
     }



}