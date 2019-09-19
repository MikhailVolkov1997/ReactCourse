import React from "react" 
import Card from "./Card";
import './Card.css'

export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.goods = [
            {id:1,title:"Samsung", price:212, discont: 5},
            {id:2,title:"iPhone", price:453, discont: 34},
            {id:3,title:"Xiaomi", price:455, discont: 12},
            {id:4,title:"Huawei", price:344, discont: 5},
            {id:5,title:"Meizu", price:122, discont: 5},
            {id:6,title:"Honor", price:211, discont: 5},
            {id:7,title:"Nokia", price:10, discont: 5},
            {id:8,title:"Motorolla", price:23, discont: 5}
        ];
        
        this.state = {
           filteredProduct:this.goods
        }

        this.searchValue = "";

    }
    searchChange = (e) => {
        const searchValue = e.target.value;

        const filteredProduct = this.goods
                    .filter(product =>
                        product.title && product.title.match(new RegExp(searchValue, 'gi')));
        this.setState({
            filteredProduct
      });
       
    }

    // componentDidMount () {
    //     let newProduct = localStorage.getItem("newProduct");
    //     let parseNewProduct = JSON.parse(newProduct);
    //     this.state.filteredProduct.push(parseNewProduct);
    //     this.setState({
    //         filteredProduct:this.goods
    //     })
    // }


    render () {
        
        return <div>
            <input type="text" className="search" onChange={this.searchChange} value={this.state.searchValue}/>
             {this.state.filteredProduct.map(item => { 
                return <Card 
                id={item.id}
                title={item.title}
                price = {item.price}
                discont = {item.discont}
                />
            })}
        </div>
    }
 }