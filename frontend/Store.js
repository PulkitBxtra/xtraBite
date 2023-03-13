import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './Features/BasketSlice'

const Store = configureStore({
  reducer: {
    basket: basketReducer, 
  },
})

export default Store