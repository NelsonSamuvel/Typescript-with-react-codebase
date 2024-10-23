import { FormEvent, useReducer, useState } from "react";
import { StateType, cartReducer, Actions } from "./cartReducer";


const initialState: StateType = {
  cart: [],
};

//HANDLE-INCREASE AND HANDLE-DECREASE
interface HandleItem {
  (id: number): void;
}

const Cart = () => {
  const [{ cart }, dispatch] = useReducer(cartReducer, initialState);

  const [item, setItem] = useState("");

  const handleAdd = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: Actions.ADD_ITEM, payload: { item } });
    setItem("");
  };

  const handleIncreaseQty: HandleItem = (id) => {
    dispatch({ type: Actions.INCREASE_QTY, payload: { id } });
  };

  const handleDecreaseQty: HandleItem = (id) => {
    dispatch({ type: Actions.DECREASE_QTY, payload: { id } });
  };

  const handleRemove = (id: number) => {
    dispatch({ type: Actions.REMOVE_ITEM, payload: { id } });
  };

  return (
    <div>
      <h1>Cart</h1>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>

      <div>
        <h1>Item List</h1>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <h1>{item.item}</h1>
              <p>{item.qty}</p>
              <button onClick={() => handleDecreaseQty(item.id)}>-</button>
              <button onClick={() => handleIncreaseQty(item.id)}>+</button>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
