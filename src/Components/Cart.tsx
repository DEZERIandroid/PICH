import { Link } from "react-router-dom"
import '../Styles/Cart.css'
import { useSelector, useDispatch } from 'react-redux'
import { plusFruit,minusFruit,deleteFruit,clearCart, } from "../Store/CartSlice"
import { useState } from "react"
    
const Cart = () => {
  const cartFruits = useSelector((state:any) => state.cart.fruits)
  const dispatch = useDispatch()

  const [showModal,setShowModal] = useState(false)

  return (
    <div className='cartes' >
      <h2>Корзина</h2>
      {cartFruits.length === 0 ? (
        <p>Корзина пуста 
          <br />
          <Link className="cta-button" to="/catalog">Начать покупки</Link>
        </p>
        
      ) : (
        <>
        
        {/*Модальное окно---------------------------------------*/}
        {showModal && (
          <div className="modal-backdrop">
            <div className="modal">
              <p>Вы уверены, что хотите удалить всё? 🗑️</p>
              <div className="modal-buttons">
                <button onClick={() => {dispatch(clearCart());
                  setShowModal(false);
                }}>Да</button>
                <button onClick={() => setShowModal(false)}>Отмена</button>
              </div>
            </div>
          </div>
        )}
        {/*Модальное окно-----------------------------------------*/}

      <div onClick={() => setShowModal(true)} className="delete-shops">🗑️</div>
      <ul className='cart-ul'>
        {cartFruits.map((fruit:any) => (
          <li key={fruit.id}>
            <div className="cart-fruit-name">
              {fruit.name}: {fruit.quantity}
            </div>
            <div className="cart-fruit-price">
              {fruit.price * fruit.quantity}
            </div>
            <div className="count-buttons">
              <button onClick={() => dispatch(minusFruit(fruit.id))} className='decrement'>-</button>
              <button onClick={() => dispatch(plusFruit(fruit.id))} className='incrmenet'>+</button>
              <button onClick={() => dispatch(deleteFruit(fruit.id))} style={{marginLeft:"10px"}} className='incrmenet'>⚡</button>
            </div>
            
          </li>
        ))}
      </ul>
      <div className="total-price">
              {cartFruits.reduce((sum:number,fruit:any) => sum + fruit.price * fruit.quantity,0)}
      </div>
      <Link to="/registration" className='shop-button'>Перейти к оформлению</Link>
      </>
      ) }
      
    </div>
  )
 }
export default Cart