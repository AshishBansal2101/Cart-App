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
      // this.state.qty+=1;
      // console.log('this.state',this.state);
      //  setState form 1
        // this.setState({
        //   qty:this.state.qty+1
        // },()=>{});               callback
      // setState form 2 -if prevstate required use this
      this.setState((prevState)=>{
        return {
          qty:prevState.qty+1
        }
      })
    }
    decreaseQuantity=()=>{
    const {qty}=this.state;
    if(qty==0){
      return;
    }
    this.setState((prevState)=>{
      return{
        qty:prevState.qty-1
      }
    })
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
                src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                onClick={this.increaseQuantity}
                // onClick={this.increaseQuantity.bind(this)}
                />
               <img alt="decrease" 
               className="action-icons" 
               src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
               onClick={this.decreaseQuantity}
               />
               <img alt="delete" 
               className="action-icons" 
               src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
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