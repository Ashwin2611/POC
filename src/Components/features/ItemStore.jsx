import { configureStore } from '@reduxjs/toolkit'
// import { Provider } from 'react-redux'
import  ItemSlice  from './Store.jsx'

const store=configureStore({
  reducer:{
    items:ItemSlice
  }
})
export default store