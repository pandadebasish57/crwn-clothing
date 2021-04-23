import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.style.scss';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';


const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);