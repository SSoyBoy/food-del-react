import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img src={image} alt="" className="food-item-image" />
            {!cartItems[id]
                ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt=''></img>
                : <div className='food-item-counter'>
                    <img onClick={()=> removeFromCart(id)} className='remove' src={assets.remove_icon_red} alt=''></img>
                    <p>{cartItems[id]}</p>
                    <img onClick={()=> addToCart(id)} className='remove' src={assets.add_icon_green} alt=''></img>
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt=''></img>
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">{price}</p>
        </div>
    </div>
  )
}

export default FoodItem
