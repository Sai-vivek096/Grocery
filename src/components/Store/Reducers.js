import { combineReducers } from "redux";
import ItemsReducer from "../Fruits/FruitsReducer";
import ItemReducer from "../SingleItem/SingleReducer";
import cartReducer from "../Cart/CartReducer";
import addressReducer from "../CheckOut/AddressReducer";
import orderReducer from "../CheckOut/OrderReducer";
import similarItemsReducer from "../SingleItem/similarItemsReducer ";


const rootReducer = combineReducers({
    items: ItemsReducer,
    singleItem: ItemReducer,
    cart: cartReducer,
    address: addressReducer,
    order: orderReducer,
    similarItems: similarItemsReducer,
})

export default rootReducer