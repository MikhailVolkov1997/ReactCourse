import React from "react" 
import "./Card.css"

export default class Card extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
        isActive: false,
    }
        this.title = "";
        this.price = this.getPrice()
        this.currencySign = "$";
        this.defaultPrice = 0;
        this.defaultTitle = "No title"
        this.basket = [];
        
   }

  getPrice = (price) => {
     return this.props.price || this.defaultPrice
     
   }
    getTitle () {
        return !this.props.title ? this.defaultTitle : this.props.title 
    }
   
    setPrice(price) {
       return this.price = price  ;
    }

    handleClick = () => {
        
         this.setState({
            isActive: !this.state ? true : !this.state.isActive
        });
        let price = +Math.round((Math.random()*100)).toFixed(2);
        this.setPrice(price);

    }
    getClassName() {
        return this.state && this.state.isActive 
          ? "card-active"
          : "card"
    }
    

    getKey(product) {
        return product.title
    }

    addToBasket = (e) => {
     
        e.stopPropagation();
        
             this.basket.push({
                    key:this.props.id,
                    title:this.props.title,
                    price:this.price,
                    discont:this.props.discont
                })
    }

    componentWillUnmount() {
        if (this.basket.length !== 0) {
         let stringProducts = JSON.stringify(this.basket);
         localStorage.setItem('basket', stringProducts)
        }
    }
   render () {

       return  <div className={this.getClassName()}>
           
       <div  onClick={this.handleClick}>
                <div className="title"> {this.getTitle()}</div>
                <div className="price"> price: {this.getPrice() }</div>
                <div className="discont"> discont:{this.props.discont}</div>
                <button className="button" onClick={this.addToBasket}>buy</button>
            </div>
            </div>
           
       
   }
}