import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './Features/BasketSlice'
import restaurantReducer from './Features/RestaurantSlice'

const Store = configureStore({
  reducer: {
    basket: basketReducer, 
    restaurant: restaurantReducer,
  },
})

export default Store