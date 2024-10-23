//STATE TYPES
type CartType = {
  id: number;
  item: string;
  qty: number;
};

export type StateType = {
  cart: CartType[];
};

//ACTION TYPES
export enum Actions {
  ADD_ITEM = "addItem",
  REMOVE_ITEM = "removeItem",
  INCREASE_QTY = "increaseQty",
  DECREASE_QTY = "decreaseQty",
}

type AddItemAction = {
  type: Actions.ADD_ITEM;
  payload: { item: string };
};

type ItemIdAction = {
  type: Actions.REMOVE_ITEM | Actions.INCREASE_QTY | Actions.DECREASE_QTY;
  payload: { id: number };
};

type ActionType = AddItemAction | ItemIdAction;

//helper functions
const removeItem = (state: StateType, id: number): StateType => {
  const filteredCart = state.cart.filter((item) => item.id !== id);
  return { ...state, cart: filteredCart };
};

//REDUCER FUNCTION
export const cartReducer = (
  state: StateType,
  action: ActionType
): StateType => {
  switch (action.type) {
    case Actions.ADD_ITEM: {
      const newItem: CartType = {
        id: Date.now(),
        item: action.payload.item,
        qty: 1,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }

    case Actions.REMOVE_ITEM: {
      const { id } = action.payload;
      return removeItem(state, id);
    }

    case Actions.INCREASE_QTY: {
      const { id } = action.payload;
      const foundItem = state.cart.find((item) => item.id === id);
      if (foundItem) {
        const mappedCart = state.cart.map((item) => {
          if (item.id === foundItem.id) {
            return { ...item, qty: item.qty + 1 };
          }
          return item;
        });

        return {
          ...state,
          cart: mappedCart,
        };
      }
      return state;
    }

    case Actions.DECREASE_QTY: {
      const { id } = action.payload;
      const foundItem = state.cart.find((item) => item.id === id);

      if (foundItem) {
        if (foundItem.qty - 1 === 0) {
          return removeItem(state, id);
        }
        const mappedCart = state.cart.map((item) => {
          if (item.id === foundItem.id) {
            return { ...item, qty: item.qty - 1 };
          }
          return item;
        });

        return {
          ...state,
          cart: mappedCart,
        };
      }
      return state;
    }

    default: {
      return state;
    }
  }
};
