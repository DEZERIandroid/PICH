import '../Styles/Catalog.css' 
import { addToCart } from '../Store/CartSlice'
import { useDispatch, useSelector,} from 'react-redux'
import { sort } from '../Store/CatalogSlice'
import { useState } from 'react'
  
const Catalog = () => {
  const dispatch = useDispatch()
  const fruits = useSelector((state:any) => state.catalog.fruits)
  const [searchFruit,setSearchFruit] = useState('')
  const [sortsName,setSortsName] = useState("asc")
  const [sortsPrice,setSortsPrice] = useState("asc")

  const filteredFruits = fruits.filter((fruit:any) => 
    fruit.name.toLowerCase().includes(searchFruit.toLocaleLowerCase())
  )

  const sortName = () => {
      dispatch(sort("name"));
      setSortsName(prev => prev === "asc" ? "desc" : "asc")
  }
  const sortPrice = () => {
      dispatch(sort("price"));
      setSortsPrice(prev => prev === "asc" ? "desc" : "asc")
  }

  return (
    <div>
      <div className="controls">
        <input
          type="text"
          placeholder="Введите текст"
          className="search-input"
          value={searchFruit}
          onChange={(e) => setSearchFruit(e.target.value)}
        />
        <button onClick={sortName} className="sort-button">Сорт по имени : {sortsName === "asc" ? "A-z" : "Z-a"}</button>
        <button onClick={sortPrice} className="sort-button">Сорт по цене : {sortsPrice === "asc" ? "↑" : "↓"}</button>
      </div>
      <div className="catalog">
        {filteredFruits.map((fruit:any) => (
          <div onClick={() => dispatch(addToCart(fruit))} key={fruit.id} className="fruit-card">
            <h3 className="fruit-name">{fruit.name}</h3>
            <p className="fruit-price">{fruit.price} ₽</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Catalog