import React from 'react'; 
import Cart from './Cart';
import Navbar from './Navbar';
class App extends React.Component {
  constructor(){
    super();
    this.state={
        products:[
            {
                price: 99,
                title: 'Watch',
                qty: 1,
                img:'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80',
                id:1
            },
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 10,
                img:'https://images.unsplash.com/photo-1560617544-b4f287789e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
                id:2
            },
            {
                price: 999,
                title: 'Laptop',
                qty: 4,
                img:'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80',
                id:3
            }
        ]
    }
    // this.testing();
  //   this.increaseQuantity=this.increaseQuantity.bind(this);
  }
handleIncreaseQuantity=(product)=>{
    console.log('Heyy please inc the qty of',product);
    const {products}=this.state;
    const index=products.indexOf(product);

    products[index].qty+=1;

    this.setState({
        products
        // products:products
    })
}
handleDecreaseQuantity=(product)=>{
    console.log('Heyy please dec the qty of',product);
    const {products}=this.state;
    const index=products.indexOf(product);
    if(products[index].qty===0){
    return;
    }
    products[index].qty-=1;

    this.setState({
        products
        // products:products
    })
}
handleDeleteProduct=(id)=>{
    const {products}=this.state;

    const items=products.filter((item)=>item.id!==id);//[{}]

    this.setState({
        products:items
    })
}
getCartCount=()=>{
  const{products}=this.state;

  let count=0;

  products.forEach((product)=>{
    count+=product.qty;
  })

  return count;
}
getCartTotal=()=>{
  const { products }=this.state;

  let cartTotal=0;

  products.map((product)=>{
    cartTotal=cartTotal+product.qty*product.price
  })
  return cartTotal;
}
  render() {
  const { products}=this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart
      products={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProduct={this.handleDeleteProduct}
      />
      <div style={{padding:10,fontSize:20}}>TOTAL:{this.getCartTotal()}</div>
    </div>
  );
  }
}

export default App;
