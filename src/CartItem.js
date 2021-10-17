import React from 'react';

class CartItem extends React.Component{
    constructor(){
      super();
      this.state={
          price: 999,
          title: 'Mobile Phone',
          qty: 1,
          img:''
      }
    //   this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    increaseQuantity=()=>{
      console.log('this.state',this.state);
    }
    render(){
        const {price,title,qty}=this.state
        return(
          <div className="cart-item">
              <div className="left-block">
               <img style={styles.image}/>
              </div>
              <div className="right-block">
               <div style={{fontSize:25}}>{title}</div>
               <div style={{color:'#777'}}>Rs. {price}</div>
               <div style={{color:'#777'}}>Qty: {qty}</div>
               <div className="cart-item-actions">
               {/* Buttons */}
               <img alt="increase"
                className="action-icons"
                src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1634476184~hmac=fa000772ebd0b541ae4a7d60fc7d12de"
                onClick={this.increaseQuantity}
                // onClick={this.increaseQuantity.bind(this)}
                />
               <img alt="decrease" 
               className="action-icons" 
               src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
               />
               <img alt="delete" 
               className="action-icons" 
               src="https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1634476259~hmac=f1fceb1a66d68fabf5d0b2aa1b76406e"
               />
               </div>
              </div>
          </div>
        );
    }
}

const styles={
    image:{
        height:100,
        width:110,
        borderRadius:4,
        background:'#ccc',
    }
}
export default CartItem;