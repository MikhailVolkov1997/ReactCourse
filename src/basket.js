import React from "react"
import "./Card.css"
import { runInThisContext } from "vm";


 export default class Basket extends React.Component {
    constructor(props) {
        super(props);
        this.total = 0;
        this.state = {
            basketProducts:[]
        }
    }
    
    componentDidMount () {
        let keys = Object.keys(localStorage);
        for(let i = 0; i < keys.length; i++) {
            let parse = JSON.parse(localStorage.getItem(keys[i]))
            this.state.basketProducts.push(parse);
          }
          this.setState({
              basketProducts:this.state.basketProducts
          })
          
    } 

    totalAmount () {
         this.state.basketProducts.map(item => {
            return this.total += (!item ? 0 : item.price)
        })
        return this.total
    }

 

    removeCard =(event) => {
        event.stopPropagation();
        let result = this.state.basketProducts.find(item => item.key == event.target.value)
           localStorage.removeItem(result.title);
           this.getLocalStorage()

    }
    getLocalStorage () {
        let keys = Object.keys(localStorage);
        keys.map(item => {
            for (let i = 0; i < this.state.basketProducts.length; i++){
                if(item === this.state.basketProducts[i].title){
                    continue;
                }
                let parse = JSON.parse(localStorage.getItem(keys[i]))
                this.state.basketProducts.push(parse);
            }
        })
             
       
            
          
          this.setState({
            basketProducts:this.state.basketProducts
          })
    }
    
    

    render() {
        return <div>
                   
                    <div>{!this.state.basketProducts ? <div>no products</div> : this.state.basketProducts.map(item => {
                        return <div className="basketCard" > 
                             <div>{!item ? "No title" : item.title}</div>
                             <div>{!item ? "No price" : item.price}</div>
                              <button onClick={this.removeCard} value={item.key} > remove card</button>  
                        </div>
                        
                    })}</div>
                    <div>total amount:{this.totalAmount()}</div>
            </div>
    }
}